import React from 'react';
import { RoundedCornerOutlined } from '@mui/icons-material';
import { NullableColorInput } from '../inputs/ColorInput';
import { NullableFontFamily } from '../inputs/FontFamily';
import FontSizeInput from '../inputs/FontSizeInput';
import FontWeightInput from '../inputs/FontWeightInput';
import PaddingInput from '../inputs/PaddingInput';
import SliderInput from '../inputs/SliderInput';
import TextAlignInput from '../inputs/TextAlignInput';
export default function SingleStylePropertyPanel({ name, value, onChange }) {
    var _c;
    const defaultValue = (_c = value[name]) !== null && _c !== void 0 ? _c : null;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleChange = (v) => {
        onChange(Object.assign(Object.assign({}, value), { [name]: v }));
    };
    switch (name) {
        case 'backgroundColor':
            return React.createElement(NullableColorInput, { label: "Background color", defaultValue: defaultValue, onChange: handleChange });
        case 'borderColor':
            return React.createElement(NullableColorInput, { label: "Border color", defaultValue: defaultValue, onChange: handleChange });
        case 'borderRadius':
            return (React.createElement(SliderInput, { iconLabel: React.createElement(RoundedCornerOutlined, null), units: "px", step: 4, marks: true, min: 0, max: 48, label: "Border radius", defaultValue: defaultValue, onChange: handleChange }));
        case 'color':
            return React.createElement(NullableColorInput, { label: "Text color", defaultValue: defaultValue, onChange: handleChange });
        case 'fontFamily':
            return React.createElement(NullableFontFamily, { label: "Font family", defaultValue: defaultValue, onChange: handleChange });
        case 'fontSize':
            return React.createElement(FontSizeInput, { label: "Font size", defaultValue: defaultValue, onChange: handleChange });
        case 'fontWeight':
            return React.createElement(FontWeightInput, { label: "Font weight", defaultValue: defaultValue, onChange: handleChange });
        case 'textAlign':
            return React.createElement(TextAlignInput, { label: "Alignment", defaultValue: defaultValue, onChange: handleChange });
        case 'padding':
            return React.createElement(PaddingInput, { label: "Padding", defaultValue: defaultValue, onChange: handleChange });
    }
}
//# sourceMappingURL=SingleStylePropertyPanel.js.map