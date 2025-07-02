import React from 'react';
import { z } from 'zod';
export declare const ImagePropsSchema: z.ZodObject<{
    style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        padding: z.ZodNullable<z.ZodOptional<z.ZodObject<{
            top: z.ZodNumber;
            bottom: z.ZodNumber;
            right: z.ZodNumber;
            left: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            top: number;
            bottom: number;
            right: number;
            left: number;
        }, {
            top: number;
            bottom: number;
            right: number;
            left: number;
        }>>>;
        backgroundColor: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["center", "left", "right"]>>>;
    }, "strip", z.ZodTypeAny, {
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
        backgroundColor?: string | null | undefined;
        textAlign?: "right" | "left" | "center" | null | undefined;
    }, {
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
        backgroundColor?: string | null | undefined;
        textAlign?: "right" | "left" | "center" | null | undefined;
    }>>>;
    props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        width: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        height: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        alt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        linkHref: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        contentAlignment: z.ZodNullable<z.ZodOptional<z.ZodEnum<["top", "middle", "bottom"]>>>;
    }, "strip", z.ZodTypeAny, {
        width?: number | null | undefined;
        height?: number | null | undefined;
        url?: string | null | undefined;
        alt?: string | null | undefined;
        linkHref?: string | null | undefined;
        contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
    }, {
        width?: number | null | undefined;
        height?: number | null | undefined;
        url?: string | null | undefined;
        alt?: string | null | undefined;
        linkHref?: string | null | undefined;
        contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    style?: {
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
        backgroundColor?: string | null | undefined;
        textAlign?: "right" | "left" | "center" | null | undefined;
    } | null | undefined;
    props?: {
        width?: number | null | undefined;
        height?: number | null | undefined;
        url?: string | null | undefined;
        alt?: string | null | undefined;
        linkHref?: string | null | undefined;
        contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
    } | null | undefined;
}, {
    style?: {
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
        backgroundColor?: string | null | undefined;
        textAlign?: "right" | "left" | "center" | null | undefined;
    } | null | undefined;
    props?: {
        width?: number | null | undefined;
        height?: number | null | undefined;
        url?: string | null | undefined;
        alt?: string | null | undefined;
        linkHref?: string | null | undefined;
        contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
    } | null | undefined;
}>;
export type ImageProps = z.infer<typeof ImagePropsSchema>;
export declare function Image({ style, props }: ImageProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map