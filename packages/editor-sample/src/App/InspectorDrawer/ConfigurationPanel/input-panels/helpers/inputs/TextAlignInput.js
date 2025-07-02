import React, { useState } from 'react';
import { FormatAlignCenterOutlined, FormatAlignLeftOutlined, FormatAlignRightOutlined } from '@mui/icons-material';
import { ToggleButton } from '@mui/material';
import RadioGroupInput from './RadioGroupInput';
export default function TextAlignInput({ label, defaultValue, onChange }) {
    const [value, setValue] = useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : 'left');
    return (React.createElement(RadioGroupInput, { label: label, defaultValue: value, onChange: (value) => {
            setValue(value);
            onChange(value);
        } },
        React.createElement(ToggleButton, { value: "left" },
            React.createElement(FormatAlignLeftOutlined, { fontSize: "small" })),
        React.createElement(ToggleButton, { value: "center" },
            React.createElement(FormatAlignCenterOutlined, { fontSize: "small" })),
        React.createElement(ToggleButton, { value: "right" },
            React.createElement(FormatAlignRightOutlined, { fontSize: "small" }))));
}
//# sourceMappingURL=TextAlignInput.js.map