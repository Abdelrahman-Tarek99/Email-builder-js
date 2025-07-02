import React from 'react';
import { Box, Typography } from '@mui/material';
import { setDocument, useDocument, useSelectedBlockId } from '../../../documents/editor/EditorContext';
import AvatarSidebarPanel from './input-panels/AvatarSidebarPanel';
import ButtonSidebarPanel from './input-panels/ButtonSidebarPanel';
import ColumnsContainerSidebarPanel from './input-panels/ColumnsContainerSidebarPanel';
import ContainerSidebarPanel from './input-panels/ContainerSidebarPanel';
import DividerSidebarPanel from './input-panels/DividerSidebarPanel';
import EmailLayoutSidebarPanel from './input-panels/EmailLayoutSidebarPanel';
import HeadingSidebarPanel from './input-panels/HeadingSidebarPanel';
import HtmlSidebarPanel from './input-panels/HtmlSidebarPanel';
import ImageSidebarPanel from './input-panels/ImageSidebarPanel';
import SpacerSidebarPanel from './input-panels/SpacerSidebarPanel';
import TextSidebarPanel from './input-panels/TextSidebarPanel';
function renderMessage(val) {
    return (React.createElement(Box, { sx: { m: 3, p: 1, border: '1px dashed', borderColor: 'divider' } },
        React.createElement(Typography, { color: "text.secondary" }, val)));
}
export default function ConfigurationPanel() {
    const document = useDocument();
    const selectedBlockId = useSelectedBlockId();
    if (!selectedBlockId) {
        return renderMessage('Click on a block to inspect.');
    }
    const block = document[selectedBlockId];
    if (!block) {
        return renderMessage(`Block with id ${selectedBlockId} was not found. Click on a block to reset.`);
    }
    const setBlock = (conf) => setDocument({ [selectedBlockId]: conf });
    const { data, type } = block;
    switch (type) {
        case 'Avatar':
            return React.createElement(AvatarSidebarPanel, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'Button':
            return React.createElement(ButtonSidebarPanel, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'ColumnsContainer':
            return (React.createElement(ColumnsContainerSidebarPanel, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) }));
        case 'Container':
            return React.createElement(ContainerSidebarPanel, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'Divider':
            return React.createElement(DividerSidebarPanel, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'Heading':
            return React.createElement(HeadingSidebarPanel, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'Html':
            return React.createElement(HtmlSidebarPanel, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'Image':
            return React.createElement(ImageSidebarPanel, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'EmailLayout':
            return React.createElement(EmailLayoutSidebarPanel, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'Spacer':
            return React.createElement(SpacerSidebarPanel, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        case 'Text':
            return React.createElement(TextSidebarPanel, { key: selectedBlockId, data: data, setData: (data) => setBlock({ type, data }) });
        default:
            return React.createElement("pre", null, JSON.stringify(block, null, '  '));
    }
}
//# sourceMappingURL=index.js.map