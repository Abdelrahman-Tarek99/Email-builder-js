import React, { useState } from 'react';
import { AddOutlined, CloseOutlined } from '@mui/icons-material';
import { ButtonBase, InputLabel, Menu, Stack } from '@mui/material';
import Picker from './Picker';
const BUTTON_SX = {
    border: '1px solid',
    borderColor: 'cadet.400',
    width: 32,
    height: 32,
    borderRadius: '4px',
    bgcolor: '#FFFFFF',
};
export default function ColorInput({ label, defaultValue, onChange, nullable }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [value, setValue] = useState(defaultValue);
    const handleClickOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const renderResetButton = () => {
        if (!nullable) {
            return null;
        }
        if (typeof value !== 'string' || value.trim().length === 0) {
            return null;
        }
        return (React.createElement(ButtonBase, { onClick: () => {
                setValue(null);
                onChange(null);
            } },
            React.createElement(CloseOutlined, { fontSize: "small", sx: { color: 'grey.600' } })));
    };
    const renderOpenButton = () => {
        if (value) {
            return React.createElement(ButtonBase, { onClick: handleClickOpen, sx: Object.assign(Object.assign({}, BUTTON_SX), { bgcolor: value }) });
        }
        return (React.createElement(ButtonBase, { onClick: handleClickOpen, sx: Object.assign({}, BUTTON_SX) },
            React.createElement(AddOutlined, { fontSize: "small" })));
    };
    return (React.createElement(Stack, { alignItems: "flex-start" },
        React.createElement(InputLabel, { sx: { mb: 0.5 } }, label),
        React.createElement(Stack, { direction: "row", spacing: 1 },
            renderOpenButton(),
            renderResetButton()),
        React.createElement(Menu, { anchorEl: anchorEl, open: Boolean(anchorEl), onClose: () => setAnchorEl(null), MenuListProps: {
                sx: { height: 'auto', padding: 0 },
            } },
            React.createElement(Picker, { value: value || '', onChange: (v) => {
                    setValue(v);
                    onChange(v);
                } }))));
}
//# sourceMappingURL=BaseColorInput.js.map