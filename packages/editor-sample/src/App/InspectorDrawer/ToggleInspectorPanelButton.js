import React from 'react';
import { AppRegistrationOutlined, LastPageOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { toggleInspectorDrawerOpen, useInspectorDrawerOpen } from '../../documents/editor/EditorContext';
export default function ToggleInspectorPanelButton() {
    const inspectorDrawerOpen = useInspectorDrawerOpen();
    const handleClick = () => {
        toggleInspectorDrawerOpen();
    };
    if (inspectorDrawerOpen) {
        return (React.createElement(IconButton, { onClick: handleClick },
            React.createElement(LastPageOutlined, { fontSize: "small" })));
    }
    return (React.createElement(IconButton, { onClick: handleClick },
        React.createElement(AppRegistrationOutlined, { fontSize: "small" })));
}
//# sourceMappingURL=ToggleInspectorPanelButton.js.map