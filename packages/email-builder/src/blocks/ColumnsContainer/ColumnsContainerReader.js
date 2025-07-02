var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import React from 'react';
import { ColumnsContainer as BaseColumnsContainer } from '@usewaypoint/block-columns-container';
import { ReaderBlock } from '../../Reader/core';
export default function ColumnsContainerReader({ style, props }) {
    const _c = props !== null && props !== void 0 ? props : {}, { columns } = _c, restProps = __rest(_c, ["columns"]);
    let cols = undefined;
    if (columns) {
        cols = columns.map((col) => col.childrenIds.map((childId) => React.createElement(ReaderBlock, { key: childId, id: childId })));
    }
    return React.createElement(BaseColumnsContainer, { props: restProps, columns: cols, style: style });
}
//# sourceMappingURL=ColumnsContainerReader.js.map