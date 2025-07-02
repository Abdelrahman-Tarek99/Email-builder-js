import React from 'react';
import { TextField, Typography } from '@mui/material';
export default function TextDimensionInput({ label, defaultValue, onChange }) {
    const handleChange = (ev) => {
        const value = parseInt(ev.target.value);
        onChange(isNaN(value) ? null : value);
    };
    return (React.createElement(TextField, { fullWidth: true, onChange: handleChange, defaultValue: defaultValue, label: label, variant: "standard", placeholder: "auto", size: "small", InputProps: {
            endAdornment: (React.createElement(Typography, { variant: "body2", color: "text.secondary" }, "px")),
        } }));
}
//# sourceMappingURL=TextDimensionInput.js.map