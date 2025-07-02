import React, { useState } from 'react';
import { HeightOutlined } from '@mui/icons-material';
import { SpacerPropsDefaults, SpacerPropsSchema } from '@usewaypoint/block-spacer';
import BaseSidebarPanel from './helpers/BaseSidebarPanel';
import SliderInput from './helpers/inputs/SliderInput';
export default function SpacerSidebarPanel({ data, setData }) {
    var _c, _d;
    const [, setErrors] = useState(null);
    const updateData = (d) => {
        const res = SpacerPropsSchema.safeParse(d);
        if (res.success) {
            setData(res.data);
            setErrors(null);
        }
        else {
            setErrors(res.error);
        }
    };
    return (React.createElement(BaseSidebarPanel, { title: "Spacer block" },
        React.createElement(SliderInput, { label: "Height", iconLabel: React.createElement(HeightOutlined, { sx: { color: 'text.secondary' } }), units: "px", step: 4, min: 4, max: 128, defaultValue: (_d = (_c = data.props) === null || _c === void 0 ? void 0 : _c.height) !== null && _d !== void 0 ? _d : SpacerPropsDefaults.height, onChange: (height) => updateData(Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { height }) })) })));
}
//# sourceMappingURL=SpacerSidebarPanel.js.map