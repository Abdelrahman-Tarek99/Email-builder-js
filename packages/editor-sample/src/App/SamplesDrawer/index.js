import React from 'react';
import { Box, Button, Divider, Drawer, Link, Stack, Typography } from '@mui/material';
import { useSamplesDrawerOpen } from '../../documents/editor/EditorContext';
import SidebarButton from './SidebarButton';
import logo from './waypoint.svg';
export const SAMPLES_DRAWER_WIDTH = 240;
export default function SamplesDrawer() {
    const samplesDrawerOpen = useSamplesDrawerOpen();
    return (React.createElement(Drawer, { variant: "persistent", anchor: "left", open: samplesDrawerOpen, sx: {
            width: samplesDrawerOpen ? SAMPLES_DRAWER_WIDTH : 0,
        } },
        React.createElement(Stack, { spacing: 3, py: 1, px: 2, width: SAMPLES_DRAWER_WIDTH, justifyContent: "space-between", height: "100%" },
            React.createElement(Stack, { spacing: 2, sx: { '& .MuiButtonBase-root': { width: '100%', justifyContent: 'flex-start' } } },
                React.createElement(Typography, { variant: "h6", component: "h1", sx: { p: 0.75 } }, "EmailBuilder.js"),
                React.createElement(Stack, { alignItems: "flex-start" },
                    React.createElement(SidebarButton, { href: "#" }, "Empty"),
                    React.createElement(SidebarButton, { href: "#sample/email-template" }, "Email Template"),
                    React.createElement(SidebarButton, { href: "#sample/welcome" }, "Welcome email"),
                    React.createElement(SidebarButton, { href: "#sample/one-time-password" }, "One-time passcode (OTP)"),
                    React.createElement(SidebarButton, { href: "#sample/reset-password" }, "Reset password"),
                    React.createElement(SidebarButton, { href: "#sample/order-ecomerce" }, "E-commerce receipt"),
                    React.createElement(SidebarButton, { href: "#sample/subscription-receipt" }, "Subscription receipt"),
                    React.createElement(SidebarButton, { href: "#sample/reservation-reminder" }, "Reservation reminder"),
                    React.createElement(SidebarButton, { href: "#sample/post-metrics-report" }, "Post metrics"),
                    React.createElement(SidebarButton, { href: "#sample/respond-to-message" }, "Respond to inquiry")),
                React.createElement(Divider, null),
                React.createElement(Stack, null,
                    React.createElement(Button, { size: "small", href: "https://www.usewaypoint.com/open-source/emailbuilderjs", target: "_blank" }, "Learn more"),
                    React.createElement(Button, { size: "small", href: "https://github.com/usewaypoint/email-builder-js", target: "_blank" }, "View on GitHub"))),
            React.createElement(Stack, { spacing: 2, px: 0.75, py: 3 },
                React.createElement(Link, { href: "https://usewaypoint.com?utm_source=emailbuilderjs", target: "_blank", sx: { lineHeight: 1 } },
                    React.createElement(Box, { component: "img", src: logo, width: 32 })),
                React.createElement(Box, null,
                    React.createElement(Typography, { variant: "overline", gutterBottom: true }, "Looking to send emails?"),
                    React.createElement(Typography, { variant: "body2", color: "text.secondary", paragraph: true }, "Waypoint is an end-to-end email API with a 'pro' version of this template builder with dynamic variables, loops, conditionals, drag and drop, layouts, and more.")),
                React.createElement(Button, { variant: "contained", color: "primary", sx: { justifyContent: 'center' }, href: "https://usewaypoint.com?utm_source=emailbuilderjs", target: "_blank" }, "Learn more")))));
}
//# sourceMappingURL=index.js.map