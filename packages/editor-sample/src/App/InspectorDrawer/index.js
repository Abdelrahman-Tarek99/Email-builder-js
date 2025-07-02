import React from 'react';
import { Box, Drawer, Tab, Tabs } from '@mui/material';
import { setSidebarTab, useInspectorDrawerOpen, useSelectedSidebarTab } from '../../documents/editor/EditorContext';
import ConfigurationPanel from './ConfigurationPanel';
import StylesPanel from './StylesPanel';
export const INSPECTOR_DRAWER_WIDTH = 320;
export default function InspectorDrawer() {
    const selectedSidebarTab = useSelectedSidebarTab();
    const inspectorDrawerOpen = useInspectorDrawerOpen();
    const renderCurrentSidebarPanel = () => {
        switch (selectedSidebarTab) {
            case 'block-configuration':
                return React.createElement(ConfigurationPanel, null);
            case 'styles':
                return React.createElement(StylesPanel, null);
        }
    };
    return (React.createElement(Drawer, { variant: "persistent", anchor: "right", open: inspectorDrawerOpen, sx: {
            width: inspectorDrawerOpen ? INSPECTOR_DRAWER_WIDTH : 0,
        } },
        React.createElement(Box, { sx: { width: INSPECTOR_DRAWER_WIDTH, height: 49, borderBottom: 1, borderColor: 'divider' } },
            React.createElement(Box, { px: 2 },
                React.createElement(Tabs, { value: selectedSidebarTab, onChange: (_, v) => setSidebarTab(v) },
                    React.createElement(Tab, { value: "styles", label: "Styles" }),
                    React.createElement(Tab, { value: "block-configuration", label: "Inspect" })))),
        React.createElement(Box, { sx: { width: INSPECTOR_DRAWER_WIDTH, height: 'calc(100% - 49px)', overflow: 'auto' } }, renderCurrentSidebarPanel())));
}
//# sourceMappingURL=index.js.map