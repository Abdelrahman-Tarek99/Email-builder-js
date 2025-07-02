import React from 'react';
import { z } from 'zod';
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
export const ImagePropsSchema = z.object({
    style: z
        .object({
        padding: PADDING_SCHEMA,
        backgroundColor: z
            .string()
            .regex(/^#[0-9a-fA-F]{6}$/)
            .optional()
            .nullable(),
        textAlign: z.enum(['center', 'left', 'right']).optional().nullable(),
    })
        .optional()
        .nullable(),
    props: z
        .object({
        width: z.number().optional().nullable(),
        height: z.number().optional().nullable(),
        url: z.string().optional().nullable(),
        alt: z.string().optional().nullable(),
        linkHref: z.string().optional().nullable(),
        contentAlignment: z.enum(['top', 'middle', 'bottom']).optional().nullable(),
    })
        .optional()
        .nullable(),
});
export function Image({ style, props }) {
    var _c, _d, _10, _11, _12, _13, _14, _15;
    const sectionStyle = {
        padding: getPadding(style === null || style === void 0 ? void 0 : style.padding),
        backgroundColor: (_c = style === null || style === void 0 ? void 0 : style.backgroundColor) !== null && _c !== void 0 ? _c : undefined,
        textAlign: (_d = style === null || style === void 0 ? void 0 : style.textAlign) !== null && _d !== void 0 ? _d : undefined,
    };
    const linkHref = (_10 = props === null || props === void 0 ? void 0 : props.linkHref) !== null && _10 !== void 0 ? _10 : null;
    const width = (_11 = props === null || props === void 0 ? void 0 : props.width) !== null && _11 !== void 0 ? _11 : undefined;
    const height = (_12 = props === null || props === void 0 ? void 0 : props.height) !== null && _12 !== void 0 ? _12 : undefined;
    const imageElement = (React.createElement("img", { alt: (_13 = props === null || props === void 0 ? void 0 : props.alt) !== null && _13 !== void 0 ? _13 : '', src: (_14 = props === null || props === void 0 ? void 0 : props.url) !== null && _14 !== void 0 ? _14 : '', width: width, height: height, style: {
            width,
            height,
            outline: 'none',
            border: 'none',
            textDecoration: 'none',
            verticalAlign: (_15 = props === null || props === void 0 ? void 0 : props.contentAlignment) !== null && _15 !== void 0 ? _15 : 'middle',
            display: 'inline-block',
            maxWidth: '100%',
        } }));
    if (!linkHref) {
        return React.createElement("div", { style: sectionStyle }, imageElement);
    }
    return (React.createElement("div", { style: sectionStyle },
        React.createElement("a", { href: linkHref, style: { textDecoration: 'none' }, target: "_blank" }, imageElement)));
}
//# sourceMappingURL=index.js.map