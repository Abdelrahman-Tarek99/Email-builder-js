import React, { useEffect, useRef } from 'react';
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

console.log('🟢 CHILD JS: JavaScript file is being imported');

// Safer global instance management
const initializeGlobalState = () => {
    if (!window.EMAIL_BUILDER_JS_INSTANCE) {
        window.EMAIL_BUILDER_JS_INSTANCE = {
            count: 0,
            activeHandlers: [],
            isInitialized: true
        };
    }
    return window.EMAIL_BUILDER_JS_INSTANCE;
};

const getGlobalState = () => {
    return window.EMAIL_BUILDER_JS_INSTANCE || initializeGlobalState();
};

// Initialize and get instance info
const globalState = initializeGlobalState();
const instanceId = ++globalState.count;
const componentId = `js-${Math.random().toString(36).substr(2, 9)}-inst${instanceId}`;

console.log(`🟢 CHILD JS: Instance ${instanceId} mounting (total: ${globalState.count})`);

// Helper function to log messages
const addLog = (message) => {
    const logMessage = `[${componentId}] ${message}`;
    console.log(logMessage);
};

// Create empty template helper
const createEmptyTemplate = () => ({
    root: {
        type: 'EmailLayout',
        data: {
            backdropColor: '#FFFFFF',
            canvasColor: '#FFFFFF',
            textColor: '#333333',
            fontFamily: 'GEOMETRIC_SANS',
            childrenIds: [],
        },
    },
});

export default function TemplatePanel() {
    const document = useDocument();
    const selectedMainTab = useSelectedMainTab();
    const selectedScreenSize = useSelectedScreenSize();
    
    // Store latest document reference
    const latestDocumentRef = useRef(document);
    
    // Update ref whenever document changes and log the change
    useEffect(() => {
        latestDocumentRef.current = document;
        if (document) {
            const childrenCount = document.root?.data?.childrenIds?.length || 0;
            addLog(`🔄 Document state updated - blocks: ${Object.keys(document).length}, children: ${childrenCount}`);
            
            // Log children details
            if (childrenCount > 0) {
                addLog(`🔍 Children IDs: ${JSON.stringify(document.root.data.childrenIds)}`);
            }
        }
    }, [document]);

    let mainBoxSx = { height: '100%' };
    if (selectedScreenSize === 'mobile') {
        mainBoxSx = { ...mainBoxSx, margin: '32px auto', width: 370, height: 800 };
    }

    // Get fresh document state
    const getFreshDocument = () => {
        const freshDoc = latestDocumentRef.current;
        addLog(`🔍 Getting fresh document - blocks: ${Object.keys(freshDoc || {}).length}`);
        return freshDoc;
    };

    // Generate HTML using same method as SaveTemplate
    const generateHtmlFromDocument = () => {
        const currentDocument = getFreshDocument();
        
        addLog(`🟢 Generating HTML - document exists: ${!!currentDocument}`);
        addLog(`🟢 Document has root: ${!!currentDocument?.root}`);
        
        if (!currentDocument || !currentDocument.root) {
            addLog('🟠 No document to generate HTML from');
            return '<div style="padding: 20px; font-family: Arial, sans-serif;">Empty email template</div>';
        }

        try {
            const childrenIds = currentDocument.root.data?.childrenIds || [];
            addLog(`🟢 Document structure: ${Object.keys(currentDocument).length} blocks`);
            addLog(`🟢 Root type: ${currentDocument.root.type}`);
            addLog(`🟢 Children count: ${childrenIds.length}`);
            addLog(`🟢 Children IDs: ${JSON.stringify(childrenIds)}`);
            
            // Verify all children exist
            const missingChildren = childrenIds.filter(childId => !currentDocument[childId]);
            if (missingChildren.length > 0) {
                addLog(`❌ Missing children: ${missingChildren.join(', ')}`);
            }
            
            if (!Reader) {
                throw new Error('Reader component is not available');
            }
            
            // Use exact same method as SaveTemplate
            addLog('🟢 Using Reader + ReactDOMServer (same as SaveTemplate)');
            
            const html = ReactDOMServer.renderToStaticMarkup(
                React.createElement(Reader, { document: currentDocument, rootBlockId: "root" })
            );
            
            if (!html || html.trim().length === 0) {
                throw new Error('Reader generated empty HTML');
            }
            
            if (html.trim() === '<div></div>' || html.trim() === '<div/>') {
                throw new Error('Reader generated only empty div');
            }
            
            addLog(`✅ HTML generation successful, length: ${html.length}`);
            addLog(`🔍 HTML preview: ${html.substring(0, 200)}...`);
            
            return html;
            
        } catch (error) {
            addLog(`❌ Error with Reader: ${error.message}`);
            console.error('❌ Reader error:', error);
            
            // Use fallback
            return generateFallbackHtml(currentDocument, error);
        }
    };

    // Enhanced fallback HTML generation
    const generateFallbackHtml = (currentDocument, originalError) => {
        addLog('🟢 Using fallback HTML generation');
        
        try {
            const { root } = currentDocument;
            const rootData = root.data || {};
            const {
                backdropColor = '#FFFFFF',
                canvasColor = '#FFFFFF', 
                textColor = '#333333',
                fontFamily = 'Arial, sans-serif'
            } = rootData;
            
            const childrenIds = rootData.childrenIds || [];
            addLog(`🟢 Fallback processing ${childrenIds.length} children`);
            
            let emailContent = '';
            
            if (childrenIds.length === 0) {
                emailContent = `
                    <div style="color: ${textColor}; font-size: 16px; text-align: center; padding: 40px 24px;">
                        <h2 style="margin: 0 0 16px 0; color: #ff6b6b;">Empty Email Template</h2>
                        <p style="margin: 0; color: #666;">This template has no content blocks.</p>
                        <p style="margin: 16px 0 0 0; font-size: 12px; color: #999;">Error: ${originalError?.message}</p>
                    </div>`;
            } else {
                emailContent = childrenIds.map(childId => {
                    const childBlock = currentDocument[childId];
                    
                    if (!childBlock) {
                        addLog(`🟠 Block ${childId} missing`);
                        return `<div style="padding: 16px 24px; color: red; font-family: ${fontFamily};">Missing block: ${childId}</div>`;
                    }
                    
                    const blockType = childBlock.type || 'Unknown';
                    const blockData = childBlock.data || {};
                    
                    addLog(`🟢 Fallback rendering ${childId}: ${blockType}`);
                    
                    switch (blockType) {
                        case 'Text':
                            return `<div style="color: ${textColor}; font-size: 16px; font-weight: normal; text-align: left; padding: 16px 24px; font-family: ${fontFamily};">
                                ${blockData.text || blockData.content || 'Text content'}
                            </div>`;
                        
                        case 'Heading':
                            return `<h1 style="color: #ff6b6b; font-weight: normal; text-align: center; margin: 0; font-size: 32px; padding: 16px 24px; font-family: ${fontFamily};">
                                ${blockData.text || blockData.content || 'Heading'}
                            </h1>`;
                        
                        case 'Button':
                            return `<div style="padding: 8px 24px;">
                                <div style="background-color: #ff6b6b; text-align: left; padding: 16px 24px;">
                                    <a href="${blockData.url || blockData.href || '#'}" style="color: white; font-size: 16px; font-weight: bold; background-color: #ff6b6b; border-radius: 4px; display: inline-block; padding: 16px 32px; text-decoration: none; font-family: ${fontFamily};" target="_blank">
                                        ${blockData.text || blockData.label || 'Button'}
                                    </a>
                                </div>
                            </div>`;
                        
                        case 'Image':
                            if (blockData.url || blockData.src) {
                                return `<div style="padding: 16px 24px; text-align: center;">
                                    <img src="${blockData.url || blockData.src}" alt="${blockData.alt || 'Image'}" style="max-width: 100%; height: auto;" />
                                </div>`;
                            }
                            return `<div style="padding: 16px 24px; text-align: center; color: #666; font-family: ${fontFamily};">[Image placeholder]</div>`;
                        
                        case 'Divider':
                            return `<div style="padding: 16px 24px;"><hr style="border: none; border-top: 1px solid #ddd; margin: 0;" /></div>`;
                        
                        default:
                            return `<div style="font-weight: normal; padding: 16px 24px; color: ${textColor}; font-family: ${fontFamily};">
                                ${blockData.text || blockData.content || `[${blockType} block]`}
                            </div>`;
                    }
                }).join('');
            }
            
            const fallbackHtml = `<div style='background-color:${backdropColor};color:${textColor};font-family:${fontFamily};font-size:16px;font-weight:400;letter-spacing:0.15008px;line-height:1.5;margin:0;padding:32px 0;min-height:100%;width:100%'>
                <table align="center" width="100%" style="margin:0 auto;max-width:600px;background-color:${canvasColor}" role="presentation" cellspacing="0" cellpadding="0" border="0">
                    <tbody>
                        <tr style="width:100%">
                            <td>
                                <div style="background: #ffebee; color: #c62828; padding: 20px; text-align: center; margin-bottom: 20px; font-family: ${fontFamily};">
                                    <h2 style="margin: 0;">⚠️ Fallback Email Rendering</h2>
                                    <p style="margin: 10px 0 0 0;">Reader component failed: ${originalError?.message}</p>
                                </div>
                                ${emailContent}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>`;
            
            addLog(`✅ Fallback HTML generated, length: ${fallbackHtml.length}`);
            return fallbackHtml;
            
        } catch (fallbackError) {
            addLog(`❌ Fallback generation failed: ${fallbackError.message}`);
            return `<div style="padding: 20px; font-family: Arial, sans-serif; background: #fff; color: red;">
                <h2>Email Generation Error</h2>
                <p>Original: ${originalError?.message}</p>
                <p>Fallback: ${fallbackError.message}</p>
            </div>`;
        }
    };

    const createCompleteHtmlDocument = (bodyHtml) => `<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Email Template</title>
</head>
<body style="margin: 0; padding: 0;">
    ${bodyHtml}
</body>
</html>`;

    useEffect(() => {
        addLog(`🟢 Component instance ${instanceId} mounted`);
        
        // Get current global state safely
        const currentGlobalState = getGlobalState();
        
        // Only add handlers if this is the primary instance
        const isPrimary = instanceId === currentGlobalState.count;
        addLog(`🔍 Is primary instance: ${isPrimary}`);
        
        if (!isPrimary) {
            addLog('🟠 Secondary instance - not adding message handlers');
            return;
        }
        
        const handleMessage = (event) => {
            addLog(`🟢 PRIMARY handling message: ${event.data?.type}`);
            console.log('🟢 Full message data:', event.data);
            
            const { type, payload } = event.data || {};
            
            switch (type) {
                case "LOAD_TEMPLATE":
                    addLog('🟢 Processing LOAD_TEMPLATE');
                    addLog(`🟢 Method: ${payload?.method}`);
                    addLog(`🟢 Template: ${payload?.templateName}`);
                    
                    try {
                        let templateToLoad;
                        
                        if (payload?.method === "document" && payload?.document) {
                            addLog('🟢 Loading saved document');
                            templateToLoad = payload.document;
                        }
                        else if (payload?.method === "json" && payload?.json) {
                            addLog('🟢 Loading JSON template');
                            addLog(`🟢 JSON keys: ${Object.keys(payload.json).join(', ')}`);
                            templateToLoad = payload.json;
                        }
                        else if (payload?.method === "html" && payload?.html) {
                            addLog('🟢 Converting HTML to template');
                            try {
                                templateToLoad = importFromHtml(payload.html);
                                addLog('✅ HTML conversion successful');
                            } catch (error) {
                                addLog(`❌ HTML conversion failed: ${error.message}`);
                                templateToLoad = createEmptyTemplate();
                            }
                        }
                        else {
                            addLog('🟢 Creating empty template (fallback)');
                            templateToLoad = createEmptyTemplate();
                        }
                        
                        if (!templateToLoad || !templateToLoad.root) {
                            throw new Error('Invalid template structure: missing root');
                        }
                        
                        addLog(`🟢 Template validation passed. Root type: ${templateToLoad.root.type}`);
                        addLog(`🟢 Template has ${Object.keys(templateToLoad).length} blocks`);
                        addLog(`🟢 Template children: ${JSON.stringify(templateToLoad.root.data?.childrenIds)}`);
                        
                        addLog('🟢 About to call setDocument...');
                        setDocument(templateToLoad);
                        addLog('✅ setDocument called successfully');
                        
                        // Send success response with verification
                        setTimeout(() => {
                            const verificationDoc = latestDocumentRef.current;
                            const loadedChildren = verificationDoc?.root?.data?.childrenIds?.length || 0;
                            const expectedChildren = templateToLoad.root.data?.childrenIds?.length || 0;
                            
                            addLog(`🔍 Load verification - expected: ${expectedChildren}, actual: ${loadedChildren}`);
                            
                            if (window.parent && window.parent !== window) {
                                window.parent.postMessage({
                                    type: "TEMPLATE_LOADED",
                                    payload: {
                                        success: true,
                                        templateName: payload?.templateName || 'Template',
                                        method: payload?.method || 'unknown',
                                        blockCount: Object.keys(templateToLoad).length,
                                        componentId: componentId,
                                        source: "JavaScript",
                                        verification: {
                                            expectedChildren: expectedChildren,
                                            actualChildren: loadedChildren,
                                            stateIsValid: loadedChildren === expectedChildren
                                        }
                                    }
                                }, "*");
                                addLog('✅ TEMPLATE_LOADED sent successfully');
                            }
                        }, 1000);
                        
                    } catch (error) {
                        addLog(`❌ Error loading template: ${error.message}`);
                        console.error('❌ Full error:', error);
                        
                        if (window.parent && window.parent !== window) {
                            window.parent.postMessage({
                                type: "TEMPLATE_LOADED",
                                payload: {
                                    success: false,
                                    error: error.message,
                                    templateName: payload?.templateName || 'Unknown',
                                    componentId: componentId
                                }
                            }, "*");
                        }
                    }
                    break;
                    
                case "REQUEST_SAVE":
                    addLog('🟢 Processing REQUEST_SAVE');
                    
                    // Add small delay to ensure fresh state
                    setTimeout(() => {
                        try {
                            const currentDocument = getFreshDocument();
                            
                            addLog(`🔍 Save - document exists: ${!!currentDocument}`);
                            addLog(`🔍 Save - has root: ${!!currentDocument?.root}`);
                            
                            if (!currentDocument || !currentDocument.root) {
                                throw new Error("No document to save - document is empty or invalid");
                            }
                            
                            const childrenIds = currentDocument.root.data?.childrenIds || [];
                            addLog(`🔍 Save - children count: ${childrenIds.length}`);
                            addLog(`🔍 Save - children IDs: ${JSON.stringify(childrenIds)}`);
                            
                            if (childrenIds.length === 0) {
                                addLog('⚠️ Template is empty - no content blocks');
                                // You can choose to reject empty templates here if needed
                                // For now, we'll continue with empty template
                            }
                            
                            // Verify all children exist
                            childrenIds.forEach(childId => {
                                if (currentDocument[childId]) {
                                    addLog(`✅ Block ${childId} exists`);
                                } else {
                                    addLog(`❌ Block ${childId} MISSING!`);
                                }
                            });
                            
                            addLog(`🟢 Saving document with ${Object.keys(currentDocument).length} blocks`);
                            
                            // Generate HTML
                            const bodyHtml = generateHtmlFromDocument();
                            const fullHtml = createCompleteHtmlDocument(bodyHtml);
                            
                            addLog(`🟢 Generated HTML length: ${fullHtml.length}`);
                            
                            const responsePayload = {
                                type: "TEMPLATE_SAVED",
                                payload: { 
                                    html: fullHtml, 
                                    document: currentDocument,
                                    timestamp: Date.now(),
                                    templateName: payload?.templateName || "Untitled Template",
                                    source: "JavaScript",
                                    debugInfo: {
                                        instanceId: instanceId,
                                        componentId: componentId,
                                        documentBlocks: Object.keys(currentDocument).length,
                                        contentBlocks: childrenIds.length,
                                        htmlLength: fullHtml.length,
                                        hasContent: childrenIds.length > 0
                                    }
                                }
                            };
                            
                            addLog('🟢 Sending TEMPLATE_SAVED response...');
                            console.log('🟢 Response payload:', responsePayload);
                            
                            if (window.parent && window.parent !== window) {
                                window.parent.postMessage(responsePayload, "*");
                                addLog('✅ TEMPLATE_SAVED sent successfully');
                            } else {
                                addLog('❌ No parent window found');
                            }
                            
                        } catch (error) {
                            addLog(`❌ Error saving: ${error.message}`);
                            console.error('❌ Save error details:', error);
                            
                            if (window.parent && window.parent !== window) {
                                window.parent.postMessage({
                                    type: "ERROR",
                                    payload: {
                                        message: error.message,
                                        type: "save_error",
                                        source: "JavaScript",
                                        instanceId: instanceId
                                    }
                                }, "*");
                            }
                        }
                    }, 100); // Small delay for fresh state
                    break;
                    
                default:
                    addLog(`🟠 Unknown message type: ${type}`);
            }
        };
        
        // Register this handler safely
        const safeGlobalState = getGlobalState();
        safeGlobalState.activeHandlers.push(handleMessage);
        window.addEventListener("message", handleMessage);
        addLog('✅ PRIMARY message listener added');

        // Send ready notification
        setTimeout(() => {
            addLog('🟢 Sending EDITOR_READY');
            
            if (window.parent && window.parent !== window) {
                window.parent.postMessage({ 
                    type: "EDITOR_READY",
                    componentId: componentId,
                    source: "JavaScript",
                    instanceId: instanceId,
                    isPrimary: true
                }, "*");
                addLog('✅ EDITOR_READY sent successfully');
            }
        }, 1000);

        return () => {
            addLog(`🟢 Instance ${instanceId} cleaning up`);
            window.removeEventListener("message", handleMessage);
            
            // Safe cleanup of global state
            const cleanupGlobalState = getGlobalState();
            if (cleanupGlobalState && cleanupGlobalState.activeHandlers) {
                const index = cleanupGlobalState.activeHandlers.indexOf(handleMessage);
                if (index > -1) {
                    cleanupGlobalState.activeHandlers.splice(index, 1);
                }
                
                // Only reset if no more handlers (but keep the object structure)
                if (cleanupGlobalState.activeHandlers.length === 0) {
                    addLog('🟢 Resetting global handlers (keeping object)');
                    cleanupGlobalState.activeHandlers = [];
                    // Don't set to null, just reset the handlers array
                }
            }
        };
    }, []); // Remove document dependency to prevent handler recreation

    const handleScreenSizeChange = (_, value) => {
        setSelectedScreenSize(value === 'mobile' || value === 'desktop' ? value : 'desktop');
    };

    const renderMainPanel = () => {
        switch (selectedMainTab) {
            case 'editor':
                return React.createElement(Box, { sx: mainBoxSx }, React.createElement(EditorBlock, { id: "root" }));
            case 'preview':
                return React.createElement(Box, { sx: mainBoxSx }, React.createElement(Reader, { document, rootBlockId: "root" }));
            case 'html':
                return React.createElement(HtmlPanel, null);
            case 'json':
                return React.createElement(JsonPanel, null);
            default:
                return React.createElement(Box, { sx: mainBoxSx }, React.createElement(EditorBlock, { id: "root" }));
        }
    };

    return React.createElement(React.Fragment, null,
        React.createElement(Stack, {
            sx: {
                height: 49,
                borderBottom: 1,
                borderColor: 'divider',
                backgroundColor: 'white',
                position: 'sticky',
                top: 0,
                zIndex: 'appBar',
                px: 1
            },
            direction: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
            React.createElement(ToggleSamplesPanelButton, null),
            React.createElement(Stack, {
                px: 2,
                direction: "row",
                gap: 2,
                width: "100%",
                justifyContent: "space-between",
                alignItems: "center"
            },
                React.createElement(Stack, { direction: "row", spacing: 2 }, 
                    React.createElement(MainTabsGroup, null),
                    React.createElement(Box, { 
                        sx: { 
                            fontSize: '12px', 
                            color: 'green',
                            display: 'flex',
                            alignItems: 'center'
                        } 
                    }, `JS-${instanceId}: ${componentId.substring(0, 8)}`)
                ),
                React.createElement(Stack, { direction: "row", spacing: 2 },
                    React.createElement(DownloadJson, null),
                    React.createElement(ImportJson, null),
                    React.createElement(ToggleButtonGroup, {
                        value: selectedScreenSize,
                        exclusive: true,
                        size: "small",
                        onChange: handleScreenSizeChange
                    },
                        React.createElement(ToggleButton, { value: "desktop" },
                            React.createElement(Tooltip, { title: "Desktop view" },
                                React.createElement(MonitorOutlined, { fontSize: "small" })
                            )
                        ),
                        React.createElement(ToggleButton, { value: "mobile" },
                            React.createElement(Tooltip, { title: "Mobile view" },
                                React.createElement(PhoneIphoneOutlined, { fontSize: "small" })
                            )
                        )
                    ),
                    React.createElement(ShareButton, null)
                )
            ),
            React.createElement(ToggleInspectorPanelButton, null)
        ),
        React.createElement(Box, { sx: { height: 'calc(100vh - 49px)', overflow: 'auto', minWidth: 370 } }, renderMainPanel())
    );
}