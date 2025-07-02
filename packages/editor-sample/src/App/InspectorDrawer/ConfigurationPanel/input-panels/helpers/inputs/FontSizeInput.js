import React, { useState } from 'react';
import { TextFieldsOutlined } from '@mui/icons-material';
import { InputLabel, Stack } from '@mui/material';
import RawSliderInput from './raw/RawSliderInput';
export default function FontSizeInput({ label, defaultValue, onChange }) {
    const [value, setValue] = useState(defaultValue);
    const handleChange = (value) => {
        setValue(value);
        onChange(value);
    };
    return (React.createElement(Stack, { spacing: 1, alignItems: "flex-start" },
        React.createElement(InputLabel, { shrink: true }, label),
        React.createElement(RawSliderInput, { iconLabel: React.createElement(TextFieldsOutlined, { sx: { fontSize: 16 } }), value: value, setValue: handleChange, units: "px", step: 1, min: 10, max: 48 })));
}
//# sourceMappingURL=FontSizeInput.js.map