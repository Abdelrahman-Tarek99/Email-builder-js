import React, { useState } from 'react';
import { Alert, Button, Dialog, DialogActions, DialogContent, DialogTitle, Link, TextField, Typography, } from '@mui/material';
import { resetDocument } from '../../../documents/editor/EditorContext';
import validateJsonStringValue from './validateJsonStringValue';
export default function ImportJsonDialog({ onClose }) {
    const [value, setValue] = useState('');
    const [error, setError] = useState(null);
    const handleChange = (ev) => {
        const v = ev.currentTarget.value;
        setValue(v);
        const { error } = validateJsonStringValue(v);
        setError(error !== null && error !== void 0 ? error : null);
    };
    let errorAlert = null;
    if (error) {
        errorAlert = React.createElement(Alert, { color: "error" }, error);
    }
    return (React.createElement(Dialog, { open: true, onClose: onClose },
        React.createElement(DialogTitle, null, "Import JSON"),
        React.createElement("form", { onSubmit: (ev) => {
                ev.preventDefault();
                const { error, data } = validateJsonStringValue(value);
                setError(error !== null && error !== void 0 ? error : null);
                if (!data) {
                    return;
                }
                resetDocument(data);
                onClose();
            } },
            React.createElement(DialogContent, null,
                React.createElement(Typography, { color: "text.secondary", paragraph: true },
                    "Copy and paste an EmailBuilder.js JSON (",
                    React.createElement(Link, { href: "https://gist.githubusercontent.com/jordanisip/efb61f56ba71bd36d3a9440122cb7f50/raw/30ea74a6ac7e52ebdc309bce07b71a9286ce2526/emailBuilderTemplate.json", target: "_blank", underline: "none" }, "example"),
                    ")."),
                errorAlert,
                React.createElement(TextField, { error: error !== null, value: value, onChange: handleChange, type: "text", helperText: "This will override your current template.", variant: "outlined", fullWidth: true, rows: 10, multiline: true })),
            React.createElement(DialogActions, null,
                React.createElement(Button, { type: "button", onClick: onClose }, "Cancel"),
                React.createElement(Button, { variant: "contained", type: "submit", disabled: error !== null }, "Import")))));
}
//# sourceMappingURL=ImportJsonDialog.js.map