import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
export default function BaseSidebarPanel({ title, children }) {
    return (React.createElement(Box, { p: 2 },
        React.createElement(Typography, { variant: "overline", color: "text.secondary", sx: { display: 'block', mb: 2 } }, title),
        React.createElement(Stack, { spacing: 5, mb: 3 }, children)));
}
//# sourceMappingURL=BaseSidebarPanel.js.map