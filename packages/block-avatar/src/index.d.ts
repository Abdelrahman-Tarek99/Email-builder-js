import React from 'react';
import { z } from 'zod';
export declare const AvatarPropsSchema: z.ZodObject<{
    style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
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
        textAlign?: "right" | "left" | "center" | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    }, {
        textAlign?: "right" | "left" | "center" | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    }>>>;
    props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        size: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        shape: z.ZodNullable<z.ZodOptional<z.ZodEnum<["circle", "square", "rounded"]>>>;
        imageUrl: z.ZodNullable<z.ZodOptional<z.ZodString>>;
        alt: z.ZodNullable<z.ZodOptional<z.ZodString>>;
    }, "strip", z.ZodTypeAny, {
        size?: number | null | undefined;
        shape?: "circle" | "square" | "rounded" | null | undefined;
        imageUrl?: string | null | undefined;
        alt?: string | null | undefined;
    }, {
        size?: number | null | undefined;
        shape?: "circle" | "square" | "rounded" | null | undefined;
        imageUrl?: string | null | undefined;
        alt?: string | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    style?: {
        textAlign?: "right" | "left" | "center" | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    } | null | undefined;
    props?: {
        size?: number | null | undefined;
        shape?: "circle" | "square" | "rounded" | null | undefined;
        imageUrl?: string | null | undefined;
        alt?: string | null | undefined;
    } | null | undefined;
}, {
    style?: {
        textAlign?: "right" | "left" | "center" | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    } | null | undefined;
    props?: {
        size?: number | null | undefined;
        shape?: "circle" | "square" | "rounded" | null | undefined;
        imageUrl?: string | null | undefined;
        alt?: string | null | undefined;
    } | null | undefined;
}>;
export type AvatarProps = z.infer<typeof AvatarPropsSchema>;
export declare const AvatarPropsDefaults: {
    readonly size: 64;
    readonly imageUrl: "";
    readonly alt: "";
    readonly shape: "square";
};
export declare function Avatar({ style, props }: AvatarProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map