import React from 'react';
import { CodeOutlined, DataObjectOutlined, EditOutlined, EmailOutlined, PreviewOutlined } from '@mui/icons-material';
import { Tab, Tabs, Tooltip } from '@mui/material';
import { setSelectedMainTab, useSelectedMainTab } from '../../documents/editor/EditorContext';
export default function MainTabsGroup() {
    const selectedMainTab = useSelectedMainTab();
    const handleChange = (_, v) => {
        switch (v) {
            case 'json':
            case 'preview':
            case 'editor':
            case 'html':
            case 'test':
                setSelectedMainTab(v);
                return;
            default:
                setSelectedMainTab('editor');
        }
    };
    return (React.createElement(Tabs, { value: selectedMainTab, onChange: handleChange },
        React.createElement(Tab, { value: "editor", label: React.createElement(Tooltip, { title: "Edit" },
                React.createElement(EditOutlined, { fontSize: "small" })) }),
        React.createElement(Tab, { value: "preview", label: React.createElement(Tooltip, { title: "Preview" },
                React.createElement(PreviewOutlined, { fontSize: "small" })) }),
        React.createElement(Tab, { value: "html", label: React.createElement(Tooltip, { title: "HTML output" },
                React.createElement(CodeOutlined, { fontSize: "small" })) }),
        React.createElement(Tab, { value: "json", label: React.createElement(Tooltip, { title: "JSON output" },
                React.createElement(DataObjectOutlined, { fontSize: "small" })) })));
}
//# sourceMappingURL=MainTabsGroup.js.map