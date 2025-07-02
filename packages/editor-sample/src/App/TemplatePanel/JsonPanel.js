import React, { useMemo } from 'react';
import { useDocument } from '../../documents/editor/EditorContext';
import HighlightedCodePanel from './helper/HighlightedCodePanel';
export default function JsonPanel() {
    const document = useDocument();
    const code = useMemo(() => JSON.stringify(document, null, '  '), [document]);
    return React.createElement(HighlightedCodePanel, { type: "json", value: code });
}
//# sourceMappingURL=JsonPanel.js.map