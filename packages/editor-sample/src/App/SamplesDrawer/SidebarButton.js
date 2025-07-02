import React from 'react';
import { Button } from '@mui/material';
import { resetDocument } from '../../documents/editor/EditorContext';
import getConfiguration from '../../getConfiguration';
export default function SidebarButton({ href, children }) {
    const handleClick = () => {
        resetDocument(getConfiguration(href));
    };
    return (React.createElement(Button, { size: "small", href: href, onClick: handleClick }, children));
}
//# sourceMappingURL=SidebarButton.js.map