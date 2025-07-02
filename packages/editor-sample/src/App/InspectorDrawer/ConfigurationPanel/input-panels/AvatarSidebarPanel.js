import React, { useState } from 'react';
import { AspectRatioOutlined } from '@mui/icons-material';
import { ToggleButton } from '@mui/material';
import { AvatarPropsDefaults, AvatarPropsSchema } from '@usewaypoint/block-avatar';
import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import RadioGroupInput from './helpers/inputs/RadioGroupInput';
import SliderInput from './helpers/inputs/SliderInput';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';
export default function AvatarSidebarPanel({ data, setData }) {
    var _c, _d, _10, _11, _12, _13, _14, _15;
    const [, setErrors] = useState(null);
    const updateData = (d) => {
        const res = AvatarPropsSchema.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    const size = (_d = (_c = data.props) === null || _c === void 0 ? void 0 : _c.size) !== null && _d !== void 0 ? _d : AvatarPropsDefaults.size;
    const imageUrl = (_11 = (_10 = data.props) === null || _10 === void 0 ? void 0 : _10.imageUrl) !== null && _11 !== void 0 ? _11 : AvatarPropsDefaults.imageUrl;
    const alt = (_13 = (_12 = data.props) === null || _12 === void 0 ? void 0 : _12.alt) !== null && _13 !== void 0 ? _13 : AvatarPropsDefaults.alt;
    const shape = (_15 = (_14 = data.props) === null || _14 === void 0 ? void 0 : _14.shape) !== null && _15 !== void 0 ? _15 : AvatarPropsDefaults.shape;
    return (React.createElement(BaseSidebarPanel, { title: "Avatar block" },
        React.createElement(SliderInput, { label: "Size", iconLabel: React.createElement(AspectRatioOutlined, { sx: { color: 'text.secondary' } }), units: "px", step: 3, min: 32, max: 256, defaultValue: size, onChange: (size) => {
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { size }) }));
            } }),
        React.createElement(RadioGroupInput, { label: "Shape", defaultValue: shape, onChange: (shape) => {
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { shape }) }));
            } },
            React.createElement(ToggleButton, { value: "circle" }, "Circle"),
            React.createElement(ToggleButton, { value: "square" }, "Square"),
            React.createElement(ToggleButton, { value: "rounded" }, "Rounded")),
        React.createElement(TextInput, { label: "Image URL", defaultValue: imageUrl, onChange: (imageUrl) => {
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { imageUrl }) }));
            } }),
        React.createElement(TextInput, { label: "Alt text", defaultValue: alt, onChange: (alt) => {
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { alt }) }));
            } }),
        React.createElement(MultiStylePropertyPanel, { names: ['textAlign', 'padding'], value: data.style, onChange: (style) => updateData(Object.assign(Object.assign({}, data), { style })) })));
}
//# sourceMappingURL=AvatarSidebarPanel.js.map