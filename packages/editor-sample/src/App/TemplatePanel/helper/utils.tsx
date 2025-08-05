import React from "react";
import ReactDOMServer from "react-dom/server";
import { Reader } from "@usewaypoint/email-builder";
import { useDocument } from "../../../documents/editor/EditorContext";
interface EmailDocument {
  root?: any;
  [key: string]: any;
}
const document = useDocument() as EmailDocument;


export const getHtmlFromEditor = () => {
  try {
    console.log('[TemplatePanel] Attempting to get HTML using Reader component...');
    if (!document || !document.root) {
      console.error('[TemplatePanel] Document or root is missing');
      return null;
    }
    const html = ReactDOMServer.renderToStaticMarkup(
      React.createElement(Reader, { document: document, rootBlockId: "root" })
    );
    console.log('[TemplatePanel] Generated HTML via Reader:', html);
    return html;
  } catch (error) {
    console.error('[TemplatePanel] Error generating HTML via Reader:', error);
    return null;
  }
};

export const getHtmlFromDOM = () => {
  try {
    console.log('[TemplatePanel] Attempting to get HTML from DOM...');
    const previewPanel =
      document.querySelector('[data-testid="preview-panel"]') ||
      document.querySelector('.email-preview') ||
      document.querySelector('[role="presentation"]');
    if (previewPanel) {
      console.log('[TemplatePanel] Found preview panel in DOM');
      return previewPanel.innerHTML;
    }
    const emailTables = document.querySelectorAll('table[role="presentation"]');
    if (emailTables.length > 0) {
      console.log('[TemplatePanel] Found email tables in DOM');
      return emailTables[0].outerHTML;
    }
    console.log('[TemplatePanel] No suitable DOM elements found');
    return null;
  } catch (error) {
    console.error('[TemplatePanel] Error getting HTML from DOM:', error);
    return null;
  }
};
