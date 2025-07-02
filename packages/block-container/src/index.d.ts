import React from 'react';
import { z } from 'zod';
export declare const ContainerPropsSchema: z.ZodObject<{
    style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        borderColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        borderRadius: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
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
        borderColor?: string | null | undefined;
        borderRadius?: number | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    }, {
        backgroundColor?: string | null | undefined;
        borderColor?: string | null | undefined;
        borderRadius?: number | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    style?: {
        backgroundColor?: string | null | undefined;
        borderColor?: string | null | undefined;
        borderRadius?: number | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    } | null | undefined;
}, {
    style?: {
        backgroundColor?: string | null | undefined;
        borderColor?: string | null | undefined;
        borderRadius?: number | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    } | null | undefined;
}>;
export type ContainerProps = {
    style?: z.infer<typeof ContainerPropsSchema>['style'];
    children?: JSX.Element | JSX.Element[] | null;
};
export declare function Container({ style, children }: ContainerProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map