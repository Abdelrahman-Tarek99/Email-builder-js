import React, { useState } from 'react';
import { CodeOutlined } from '@mui/icons-material';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { TextPropsSchema } from '@usewaypoint/block-text';
import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import BooleanInput from './helpers/inputs/BooleanInput';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';
// Common merge tag variables
const COMMON_VARIABLES = [
    { label: 'User Name', value: '{{user.name}}' },
    { label: 'User Email', value: '{{user.email}}' },
    { label: 'Order ID', value: '{{order.id}}' },
    { label: 'Order Total', value: '{{order.total}}' },
    { label: 'Company Name', value: '{{company.name}}' },
    { label: 'Current Date', value: '{{date.current}}' },
    { label: 'Reset Link', value: '{{reset.link}}' },
    { label: 'Product Name', value: '{{product.name}}' },
    { label: 'Product Price', value: '{{product.price}}' },
    { label: 'Tracking Number', value: '{{shipping.tracking}}' },
];
export default function TextSidebarPanel({ data, setData }) {
    var _c, _d, _10, _11;
    const [, setErrors] = useState(null);
    const [showVariables, setShowVariables] = useState(false);
    const updateData = (d) => {
        const res = TextPropsSchema.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    const insertVariable = (variable) => {
        var _c;
        const currentText = ((_c = data.props) === null || _c === void 0 ? void 0 : _c.text) || '';
        const newText = currentText + variable;
        updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { text: newText }) }));
    };
    return (React.createElement(BaseSidebarPanel, { title: "Text block" },
        React.createElement(TextInput, { label: "Text content", defaultValue: (_d = (_c = data.props) === null || _c === void 0 ? void 0 : _c.text) !== null && _d !== void 0 ? _d : '', onChange: (text) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { text }) })), rows: 4 }),
        React.createElement(Box, { sx: { mb: 2 } },
            React.createElement(Button, { size: "small", startIcon: React.createElement(CodeOutlined, null), onClick: () => setShowVariables(!showVariables), variant: "outlined", fullWidth: true }, showVariables ? 'Hide Variables' : 'Add Variables'),
            showVariables && (React.createElement(Box, { sx: { mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 } },
                React.createElement(Typography, { variant: "caption", color: "text.secondary", display: "block", sx: { mb: 1 } }, "Click to insert variable:"),
                React.createElement(Stack, { direction: "row", spacing: 1, flexWrap: "wrap", useFlexGap: true }, COMMON_VARIABLES.map((variable) => (React.createElement(Chip, { key: variable.value, label: variable.label, size: "small", onClick: () => insertVariable(variable.value), sx: { mb: 1 }, clickable: true })))),
                React.createElement(Typography, { variant: "caption", color: "text.secondary", sx: { mt: 2, display: 'block' } },
                    React.createElement("strong", null, "Note:"),
                    " These are placeholder variables. Replace with your actual data structure when sending emails.")))),
        React.createElement(BooleanInput, { label: "Markdown", defaultValue: (_11 = (_10 = data.props) === null || _10 === void 0 ? void 0 : _10.markdown) !== null && _11 !== void 0 ? _11 : false, onChange: (markdown) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { markdown }) })) }),
        React.createElement(MultiStylePropertyPanel, { names: ['color', 'backgroundColor', 'fontSize', 'fontFamily', 'fontWeight', 'textAlign', 'padding'], value: data.style, onChange: (style) => updateData(Object.assign(Object.assign({}, data), { style })) })));
}
//# sourceMappingURL=TextSidebarPanel.js.map