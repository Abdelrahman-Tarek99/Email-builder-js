import React, { useState } from 'react';
import { FileUploadOutlined } from '@mui/icons-material';
import { IconButton, Tooltip } from '@mui/material';
import ImportJsonDialog from './ImportJsonDialog';
export default function ImportJson() {
    const [open, setOpen] = useState(false);
    let dialog = null;
    if (open) {
        dialog = React.createElement(ImportJsonDialog, { onClose: () => setOpen(false) });
    }
    return (React.createElement(React.Fragment, null,
        React.createElement(Tooltip, { title: "Import JSON" },
            React.createElement(IconButton, { onClick: () => setOpen(true) },
                React.createElement(FileUploadOutlined, { fontSize: "small" }))),
        dialog));
}
//# sourceMappingURL=index.js.map