import React, { useState } from 'react';
import { FormControlLabel, Switch } from '@mui/material';
export default function BooleanInput({ label, defaultValue, onChange }) {
    const [value, setValue] = useState(defaultValue);
    return (React.createElement(FormControlLabel, { label: label, control: React.createElement(Switch, { checked: value, onChange: (_, checked) => {
                setValue(checked);
                onChange(checked);
            } }) }));
}
//# sourceMappingURL=BooleanInput.js.map