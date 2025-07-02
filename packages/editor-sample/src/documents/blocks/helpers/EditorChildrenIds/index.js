import React, { Fragment } from 'react';
import EditorBlock from '../../../editor/EditorBlock';
import AddBlockButton from './AddBlockMenu';
function generateId() {
    return `block-${Date.now()}`;
}
export default function EditorChildrenIds({ childrenIds, onChange }) {
    const appendBlock = (block) => {
        const blockId = generateId();
        return onChange({
            blockId,
            block,
            childrenIds: [...(childrenIds || []), blockId],
        });
    };
    const insertBlock = (block, index) => {
        const blockId = generateId();
        const newChildrenIds = [...(childrenIds || [])];
        newChildrenIds.splice(index, 0, blockId);
        return onChange({
            blockId,
            block,
            childrenIds: newChildrenIds,
        });
    };
    if (!childrenIds || childrenIds.length === 0) {
        return React.createElement(AddBlockButton, { placeholder: true, onSelect: appendBlock });
    }
    return (React.createElement(React.Fragment, null,
        childrenIds.map((childId, i) => (React.createElement(Fragment, { key: childId },
            React.createElement(AddBlockButton, { onSelect: (block) => insertBlock(block, i) }),
            React.createElement(EditorBlock, { id: childId })))),
        React.createElement(AddBlockButton, { onSelect: appendBlock })));
}
//# sourceMappingURL=index.js.map