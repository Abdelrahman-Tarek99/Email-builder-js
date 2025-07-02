import React, { useEffect, useState } from 'react';
import { AddOutlined } from '@mui/icons-material';
import { Fade, IconButton } from '@mui/material';
export default function DividerButton({ buttonElement, onClick }) {
    const [visible, setVisible] = useState(false);
    useEffect(() => {
        function listener({ clientX, clientY }) {
            if (!buttonElement) {
                return;
            }
            const rect = buttonElement.getBoundingClientRect();
            const rectY = rect.y;
            const bottomX = rect.x;
            const topX = bottomX + rect.width;
            if (Math.abs(clientY - rectY) < 20) {
                if (bottomX < clientX && clientX < topX) {
                    setVisible(true);
                    return;
                }
            }
            setVisible(false);
        }
        window.addEventListener('mousemove', listener);
        return () => {
            window.removeEventListener('mousemove', listener);
        };
    }, [buttonElement, setVisible]);
    return (React.createElement(Fade, { in: visible },
        React.createElement(IconButton, { size: "small", sx: {
                p: 0.12,
                position: 'absolute',
                top: '-12px',
                left: '50%',
                transform: 'translateX(-10px)',
                bgcolor: 'brand.blue',
                color: 'primary.contrastText',
                zIndex: 'fab',
                '&:hover, &:active, &:focus': {
                    bgcolor: 'brand.blue',
                    color: 'primary.contrastText',
                },
            }, onClick: (ev) => {
                ev.stopPropagation();
                onClick();
            } },
            React.createElement(AddOutlined, { fontSize: "small" }))));
}
//# sourceMappingURL=DividerButton.js.map