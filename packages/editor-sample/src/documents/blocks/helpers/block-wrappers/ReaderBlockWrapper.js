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
export default function ReaderBlockWrapper({ style, children }) {
    const { padding, borderColor } = style, restStyle = __rest(style, ["padding", "borderColor"]);
    const cssStyle = Object.assign({}, restStyle);
    if (padding) {
        const { top, bottom, left, right } = padding;
        cssStyle.padding = `${top}px ${right}px ${bottom}px ${left}px`;
    }
    if (borderColor) {
        cssStyle.border = `1px solid ${borderColor}`;
    }
    return React.createElement("div", { style: Object.assign({ maxWidth: '100%' }, cssStyle) }, children);
}
//# sourceMappingURL=ReaderBlockWrapper.js.map