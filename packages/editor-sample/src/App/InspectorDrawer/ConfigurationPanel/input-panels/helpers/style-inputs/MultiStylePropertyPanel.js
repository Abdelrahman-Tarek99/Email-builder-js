import React from 'react';
import SingleStylePropertyPanel from './SingleStylePropertyPanel';
export default function MultiStylePropertyPanel({ names, value, onChange }) {
    return (React.createElement(React.Fragment, null, names.map((name) => (React.createElement(SingleStylePropertyPanel, { key: name, name: name, value: value || {}, onChange: onChange })))));
}
//# sourceMappingURL=MultiStylePropertyPanel.js.map