import React, { useState } from 'react';
import { InputLabel, Stack, ToggleButtonGroup } from '@mui/material';
export default function RadioGroupInput({ label, children, defaultValue, onChange }) {
    const [value, setValue] = useState(defaultValue);
    return (React.createElement(Stack, { alignItems: "flex-start" },
        React.createElement(InputLabel, { shrink: true }, label),
        React.createElement(ToggleButtonGroup, { exclusive: true, fullWidth: true, value: value, size: "small", onChange: (_, v) => {
                if (typeof v !== 'string') {
                    throw new Error('RadioGroupInput can only receive string values');
                }
                setValue(v);
                onChange(v);
            } }, children)));
}
//# sourceMappingURL=RadioGroupInput.js.map