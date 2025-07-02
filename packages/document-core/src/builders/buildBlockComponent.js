import React from 'react';
/**
 * @param blocks Main DocumentBlocksDictionary
 * @returns React component that can render a BlockConfiguration that is compatible with blocks
 */
export default function buildBlockComponent(blocks) {
    return function BlockComponent({ type, data }) {
        const Component = blocks[type].Component;
        return React.createElement(Component, Object.assign({}, data));
    };
}
//# sourceMappingURL=buildBlockComponent.js.map