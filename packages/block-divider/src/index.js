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
export const DividerPropsSchema = z.object({
    style: z
        .object({
        backgroundColor: COLOR_SCHEMA,
        padding: PADDING_SCHEMA,
    })
        .optional()
        .nullable(),
    props: z
        .object({
        lineColor: COLOR_SCHEMA,
        lineHeight: z.number().optional().nullable(),
    })
        .optional()
        .nullable(),
});
export const DividerPropsDefaults = {
    lineHeight: 1,
    lineColor: '#333333',
};
export function Divider({ style, props }) {
    var _c, _d, _10;
    const st = {
        padding: getPadding(style === null || style === void 0 ? void 0 : style.padding),
        backgroundColor: (_c = style === null || style === void 0 ? void 0 : style.backgroundColor) !== null && _c !== void 0 ? _c : undefined,
    };
    const borderTopWidth = (_d = props === null || props === void 0 ? void 0 : props.lineHeight) !== null && _d !== void 0 ? _d : DividerPropsDefaults.lineHeight;
    const borderTopColor = (_10 = props === null || props === void 0 ? void 0 : props.lineColor) !== null && _10 !== void 0 ? _10 : DividerPropsDefaults.lineColor;
    return (React.createElement("div", { style: st },
        React.createElement("hr", { style: {
                width: '100%',
                border: 'none',
                borderTop: `${borderTopWidth}px solid ${borderTopColor}`,
                margin: 0,
            } })));
}
//# sourceMappingURL=index.js.map