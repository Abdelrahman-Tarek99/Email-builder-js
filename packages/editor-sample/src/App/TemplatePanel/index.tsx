import React, { useEffect, useState } from "react";
import {
  MonitorOutlined,
  PhoneIphoneOutlined,
} from "@mui/icons-material";
import {
  Box,
  Stack,
  SxProps,
  ToggleButton,
  ToggleButtonGroup,
  Tooltip,
} from "@mui/material";
import { Reader } from "@usewaypoint/email-builder";
import ReactDOMServer from "react-dom/server";

import EditorBlock from "../../documents/editor/EditorBlock";
import {
  setSelectedScreenSize,
  useSelectedMainTab,
  useSelectedScreenSize,
  useDocument,
  setDocument
} from "../../documents/editor/EditorContext";

import ToggleInspectorPanelButton from "../InspectorDrawer/ToggleInspectorPanelButton";
import ToggleSamplesPanelButton from "../SamplesDrawer/ToggleSamplesPanelButton";
import DownloadJson from "./DownloadJson";
import HtmlPanel from "./HtmlPanel";
import ImportJson from "./ImportJson";
import JsonPanel from "./JsonPanel";
import MainTabsGroup from "./MainTabsGroup";
import ShareButton from "./ShareButton";
import { importFromHtml } from "./helper/ImportFromHTML";

export default function TemplatePanel() {
  const [authToken, setAuthToken] = useState<string | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const document = useDocument();
  const selectedMainTab = useSelectedMainTab();
  const selectedScreenSize = useSelectedScreenSize();

  let mainBoxSx: SxProps = { height: "100%" };
  if (selectedScreenSize === "mobile") {
    mainBoxSx = {
      ...mainBoxSx,
      margin: "32px auto",
      width: 370,
      height: 800,
      boxShadow:
        "rgba(33, 36, 67, 0.04) 0px 10px 20px, rgba(33, 36, 67, 0.04) 0px 2px 6px, rgba(33, 36, 67, 0.04) 0px 0px 1px",
    };
  }

  // Token validation function
  const validateToken = (token: string): boolean => {
    console.log("[Child] Validating token:", token);
    
    // Basic validation - you can expand this based on your needs
    if (!token || token.length < 6) {
      console.log("[Child] Token validation failed - invalid format");
      return false;
    }
    
    // Example: Check if token matches expected format or make API call
    // For demo purposes, we'll accept any token that's "112233" or longer than 6 chars
    if (token === "112233" || token.length >= 6) {
      console.log("[Child] Token validation successful");
      return true;
    }
    
    console.log("[Child] Token validation failed - unauthorized");
    return false;
  };

  const generateHtmlFromDocument = () => {
    if (!document || !document.root) {
      return '<div style="padding: 20px; font-family: Arial, sans-serif;">Empty email template</div>';
    }

    return ReactDOMServer.renderToStaticMarkup(
      React.createElement(Reader, { document, rootBlockId: "root" })
    );
  };

  const createCompleteHtmlDocument = (bodyHtml: string) => `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Email Template</title>
        <style>
          body { margin: 0; padding: 0; -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
          table { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
          img { border: 0; height: auto; line-height: 100%; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
        </style>
      </head>
      <body style="margin: 0; padding: 0; background-color: #f5f5f5;">
        ${bodyHtml}
      </body>
    </html>`;

  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      console.log("[Child] Received message:", event.data);
      const { type, payload } = event.data || {};

      if (type === "AUTH_TOKEN" && payload?.token) {
        console.log("[Child] Received AUTH_TOKEN:", payload.token);
        
        // Validate the token
        const isValid = validateToken(payload.token);
        
        if (isValid) {
          setAuthToken(payload.token);
          setIsAuthenticated(true);
          console.log("[Child] Token set and authenticated");
          
          // Send confirmation back to parent
          if (window.parent && window.parent !== window) {
            window.parent.postMessage({
              type: "TOKEN_RECEIVED",
              payload: { success: true, token: payload.token }
            }, "*");
          }
        } else {
          console.log("[Child] Token validation failed, not setting token");
          setIsAuthenticated(false);
          
          // Send failure back to parent
          if (window.parent && window.parent !== window) {
            window.parent.postMessage({
              type: "TOKEN_RECEIVED",
              payload: { success: false, error: "Invalid token" }
            }, "*");
          }
        }
      }

      if (type === "LOAD_TEMPLATE" && payload?.html) {
        console.log("[Child] Loading template");
        if (!isAuthenticated) {
          console.warn("[Child] Cannot load template - not authenticated");
          return;
        }
        const json = importFromHtml(payload.html);
        setDocument(json);
      }

      if (type === "REQUEST_SAVE") {
        console.log("[Child] Save requested");
        if (!isAuthenticated) {
          console.warn("[Child] Cannot save - not authenticated");
          if (window.parent && window.parent !== window) {
            window.parent.postMessage({
              type: "SAVE_ERROR",
              payload: { error: "Not authenticated" }
            }, "*");
          }
          return;
        }

        const bodyHtml = generateHtmlFromDocument();
        const fullHtml = createCompleteHtmlDocument(bodyHtml);
        const responsePayload = {
          type: "TEMPLATE_SAVED",
          payload: {
            html: fullHtml,
            document,
            token: authToken,
            timestamp: Date.now(),
            templateName: payload?.templateName || "Untitled Template"
          },
        };

        console.log("[Child] Sending TEMPLATE_SAVED:", responsePayload);
        if (window.parent && window.parent !== window) {
          window.parent.postMessage(responsePayload, "*");
        }
      }
    };

    window.addEventListener("message", handleMessage);

    // Send ready message to parent
    const readyMessage = { 
      type: "EDITOR_READY", 
      payload: { timestamp: Date.now() } 
    };
    console.log("[Child] Sending EDITOR_READY:", readyMessage);
    window.parent?.postMessage(readyMessage, "*");

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [document, authToken, isAuthenticated]);

  const handleScreenSizeChange = (_: unknown, value: unknown) => {
    if (value === "mobile" || value === "desktop") {
      setSelectedScreenSize(value);
    } else {
      setSelectedScreenSize("desktop");
    }
  };

  const renderMainPanel = () => {
    // Show authentication status
    if (!isAuthenticated) {
      return (
        <Box sx={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          height: '100%',
          flexDirection: 'column',
          gap: 2
        }}>
          <div>Waiting for authentication...</div>
          {authToken && <div style={{ fontSize: '12px', color: 'red' }}>Token validation failed</div>}
        </Box>
      );
    }

    switch (selectedMainTab) {
      case "editor":
        return <Box sx={mainBoxSx}><EditorBlock id="root" /></Box>;
      case "preview":
        return <Box sx={mainBoxSx}><Reader document={document} rootBlockId="root" /></Box>;
      case "html":
        return <HtmlPanel />;
      case "json":
        return <JsonPanel />;
      default:
        return <Box sx={mainBoxSx}><EditorBlock id="root" /></Box>;
    }
  };

  return (
    <>
      <Stack
        sx={{
          height: 49,
          borderBottom: 1,
          borderColor: "divider",
          backgroundColor: isAuthenticated ? "white" : "#ffebee",
          position: "sticky",
          top: 0,
          zIndex: "appBar",
          px: 1,
        }}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <ToggleSamplesPanelButton />
        <Stack
          px={2}
          direction="row"
          gap={2}
          width="100%"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack direction="row" spacing={2}>
            <MainTabsGroup />
            {/* Show auth status indicator */}
            <Box sx={{ 
              fontSize: '12px', 
              color: isAuthenticated ? 'green' : 'red',
              display: 'flex',
              alignItems: 'center'
            }}>
              {isAuthenticated ? '🔒 Authenticated' : '🔓 Not Authenticated'}
            </Box>
          </Stack>
          <Stack direction="row" spacing={2}>
            <DownloadJson />
            <ImportJson />
            <ToggleButtonGroup
              value={selectedScreenSize}
              exclusive
              size="small"
              onChange={handleScreenSizeChange}
              disabled={!isAuthenticated}
            >
              <ToggleButton value="desktop">
                <Tooltip title="Desktop view">
                  <MonitorOutlined fontSize="small" />
                </Tooltip>
              </ToggleButton>
              <ToggleButton value="mobile">
                <Tooltip title="Mobile view">
                  <PhoneIphoneOutlined fontSize="small" />
                </Tooltip>
              </ToggleButton>
            </ToggleButtonGroup>
            <ShareButton />
          </Stack>
        </Stack>
        <ToggleInspectorPanelButton />
      </Stack>
      <Box
        sx={{
          height: "calc(100vh - 49px)",
          overflow: "auto",
          minWidth: 370,
        }}
      >
        {renderMainPanel()}
      </Box>
    </>
  );
}