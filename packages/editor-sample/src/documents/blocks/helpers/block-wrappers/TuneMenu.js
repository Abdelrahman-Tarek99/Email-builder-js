import React from 'react';
import { ArrowDownwardOutlined, ArrowUpwardOutlined, DeleteOutlined } from '@mui/icons-material';
import { IconButton, Paper, Stack, Tooltip } from '@mui/material';
import { resetDocument, setSelectedBlockId, useDocument } from '../../../editor/EditorContext';
const sx = {
    position: 'absolute',
    top: 0,
    left: -56,
    borderRadius: 64,
    paddingX: 0.5,
    paddingY: 1,
    zIndex: 'fab',
};
export default function TuneMenu({ blockId }) {
    const document = useDocument();
    const handleDeleteClick = () => {
        var _c, _d, _10;
        const filterChildrenIds = (childrenIds) => {
            if (!childrenIds) {
                return childrenIds;
            }
            return childrenIds.filter((f) => f !== blockId);
        };
        const nDocument = Object.assign({}, document);
        for (const [id, b] of Object.entries(nDocument)) {
            const block = b;
            if (id === blockId) {
                continue;
            }
            switch (block.type) {
                case 'EmailLayout':
                    nDocument[id] = Object.assign(Object.assign({}, block), { data: Object.assign(Object.assign({}, block.data), { childrenIds: filterChildrenIds(block.data.childrenIds) }) });
                    break;
                case 'Container':
                    nDocument[id] = Object.assign(Object.assign({}, block), { data: Object.assign(Object.assign({}, block.data), { props: Object.assign(Object.assign({}, block.data.props), { childrenIds: filterChildrenIds((_c = block.data.props) === null || _c === void 0 ? void 0 : _c.childrenIds) }) }) });
                    break;
                case 'ColumnsContainer':
                    nDocument[id] = {
                        type: 'ColumnsContainer',
                        data: {
                            style: block.data.style,
                            props: Object.assign(Object.assign({}, block.data.props), { columns: (_10 = (_d = block.data.props) === null || _d === void 0 ? void 0 : _d.columns) === null || _10 === void 0 ? void 0 : _10.map((c) => ({
                                    childrenIds: filterChildrenIds(c.childrenIds),
                                })) }),
                        },
                    };
                    break;
                default:
                    nDocument[id] = block;
            }
        }
        delete nDocument[blockId];
        resetDocument(nDocument);
    };
    const handleMoveClick = (direction) => {
        var _c, _d, _10;
        const moveChildrenIds = (ids) => {
            if (!ids) {
                return ids;
            }
            const index = ids.indexOf(blockId);
            if (index < 0) {
                return ids;
            }
            const childrenIds = [...ids];
            if (direction === 'up' && index > 0) {
                [childrenIds[index], childrenIds[index - 1]] = [childrenIds[index - 1], childrenIds[index]];
            }
            else if (direction === 'down' && index < childrenIds.length - 1) {
                [childrenIds[index], childrenIds[index + 1]] = [childrenIds[index + 1], childrenIds[index]];
            }
            return childrenIds;
        };
        const nDocument = Object.assign({}, document);
        for (const [id, b] of Object.entries(nDocument)) {
            const block = b;
            if (id === blockId) {
                continue;
            }
            switch (block.type) {
                case 'EmailLayout':
                    nDocument[id] = Object.assign(Object.assign({}, block), { data: Object.assign(Object.assign({}, block.data), { childrenIds: moveChildrenIds(block.data.childrenIds) }) });
                    break;
                case 'Container':
                    nDocument[id] = Object.assign(Object.assign({}, block), { data: Object.assign(Object.assign({}, block.data), { props: Object.assign(Object.assign({}, block.data.props), { childrenIds: moveChildrenIds((_c = block.data.props) === null || _c === void 0 ? void 0 : _c.childrenIds) }) }) });
                    break;
                case 'ColumnsContainer':
                    nDocument[id] = {
                        type: 'ColumnsContainer',
                        data: {
                            style: block.data.style,
                            props: Object.assign(Object.assign({}, block.data.props), { columns: (_10 = (_d = block.data.props) === null || _d === void 0 ? void 0 : _d.columns) === null || _10 === void 0 ? void 0 : _10.map((c) => ({
                                    childrenIds: moveChildrenIds(c.childrenIds),
                                })) }),
                        },
                    };
                    break;
                default:
                    nDocument[id] = block;
            }
        }
        resetDocument(nDocument);
        setSelectedBlockId(blockId);
    };
    return (React.createElement(Paper, { sx: sx, onClick: (ev) => ev.stopPropagation() },
        React.createElement(Stack, null,
            React.createElement(Tooltip, { title: "Move up", placement: "left-start" },
                React.createElement(IconButton, { onClick: () => handleMoveClick('up'), sx: { color: 'text.primary' } },
                    React.createElement(ArrowUpwardOutlined, { fontSize: "small" }))),
            React.createElement(Tooltip, { title: "Move down", placement: "left-start" },
                React.createElement(IconButton, { onClick: () => handleMoveClick('down'), sx: { color: 'text.primary' } },
                    React.createElement(ArrowDownwardOutlined, { fontSize: "small" }))),
            React.createElement(Tooltip, { title: "Delete", placement: "left-start" },
                React.createElement(IconButton, { onClick: handleDeleteClick, sx: { color: 'text.primary' } },
                    React.createElement(DeleteOutlined, { fontSize: "small" }))))));
}
//# sourceMappingURL=TuneMenu.js.map