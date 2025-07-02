import React, { createContext, useContext } from 'react';
import { EditorBlock as CoreEditorBlock } from './core';
import { useDocument } from './EditorContext';
const EditorBlockContext = createContext(null);
export const useCurrentBlockId = () => useContext(EditorBlockContext);
/**
 *
 * @param id - Block id
 * @returns EditorBlock component that loads data from the EditorDocumentContext
 */
export default function EditorBlock({ id }) {
    const document = useDocument();
    const block = document[id];
    if (!block) {
        throw new Error('Could not find block');
    }
    return (React.createElement(EditorBlockContext.Provider, { value: id },
        React.createElement(CoreEditorBlock, Object.assign({}, block))));
}
//# sourceMappingURL=EditorBlock.js.map