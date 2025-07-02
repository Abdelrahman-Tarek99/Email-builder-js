import React from 'react';
import { FirstPageOutlined, MenuOutlined } from '@mui/icons-material';
import { IconButton } from '@mui/material';
import { toggleSamplesDrawerOpen, useSamplesDrawerOpen } from '../../documents/editor/EditorContext';
function useIcon() {
    const samplesDrawerOpen = useSamplesDrawerOpen();
    if (samplesDrawerOpen) {
        return React.createElement(FirstPageOutlined, { fontSize: "small" });
    }
    return React.createElement(MenuOutlined, { fontSize: "small" });
}
export default function ToggleSamplesPanelButton() {
    const icon = useIcon();
    return React.createElement(IconButton, { onClick: toggleSamplesDrawerOpen }, icon);
}
//# sourceMappingURL=ToggleSamplesPanelButton.js.map