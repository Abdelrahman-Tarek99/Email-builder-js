import React from 'react';
import { AddOutlined } from '@mui/icons-material';
import { ButtonBase } from '@mui/material';
export default function PlaceholderButton({ onClick }) {
    return (React.createElement(ButtonBase, { onClick: (ev) => {
            ev.stopPropagation();
            onClick();
        }, sx: {
            display: 'flex',
            alignContent: 'center',
            justifyContent: 'center',
            height: 48,
            width: '100%',
            bgcolor: 'rgba(0,0,0, 0.05)',
        } },
        React.createElement(AddOutlined, { sx: {
                p: 0.12,
                bgcolor: 'brand.blue',
                borderRadius: 24,
                color: 'primary.contrastText',
            }, fontSize: "small" })));
}
//# sourceMappingURL=PlaceholderButton.js.map