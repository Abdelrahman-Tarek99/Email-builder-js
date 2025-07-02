import React, { useState } from 'react';
import { HeightOutlined } from '@mui/icons-material';
import { DividerPropsDefaults, DividerPropsSchema } from '@usewaypoint/block-divider';
import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import ColorInput from './helpers/inputs/ColorInput';
import SliderInput from './helpers/inputs/SliderInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';
export default function DividerSidebarPanel({ data, setData }) {
    var _c, _d, _10, _11;
    const [, setErrors] = useState(null);
    const updateData = (d) => {
        const res = DividerPropsSchema.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    const lineColor = (_d = (_c = data.props) === null || _c === void 0 ? void 0 : _c.lineColor) !== null && _d !== void 0 ? _d : DividerPropsDefaults.lineColor;
    const lineHeight = (_11 = (_10 = data.props) === null || _10 === void 0 ? void 0 : _10.lineHeight) !== null && _11 !== void 0 ? _11 : DividerPropsDefaults.lineHeight;
    return (React.createElement(BaseSidebarPanel, { title: "Divider block" },
        React.createElement(ColorInput, { label: "Color", defaultValue: lineColor, onChange: (lineColor) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { lineColor }) })) }),
        React.createElement(SliderInput, { label: "Height", iconLabel: React.createElement(HeightOutlined, { sx: { color: 'text.secondary' } }), units: "px", step: 1, min: 1, max: 24, defaultValue: lineHeight, onChange: (lineHeight) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { lineHeight }) })) }),
        React.createElement(MultiStylePropertyPanel, { names: ['backgroundColor', 'padding'], value: data.style, onChange: (style) => updateData(Object.assign(Object.assign({}, data), { style })) })));
}
//# sourceMappingURL=DividerSidebarPanel.js.map