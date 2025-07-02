import React from 'react';
import { z } from 'zod';
export declare const TextPropsSchema: z.ZodObject<{
    style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        color: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fontSize: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        fontFamily: z.ZodOptional<z.ZodNullable<z.ZodEnum<["MODERN_SANS", "BOOK_SANS", "ORGANIC_SANS", "GEOMETRIC_SANS", "HEAVY_SANS", "ROUNDED_SANS", "MODERN_SERIF", "BOOK_SERIF", "MONOSPACE"]>>>;
        fontWeight: z.ZodNullable<z.ZodOptional<z.ZodEnum<["bold", "normal"]>>>;
        textAlign: z.ZodNullable<z.ZodOptional<z.ZodEnum<["left", "center", "right"]>>>;
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
    }, "strip", z.ZodTypeAny, {
        color?: string | null | undefined;
        backgroundColor?: string | null | undefined;
        fontSize?: number | null | undefined;
        fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
        fontWeight?: "bold" | "normal" | null | undefined;
        textAlign?: "right" | "left" | "center" | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    }, {
        color?: string | null | undefined;
        backgroundColor?: string | null | undefined;
        fontSize?: number | null | undefined;
        fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
        fontWeight?: "bold" | "normal" | null | undefined;
        textAlign?: "right" | "left" | "center" | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    }>>>;
    props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        markdown: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        text: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        markdown?: boolean | null | undefined;
        text?: string | null | undefined;
    }, {
        markdown?: boolean | null | undefined;
        text?: string | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    style?: {
        color?: string | null | undefined;
        backgroundColor?: string | null | undefined;
        fontSize?: number | null | undefined;
        fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
        fontWeight?: "bold" | "normal" | null | undefined;
        textAlign?: "right" | "left" | "center" | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    } | null | undefined;
    props?: {
        markdown?: boolean | null | undefined;
        text?: string | null | undefined;
    } | null | undefined;
}, {
    style?: {
        color?: string | null | undefined;
        backgroundColor?: string | null | undefined;
        fontSize?: number | null | undefined;
        fontFamily?: "MODERN_SANS" | "BOOK_SANS" | "ORGANIC_SANS" | "GEOMETRIC_SANS" | "HEAVY_SANS" | "ROUNDED_SANS" | "MODERN_SERIF" | "BOOK_SERIF" | "MONOSPACE" | null | undefined;
        fontWeight?: "bold" | "normal" | null | undefined;
        textAlign?: "right" | "left" | "center" | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    } | null | undefined;
    props?: {
        markdown?: boolean | null | undefined;
        text?: string | null | undefined;
    } | null | undefined;
}>;
export type TextProps = z.infer<typeof TextPropsSchema>;
export declare const TextPropsDefaults: {
    text: string;
};
export declare function Text({ style, props }: TextProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map