import React, { useEffect, useState } from 'react';
import { html, json } from './highlighters';
export default function HighlightedCodePanel({ type, value }) {
    const [code, setCode] = useState(null);
    useEffect(() => {
        switch (type) {
            case 'html':
                html(value).then(setCode);
                return;
            case 'json':
                json(value).then(setCode);
                return;
        }
    }, [setCode, value, type]);
    if (code === null) {
        return null;
    }
    return (React.createElement("pre", { style: { margin: 0, padding: 16 }, dangerouslySetInnerHTML: { __html: code }, onClick: (ev) => {
            const s = window.getSelection();
            if (s === null) {
                return;
            }
            s.selectAllChildren(ev.currentTarget);
        } }));
}
//# sourceMappingURL=HighlightedCodePanel.js.map