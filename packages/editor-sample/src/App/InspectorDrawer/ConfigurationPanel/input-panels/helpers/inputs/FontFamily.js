import React, { useState } from 'react';
import { MenuItem, TextField } from '@mui/material';
import { FONT_FAMILIES } from '../../../../../../documents/blocks/helpers/fontFamily';
const OPTIONS = FONT_FAMILIES.map((option) => (React.createElement(MenuItem, { key: option.key, value: option.key, sx: { fontFamily: option.value } }, option.label)));
export function NullableFontFamily({ label, onChange, defaultValue }) {
    const [value, setValue] = useState(defaultValue !== null && defaultValue !== void 0 ? defaultValue : 'inherit');
    return (React.createElement(TextField, { select: true, variant: "standard", label: label, value: value, onChange: (ev) => {
            const v = ev.target.value;
            setValue(v);
            onChange(v === null ? null : v);
        } },
        React.createElement(MenuItem, { value: "inherit" }, "Match email settings"),
        OPTIONS));
}
//# sourceMappingURL=FontFamily.js.map