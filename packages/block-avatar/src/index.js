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
export const AvatarPropsSchema = z.object({
    style: z
        .object({
        textAlign: z.enum(['left', 'center', 'right']).optional().nullable(),
        padding: PADDING_SCHEMA,
    })
        .optional()
        .nullable(),
    props: z
        .object({
        size: z.number().gt(0).optional().nullable(),
        shape: z.enum(['circle', 'square', 'rounded']).optional().nullable(),
        imageUrl: z.string().optional().nullable(),
        alt: z.string().optional().nullable(),
    })
        .optional()
        .nullable(),
});
function getBorderRadius(shape, size) {
    switch (shape) {
        case 'rounded':
            return size * 0.125;
        case 'circle':
            return size;
        case 'square':
        default:
            return undefined;
    }
}
export const AvatarPropsDefaults = {
    size: 64,
    imageUrl: '',
    alt: '',
    shape: 'square',
};
export function Avatar({ style, props }) {
    var _c, _d, _10, _11, _12;
    const size = (_c = props === null || props === void 0 ? void 0 : props.size) !== null && _c !== void 0 ? _c : AvatarPropsDefaults.size;
    const imageUrl = (_d = props === null || props === void 0 ? void 0 : props.imageUrl) !== null && _d !== void 0 ? _d : AvatarPropsDefaults.imageUrl;
    const alt = (_10 = props === null || props === void 0 ? void 0 : props.alt) !== null && _10 !== void 0 ? _10 : AvatarPropsDefaults.alt;
    const shape = (_11 = props === null || props === void 0 ? void 0 : props.shape) !== null && _11 !== void 0 ? _11 : AvatarPropsDefaults.shape;
    const sectionStyle = {
        textAlign: (_12 = style === null || style === void 0 ? void 0 : style.textAlign) !== null && _12 !== void 0 ? _12 : undefined,
        padding: getPadding(style === null || style === void 0 ? void 0 : style.padding),
    };
    return (React.createElement("div", { style: sectionStyle },
        React.createElement("img", { alt: alt, src: imageUrl, height: size, width: size, style: {
                outline: 'none',
                border: 'none',
                textDecoration: 'none',
                objectFit: 'cover',
                height: size,
                width: size,
                maxWidth: '100%',
                display: 'inline-block',
                verticalAlign: 'middle',
                textAlign: 'center',
                borderRadius: getBorderRadius(shape, size),
            } })));
}
//# sourceMappingURL=index.js.map