import React, { useState } from 'react';
import ContainerPropsSchema from '../../../../documents/blocks/Container/ContainerPropsSchema';
import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import MultiStylePropertyPanel from './helpers/style-inputs/MultiStylePropertyPanel';
export default function ContainerSidebarPanel({ data, setData }) {
    const [, setErrors] = useState(null);
    const updateData = (d) => {
        const res = ContainerPropsSchema.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    return (React.createElement(BaseSidebarPanel, { title: "Container block" },
        React.createElement(MultiStylePropertyPanel, { names: ['backgroundColor', 'borderColor', 'borderRadius', 'padding'], value: data.style, onChange: (style) => updateData(Object.assign(Object.assign({}, data), { style })) })));
}
//# sourceMappingURL=ContainerSidebarPanel.js.map