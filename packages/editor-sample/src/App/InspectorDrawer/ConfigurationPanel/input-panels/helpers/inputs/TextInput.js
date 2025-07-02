import React, { useState } from 'react';
import { TextField } from '@mui/material';
export default function TextInput({ helperText, label, placeholder, rows, InputProps, defaultValue, onChange }) {
    const [value, setValue] = useState(defaultValue);
    const isMultiline = typeof rows === 'number' && rows > 1;
    return (React.createElement(TextField, { fullWidth: true, multiline: isMultiline, minRows: rows, variant: isMultiline ? 'outlined' : 'standard', label: label, placeholder: placeholder, helperText: helperText, InputProps: InputProps, value: value, onChange: (ev) => {
            const v = ev.target.value;
            setValue(v);
            onChange(v);
        } }));
}
//# sourceMappingURL=TextInput.js.map