import React from 'react';
import { TEditorBlock } from '../../../editor/core';
export type EditorChildrenChange = {
    blockId: string;
    block: TEditorBlock;
    childrenIds: string[];
};
export type EditorChildrenIdsProps = {
    childrenIds: string[] | null | undefined;
    onChange: (val: EditorChildrenChange) => void;
};
export default function EditorChildrenIds({ childrenIds, onChange }: EditorChildrenIdsProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map