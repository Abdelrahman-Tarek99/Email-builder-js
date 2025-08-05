import React, { useEffect, useState } from 'react';
import { MonitorOutlined, PhoneIphoneOutlined } from '@mui/icons-material';
import { Box, Stack, ToggleButton, ToggleButtonGroup, Tooltip } from '@mui/material';
import { Reader } from '@usewaypoint/email-builder';
import ReactDOMServer from "react-dom/server";

import EditorBlock from '../../documents/editor/EditorBlock';
import { 
    setSelectedScreenSize, 
    useDocument, 
    useSelectedMainTab, 
    useSelectedScreenSize,
    setDocument 
} from '../../documents/editor/EditorContext';

import ToggleInspectorPanelButton from '../InspectorDrawer/ToggleInspectorPanelButton';
import ToggleSamplesPanelButton from '../SamplesDrawer/ToggleSamplesPanelButton';
import DownloadJson from './DownloadJson';
import HtmlPanel from './HtmlPanel';
import ImportJson from './ImportJson';
import JsonPanel from './JsonPanel';
import MainTabsGroup from './MainTabsGroup';
import ShareButton from './ShareButton';
import { importFromHtml } from './helper/ImportFromHTML';

export default function TemplatePanel() {
    const [authToken, setAuthToken] = useState(null);
    const document = useDocument();
    const selectedMainTab = useSelectedMainTab();
    const selectedScreenSize = useSelectedScreenSize();

    let mainBoxSx = { height: '100%' };
    if (selectedScreenSize === 'mobile') {
        mainBoxSx = { ...mainBoxSx, margin: '32px auto', width: 370, height: 800 };
    }

    const generateHtmlFromDocument = () => {
        if (!document || !document.root) {
            return '<div style="padding: 20px; font-family: Arial, sans-serif;">Empty email template</div>';
        }

        return ReactDOMServer.renderToStaticMarkup(
            React.createElement(Reader, { document, rootBlockId: "root" })
        );
    };

    const createCompleteHtmlDocument = (bodyHtml) => `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Email Template</title>
        </head>
        <body>${bodyHtml}</body>
        </html>`;

    useEffect(() => {
        const handleMessage = (event) => {
            const { type, payload } = event.data || {};
            if (type === "AUTH_TOKEN" && payload?.token) {
                setAuthToken(payload.token);
            }
            if (type === "LOAD_TEMPLATE" && payload?.html) {
                const json = importFromHtml(payload.html);
                setDocument(json);
            }
            if (type === "REQUEST_SAVE") {
                const bodyHtml = generateHtmlFromDocument();
                const fullHtml = createCompleteHtmlDocument(bodyHtml);
                const responsePayload = {
                    type: "TEMPLATE_SAVED",
                    payload: { html: fullHtml, document, token: authToken }
                };
                if (window.parent && window.parent !== window) {
                    window.parent.postMessage(responsePayload, "*");
                }
            }
        };
        window.addEventListener("message", handleMessage);

        window.parent?.postMessage({ type: "EDITOR_READY" }, "*");

        return () => {
            window.removeEventListener("message", handleMessage);
        };
    }, [document, authToken]);

    const handleScreenSizeChange = (_, value) => {
        setSelectedScreenSize(value === 'mobile' || value === 'desktop' ? value : 'desktop');
    };

    const renderMainPanel = () => {
        switch (selectedMainTab) {
            case 'editor': return React.createElement(Box, { sx: mainBoxSx }, React.createElement(EditorBlock, { id: "root" }));
            case 'preview': return React.createElement(Box, { sx: mainBoxSx }, React.createElement(Reader, { document, rootBlockId: "root" }));
            case 'html': return React.createElement(HtmlPanel, null);
            case 'json': return React.createElement(JsonPanel, null);
        }
    };

    return React.createElement(React.Fragment, null,
        React.createElement(Stack, { sx: { height: 49, borderBottom: 1, borderColor: 'divider', backgroundColor: 'white', position: 'sticky', top: 0, zIndex: 'appBar', px: 1 }, direction: "row", justifyContent: "space-between", alignItems: "center" },
            React.createElement(Stack, { px: 2, direction: "row", gap: 2, width: "100%", justifyContent: "space-between", alignItems: "center" },
                React.createElement(Stack, { direction: "row", spacing: 2 }, React.createElement(MainTabsGroup, null)),
                React.createElement(Stack, { direction: "row", spacing: 2 },
                    React.createElement(DownloadJson, null),
                    React.createElement(ImportJson, null),
                    React.createElement(ToggleButtonGroup, { value: selectedScreenSize, exclusive: true, size: "small", onChange: handleScreenSizeChange },
                        React.createElement(ToggleButton, { value: "desktop" }, React.createElement(Tooltip, { title: "Desktop view" }, React.createElement(MonitorOutlined, { fontSize: "small" }))),
                        React.createElement(ToggleButton, { value: "mobile" }, React.createElement(Tooltip, { title: "Mobile view" }, React.createElement(PhoneIphoneOutlined, { fontSize: "small" })))
                    ),
                    React.createElement(ShareButton, null)
                )
            ),
            React.createElement(ToggleInspectorPanelButton, null)
        ),
        React.createElement(Box, { sx: { height: 'calc(100vh - 49px)', overflow: 'auto', minWidth: 370 } }, renderMainPanel())
    );
}
