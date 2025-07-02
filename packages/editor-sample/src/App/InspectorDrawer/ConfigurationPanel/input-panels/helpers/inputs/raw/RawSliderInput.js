var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { Box, Slider, Stack, Typography } from '@mui/material';
export default function RawSliderInput(_c) {
    var { iconLabel, value, setValue, units } = _c, props = __rest(_c, ["iconLabel", "value", "setValue", "units"]);
    return (React.createElement(Stack, { direction: "row", alignItems: "center", spacing: 2, justifyContent: "space-between", width: "100%" },
        React.createElement(Box, { sx: { minWidth: 24, lineHeight: 1, flexShrink: 0 } }, iconLabel),
        React.createElement(Slider, Object.assign({}, props, { value: value, onChange: (_, value) => {
                if (typeof value !== 'number') {
                    throw new Error('RawSliderInput values can only receive numeric values');
                }
                setValue(value);
            } })),
        React.createElement(Box, { sx: { minWidth: 32, textAlign: 'right', flexShrink: 0 } },
            React.createElement(Typography, { variant: "body2", color: "text.secondary", sx: { lineHeight: 1 } },
                value,
                units))));
}
//# sourceMappingURL=RawSliderInput.js.map