import React, { useState } from 'react';
import { AlignHorizontalLeftOutlined, AlignHorizontalRightOutlined, AlignVerticalBottomOutlined, AlignVerticalTopOutlined, } from '@mui/icons-material';
import { InputLabel, Stack } from '@mui/material';
import RawSliderInput from './raw/RawSliderInput';
export default function PaddingInput({ label, defaultValue, onChange }) {
    const [value, setValue] = useState(() => {
        if (defaultValue) {
            return defaultValue;
        }
        return {
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
        };
    });
    function handleChange(internalName, nValue) {
        const v = Object.assign(Object.assign({}, value), { [internalName]: nValue });
        setValue(v);
        onChange(v);
    }
    return (React.createElement(Stack, { spacing: 2, alignItems: "flex-start", pb: 1 },
        React.createElement(InputLabel, { shrink: true }, label),
        React.createElement(RawSliderInput, { iconLabel: React.createElement(AlignVerticalTopOutlined, { sx: { fontSize: 16 } }), value: value.top, setValue: (num) => handleChange('top', num), units: "px", step: 4, min: 0, max: 80, marks: true }),
        React.createElement(RawSliderInput, { iconLabel: React.createElement(AlignVerticalBottomOutlined, { sx: { fontSize: 16 } }), value: value.bottom, setValue: (num) => handleChange('bottom', num), units: "px", step: 4, min: 0, max: 80, marks: true }),
        React.createElement(RawSliderInput, { iconLabel: React.createElement(AlignHorizontalLeftOutlined, { sx: { fontSize: 16 } }), value: value.left, setValue: (num) => handleChange('left', num), units: "px", step: 4, min: 0, max: 80, marks: true }),
        React.createElement(RawSliderInput, { iconLabel: React.createElement(AlignHorizontalRightOutlined, { sx: { fontSize: 16 } }), value: value.right, setValue: (num) => handleChange('right', num), units: "px", step: 4, min: 0, max: 80, marks: true })));
}
//# sourceMappingURL=PaddingInput.js.map