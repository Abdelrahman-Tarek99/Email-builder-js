import React from 'react';
import { Container as BaseContainer } from '@usewaypoint/block-container';
import { ReaderBlock } from '../../Reader/core';
export default function ContainerReader({ style, props }) {
    var _c;
    const childrenIds = (_c = props === null || props === void 0 ? void 0 : props.childrenIds) !== null && _c !== void 0 ? _c : [];
    return (React.createElement(BaseContainer, { style: style }, childrenIds.map((childId) => (React.createElement(ReaderBlock, { key: childId, id: childId })))));
}
//# sourceMappingURL=ContainerReader.js.map