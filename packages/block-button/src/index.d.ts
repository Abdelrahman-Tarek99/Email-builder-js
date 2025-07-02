import React from 'react';
import { z } from 'zod';
export declare const ButtonPropsSchema: z.ZodObject<{
    style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
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
        buttonBackgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        buttonStyle: z.ZodNullable<z.ZodOptional<z.ZodEnum<["rectangle", "pill", "rounded"]>>>;
        buttonTextColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        fullWidth: z.ZodNullable<z.ZodOptional<z.ZodBoolean>>;
        size: z.ZodNullable<z.ZodOptional<z.ZodEnum<["x-small", "small", "large", "medium"]>>>;
        text: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        url: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        buttonBackgroundColor?: string | null | undefined;
        buttonStyle?: "rounded" | "rectangle" | "pill" | null | undefined;
        buttonTextColor?: string | null | undefined;
        fullWidth?: boolean | null | undefined;
        size?: "small" | "medium" | "x-small" | "large" | null | undefined;
        text?: string | null | undefined;
        url?: string | null | undefined;
    }, {
        buttonBackgroundColor?: string | null | undefined;
        buttonStyle?: "rounded" | "rectangle" | "pill" | null | undefined;
        buttonTextColor?: string | null | undefined;
        fullWidth?: boolean | null | undefined;
        size?: "small" | "medium" | "x-small" | "large" | null | undefined;
        text?: string | null | undefined;
        url?: string | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    style?: {
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
        buttonBackgroundColor?: string | null | undefined;
        buttonStyle?: "rounded" | "rectangle" | "pill" | null | undefined;
        buttonTextColor?: string | null | undefined;
        fullWidth?: boolean | null | undefined;
        size?: "small" | "medium" | "x-small" | "large" | null | undefined;
        text?: string | null | undefined;
        url?: string | null | undefined;
    } | null | undefined;
}, {
    style?: {
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
        buttonBackgroundColor?: string | null | undefined;
        buttonStyle?: "rounded" | "rectangle" | "pill" | null | undefined;
        buttonTextColor?: string | null | undefined;
        fullWidth?: boolean | null | undefined;
        size?: "small" | "medium" | "x-small" | "large" | null | undefined;
        text?: string | null | undefined;
        url?: string | null | undefined;
    } | null | undefined;
}>;
export type ButtonProps = z.infer<typeof ButtonPropsSchema>;
export declare const ButtonPropsDefaults: {
    readonly text: "";
    readonly url: "";
    readonly fullWidth: false;
    readonly size: "medium";
    readonly buttonStyle: "rounded";
    readonly buttonTextColor: "#FFFFFF";
    readonly buttonBackgroundColor: "#999999";
};
export declare function Button({ style, props }: ButtonProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map