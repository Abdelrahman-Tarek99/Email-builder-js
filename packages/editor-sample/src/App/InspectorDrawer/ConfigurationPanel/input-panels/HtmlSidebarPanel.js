import React, { useState } from 'react';
import { HtmlPropsSchema } from '@usewaypoint/block-html';
import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';
export default function HtmlSidebarPanel({ data, setData }) {
    var _c, _d;
    const [, setErrors] = useState(null);
    const updateData = (d) => {
        const res = HtmlPropsSchema.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    return (React.createElement(BaseSidebarPanel, { title: "Html block" },
        React.createElement(TextInput, { label: "Content", rows: 5, defaultValue: (_d = (_c = data.props) === null || _c === void 0 ? void 0 : _c.contents) !== null && _d !== void 0 ? _d : '', onChange: (contents) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { contents }) })) }),
        React.createElement(MultiStylePropertyPanel, { names: ['color', 'backgroundColor', 'fontFamily', 'fontSize', 'textAlign', 'padding'], value: data.style, onChange: (style) => updateData(Object.assign(Object.assign({}, data), { style })) })));
}
//# sourceMappingURL=HtmlSidebarPanel.js.map