import React from 'react';
import { z } from 'zod';
export declare const ColumnsContainerPropsSchema: z.ZodObject<{
    style: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        backgroundColor: z.ZodOptional<z.ZodNullable<z.ZodString>>;
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
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    }, {
        backgroundColor?: string | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    }>>>;
    props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        fixedWidths: z.ZodNullable<z.ZodOptional<z.ZodTuple<[z.ZodOptional<z.ZodNullable<z.ZodNumber>>, z.ZodOptional<z.ZodNullable<z.ZodNumber>>, z.ZodOptional<z.ZodNullable<z.ZodNumber>>], null>>>;
        columnsCount: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>>;
        columnsGap: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        contentAlignment: z.ZodNullable<z.ZodOptional<z.ZodEnum<["top", "middle", "bottom"]>>>;
    }, "strip", z.ZodTypeAny, {
        fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
        columnsCount?: 2 | 3 | null | undefined;
        columnsGap?: number | null | undefined;
        contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
    }, {
        fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
        columnsCount?: 2 | 3 | null | undefined;
        columnsGap?: number | null | undefined;
        contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    style?: {
        backgroundColor?: string | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    } | null | undefined;
    props?: {
        fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
        columnsCount?: 2 | 3 | null | undefined;
        columnsGap?: number | null | undefined;
        contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
    } | null | undefined;
}, {
    style?: {
        backgroundColor?: string | null | undefined;
        padding?: {
            top: number;
            bottom: number;
            right: number;
            left: number;
        } | null | undefined;
    } | null | undefined;
    props?: {
        fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
        columnsCount?: 2 | 3 | null | undefined;
        columnsGap?: number | null | undefined;
        contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
    } | null | undefined;
}>;
type TColumn = JSX.Element | JSX.Element[] | null;
export type ColumnsContainerProps = z.infer<typeof ColumnsContainerPropsSchema> & {
    columns?: TColumn[];
};
export declare function ColumnsContainer({ style, columns, props }: ColumnsContainerProps): React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map