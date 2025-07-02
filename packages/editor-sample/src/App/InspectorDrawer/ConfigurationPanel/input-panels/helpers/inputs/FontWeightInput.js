import React, { useState } from 'react';
import { ToggleButton } from '@mui/material';
import RadioGroupInput from './RadioGroupInput';
export default function FontWeightInput({ label, defaultValue, onChange }) {
    const [value, setValue] = useState(defaultValue);
    return (React.createElement(RadioGroupInput, { label: label, defaultValue: value, onChange: (fontWeight) => {
            setValue(fontWeight);
            onChange(fontWeight);
        } },
        React.createElement(ToggleButton, { value: "normal" }, "Regular"),
        React.createElement(ToggleButton, { value: "bold" }, "Bold")));
}
//# sourceMappingURL=FontWeightInput.js.map