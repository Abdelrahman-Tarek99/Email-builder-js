import React from 'react';
import { z } from 'zod';
const COLOR_SCHEMA = z
    .string()
    .regex(/^#[0-9a-fA-F]{6}$/)
    .nullable()
    .optional();
const PADDING_SCHEMA = z
    .object({
    top: z.number(),
    bottom: z.number(),
    right: z.number(),
    left: z.number(),
})
    .optional()
    .nullable();
const getPadding = (padding) => padding ? `${padding.top}px ${padding.right}px ${padding.bottom}px ${padding.left}px` : undefined;
export const ContainerPropsSchema = z.object({
    style: z
        .object({
        backgroundColor: COLOR_SCHEMA,
        borderColor: COLOR_SCHEMA,
        borderRadius: z.number().optional().nullable(),
        padding: PADDING_SCHEMA,
    })
        .optional()
        .nullable(),
});
function getBorder(style) {
    if (!style || !style.borderColor) {
        return undefined;
    }
    return `1px solid ${style.borderColor}`;
}
export function Container({ style, children }) {
    var _c, _d;
    const wStyle = {
        backgroundColor: (_c = style === null || style === void 0 ? void 0 : style.backgroundColor) !== null && _c !== void 0 ? _c : undefined,
        border: getBorder(style),
        borderRadius: (_d = style === null || style === void 0 ? void 0 : style.borderRadius) !== null && _d !== void 0 ? _d : undefined,
        padding: getPadding(style === null || style === void 0 ? void 0 : style.padding),
    };
    if (!children) {
        return React.createElement("div", { style: wStyle });
    }
    return React.createElement("div", { style: wStyle }, children);
}
//# sourceMappingURL=index.js.map