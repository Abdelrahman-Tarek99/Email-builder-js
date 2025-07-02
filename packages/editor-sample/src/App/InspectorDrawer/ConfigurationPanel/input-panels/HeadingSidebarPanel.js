import React, { useState } from 'react';
import { ToggleButton } from '@mui/material';
import { HeadingPropsDefaults, HeadingPropsSchema } from '@usewaypoint/block-heading';
import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import RadioGroupInput from './helpers/inputs/RadioGroupInput';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';
export default function HeadingSidebarPanel({ data, setData }) {
    var _c, _d, _10, _11;
    const [, setErrors] = useState(null);
    const updateData = (d) => {
        const res = HeadingPropsSchema.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    return (React.createElement(BaseSidebarPanel, { title: "Heading block" },
        React.createElement(TextInput, { label: "Content", rows: 3, defaultValue: (_d = (_c = data.props) === null || _c === void 0 ? void 0 : _c.text) !== null && _d !== void 0 ? _d : HeadingPropsDefaults.text, onChange: (text) => {
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { text }) }));
            } }),
        React.createElement(RadioGroupInput, { label: "Level", defaultValue: (_11 = (_10 = data.props) === null || _10 === void 0 ? void 0 : _10.level) !== null && _11 !== void 0 ? _11 : HeadingPropsDefaults.level, onChange: (level) => {
                updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { level }) }));
            } },
            React.createElement(ToggleButton, { value: "h1" }, "H1"),
            React.createElement(ToggleButton, { value: "h2" }, "H2"),
            React.createElement(ToggleButton, { value: "h3" }, "H3")),
        React.createElement(MultiStylePropertyPanel, { names: ['color', 'backgroundColor', 'fontFamily', 'fontWeight', 'textAlign', 'padding'], value: data.style, onChange: (style) => updateData(Object.assign(Object.assign({}, data), { style })) })));
}
//# sourceMappingURL=HeadingSidebarPanel.js.map