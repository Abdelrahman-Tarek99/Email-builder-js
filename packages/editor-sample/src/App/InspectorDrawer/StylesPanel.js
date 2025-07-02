import React from 'react';
import { setDocument, useDocument } from '../../documents/editor/EditorContext';
import EmailLayoutSidebarPanel from './ConfigurationPanel/input-panels/EmailLayoutSidebarPanel';
export default function StylesPanel() {
    const block = useDocument().root;
    if (!block) {
        return React.createElement("p", null, "Block not found");
    }
    const { data, type } = block;
    if (type !== 'EmailLayout') {
        throw new Error('Expected "root" element to be of type EmailLayout');
    }
    return React.createElement(EmailLayoutSidebarPanel, { key: "root", data: data, setData: (data) => setDocument({ root: { type, data } }) });
}
//# sourceMappingURL=StylesPanel.js.map