import React from 'react';
import { TEditorBlock } from '../../../../editor/core';
type BlocksMenuProps = {
    anchorEl: HTMLElement | null;
    setAnchorEl: (v: HTMLElement | null) => void;
    onSelect: (block: TEditorBlock) => void;
};
export default function BlocksMenu({ anchorEl, setAnchorEl, onSelect }: BlocksMenuProps): React.JSX.Element | null;
export {};
//# sourceMappingURL=BlocksMenu.d.ts.map