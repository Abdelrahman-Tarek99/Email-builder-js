import React from "react";
import { SaveAsOutlined } from "@mui/icons-material";
import { IconButton, Tooltip } from "@mui/material";

import { useDocument } from "../../../documents/editor/EditorContext";

export default function SaveTemplate() {
  const doc = useDocument(); // ✅ no conflict

  const handleSave = () => {
    const html = JSON.stringify(doc, null, 2);
    const a = document.createElement("a"); // ✅ global DOM document
    a.href = `data:text/plain,${encodeURIComponent(html)}`;
    a.download = "emailTemplate.json";
    a.click();
  };

  return (
    <Tooltip title="Save Template">
      <IconButton onClick={handleSave}>
        <SaveAsOutlined fontSize="small" />
      </IconButton>
    </Tooltip>
  );
}
