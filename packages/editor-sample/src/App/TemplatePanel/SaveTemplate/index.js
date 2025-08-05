import React from "react";
import { SaveAsOutlined } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";
import { Reader } from "@usewaypoint/email-builder";
import ReactDOMServer from "react-dom/server";
import { useDocument } from "../../../documents/editor/EditorContext";

export default function SaveTemplate() {
  const doc = useDocument();

 const handleSave = () => {
  // ✅ Render static email body
  const html = ReactDOMServer.renderToStaticMarkup(
    React.createElement(Reader, { document: doc, rootBlockId: "root" })
  );

  const fullHtml = `<!DOCTYPE html>
<html>
  <head><meta charset="UTF-8"></head>
  <body>${html}</body>
</html>`;

  // ✅ Send to parent window:
  window.parent.postMessage(
    {
      type: "TEMPLATE_SAVED",
      payload: {
        html: fullHtml,
        document: doc,
      },
    },
    "*"
  );

  // ✅ Also download it (optional):
  const blob = new Blob([fullHtml], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "emailTemplate.html";
  a.click();

  URL.revokeObjectURL(url);

  console.log("[SaveTemplate.js] Full HTML sent to parent and downloaded");
};


  return React.createElement(
    Tooltip,
    { title: "Save Template" },
    React.createElement(
      IconButton,
      { onClick: handleSave },
      React.createElement(SaveAsOutlined, { fontSize: "small" })
    )
  );
}
