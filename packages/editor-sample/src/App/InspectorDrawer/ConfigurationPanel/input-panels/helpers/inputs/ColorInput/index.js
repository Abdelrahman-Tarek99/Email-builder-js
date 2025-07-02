import React from 'react';
import BaseColorInput from './BaseColorInput';
export default function ColorInput(props) {
    return React.createElement(BaseColorInput, Object.assign({}, props, { nullable: false }));
}
export function NullableColorInput(props) {
    return React.createElement(BaseColorInput, Object.assign({}, props, { nullable: true }));
}
//# sourceMappingURL=index.js.map