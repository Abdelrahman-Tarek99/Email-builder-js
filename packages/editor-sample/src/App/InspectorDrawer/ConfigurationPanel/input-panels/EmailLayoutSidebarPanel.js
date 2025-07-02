import React, { useState } from 'react';
import { RoundedCornerOutlined } from '@mui/icons-material';
import EmailLayoutPropsSchema from '../../../../documents/blocks/EmailLayout/EmailLayoutPropsSchema';
import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import ColorInput, { NullableColorInput } from './helpers/inputs/ColorInput';
import { NullableFontFamily } from './helpers/inputs/FontFamily';
import SliderInput from './helpers/inputs/SliderInput';
export default function EmailLayoutSidebarFields({ data, setData }) {
    var _c, _d, _10, _11, _12;
    const [, setErrors] = useState(null);
    const updateData = (d) => {
        const res = EmailLayoutPropsSchema.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    return (React.createElement(BaseSidebarPanel, { title: "Global" },
        React.createElement(ColorInput, { label: "Backdrop color", defaultValue: (_c = data.backdropColor) !== null && _c !== void 0 ? _c : '#F5F5F5', onChange: (backdropColor) => updateData(Object.assign(Object.assign({}, data), { backdropColor })) }),
        React.createElement(ColorInput, { label: "Canvas color", defaultValue: (_d = data.canvasColor) !== null && _d !== void 0 ? _d : '#FFFFFF', onChange: (canvasColor) => updateData(Object.assign(Object.assign({}, data), { canvasColor })) }),
        React.createElement(NullableColorInput, { label: "Canvas border color", defaultValue: (_10 = data.borderColor) !== null && _10 !== void 0 ? _10 : null, onChange: (borderColor) => updateData(Object.assign(Object.assign({}, data), { borderColor })) }),
        React.createElement(SliderInput, { iconLabel: React.createElement(RoundedCornerOutlined, null), units: "px", step: 4, marks: true, min: 0, max: 48, label: "Canvas border radius", defaultValue: (_11 = data.borderRadius) !== null && _11 !== void 0 ? _11 : 0, onChange: (borderRadius) => updateData(Object.assign(Object.assign({}, data), { borderRadius })) }),
        React.createElement(NullableFontFamily, { label: "Font family", defaultValue: "MODERN_SANS", onChange: (fontFamily) => updateData(Object.assign(Object.assign({}, data), { fontFamily })) }),
        React.createElement(ColorInput, { label: "Text color", defaultValue: (_12 = data.textColor) !== null && _12 !== void 0 ? _12 : '#262626', onChange: (textColor) => updateData(Object.assign(Object.assign({}, data), { textColor })) })));
}
//# sourceMappingURL=EmailLayoutSidebarPanel.js.map