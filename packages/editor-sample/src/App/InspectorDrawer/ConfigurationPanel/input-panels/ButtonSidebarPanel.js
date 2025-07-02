import React, { useState } from 'react';
import { CodeOutlined } from '@mui/icons-material';
import { Box, Button, Chip, Stack, Typography } from '@mui/material';
import { ButtonPropsSchema } from '@usewaypoint/block-button';
import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import BooleanInput from './helpers/inputs/BooleanInput';
import ColorInput from './helpers/inputs/ColorInput';
import RadioGroupInput from './helpers/inputs/RadioGroupInput';
import TextInput from './helpers/inputs/TextInput';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';
// Common merge tag variables for buttons
const BUTTON_VARIABLES = [
    { label: 'User Name', value: '{{user.name}}' },
    { label: 'Order ID', value: '{{order.id}}' },
    { label: 'Reset Link', value: '{{reset.link}}' },
    { label: 'Product URL', value: '{{product.url}}' },
    { label: 'Tracking URL', value: '{{shipping.tracking_url}}' },
    { label: 'Company URL', value: '{{company.url}}' },
];
export default function ButtonSidebarPanel({ data, setData }) {
    var _c, _d, _10, _11, _12, _13, _14, _15, _16, _17, _18, _19, _20, _21;
    const [, setErrors] = useState(null);
    const [showVariables, setShowVariables] = useState(false);
    const updateData = (d) => {
        const res = ButtonPropsSchema.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    const insertVariable = (variable, field) => {
        var _c, _d;
        const currentValue = field === 'text' ? ((_c = data.props) === null || _c === void 0 ? void 0 : _c.text) || '' : ((_d = data.props) === null || _d === void 0 ? void 0 : _d.url) || '';
        const newValue = currentValue + variable;
        if (field === 'text') {
            updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { text: newValue }) }));
        }
        else {
            updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { url: newValue }) }));
        }
    };
    return (React.createElement(BaseSidebarPanel, { title: "Button block" },
        React.createElement(TextInput, { label: "Button text", defaultValue: (_d = (_c = data.props) === null || _c === void 0 ? void 0 : _c.text) !== null && _d !== void 0 ? _d : '', onChange: (text) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { text }) })) }),
        React.createElement(Box, { sx: { mb: 2 } },
            React.createElement(Button, { size: "small", startIcon: React.createElement(CodeOutlined, null), onClick: () => setShowVariables(!showVariables), variant: "outlined", fullWidth: true }, showVariables ? 'Hide Variables' : 'Add Variables'),
            showVariables && (React.createElement(Box, { sx: { mt: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 } },
                React.createElement(Typography, { variant: "caption", color: "text.secondary", display: "block", sx: { mb: 1 } }, "Click to insert variable:"),
                React.createElement(Stack, { direction: "row", spacing: 1, flexWrap: "wrap", useFlexGap: true }, BUTTON_VARIABLES.map((variable) => (React.createElement(Chip, { key: variable.value, label: variable.label, size: "small", onClick: () => insertVariable(variable.value, 'text'), sx: { mb: 1 }, clickable: true }))))))),
        React.createElement(TextInput, { label: "URL", defaultValue: (_11 = (_10 = data.props) === null || _10 === void 0 ? void 0 : _10.url) !== null && _11 !== void 0 ? _11 : '', onChange: (url) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { url }) })), placeholder: "https://example.com" }),
        showVariables && (React.createElement(Box, { sx: { mb: 2, p: 2, bgcolor: 'grey.50', borderRadius: 1 } },
            React.createElement(Typography, { variant: "caption", color: "text.secondary", display: "block", sx: { mb: 1 } }, "URL variables:"),
            React.createElement(Stack, { direction: "row", spacing: 1, flexWrap: "wrap", useFlexGap: true }, BUTTON_VARIABLES.map((variable) => (React.createElement(Chip, { key: variable.value, label: variable.label, size: "small", onClick: () => insertVariable(variable.value, 'url'), sx: { mb: 1 }, clickable: true })))))),
        React.createElement(ColorInput, { label: "Background color", defaultValue: (_13 = (_12 = data.props) === null || _12 === void 0 ? void 0 : _12.buttonBackgroundColor) !== null && _13 !== void 0 ? _13 : '#000000', onChange: (buttonBackgroundColor) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { buttonBackgroundColor }) })) }),
        React.createElement(ColorInput, { label: "Text color", defaultValue: (_15 = (_14 = data.props) === null || _14 === void 0 ? void 0 : _14.buttonTextColor) !== null && _15 !== void 0 ? _15 : '#FFFFFF', onChange: (buttonTextColor) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { buttonTextColor }) })) }),
        React.createElement(RadioGroupInput, { label: "Button style", defaultValue: (_17 = (_16 = data.props) === null || _16 === void 0 ? void 0 : _16.buttonStyle) !== null && _17 !== void 0 ? _17 : 'rounded', onChange: (buttonStyle) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { buttonStyle }) })) },
            React.createElement(Button, { value: "rounded" }, "Rounded"),
            React.createElement(Button, { value: "rectangle" }, "Rectangle"),
            React.createElement(Button, { value: "pill" }, "Pill")),
        React.createElement(RadioGroupInput, { label: "Size", defaultValue: (_19 = (_18 = data.props) === null || _18 === void 0 ? void 0 : _18.size) !== null && _19 !== void 0 ? _19 : 'medium', onChange: (size) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { size }) })) },
            React.createElement(Button, { value: "small" }, "Small"),
            React.createElement(Button, { value: "medium" }, "Medium"),
            React.createElement(Button, { value: "large" }, "Large")),
        React.createElement(BooleanInput, { label: "Full width", defaultValue: (_21 = (_20 = data.props) === null || _20 === void 0 ? void 0 : _20.fullWidth) !== null && _21 !== void 0 ? _21 : false, onChange: (fullWidth) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { fullWidth }) })) }),
        React.createElement(MultiStylePropertyPanel, { names: ['backgroundColor', 'fontSize', 'fontFamily', 'fontWeight', 'textAlign', 'padding'], value: data.style, onChange: (style) => updateData(Object.assign(Object.assign({}, data), { style })) })));
}
//# sourceMappingURL=ButtonSidebarPanel.js.map