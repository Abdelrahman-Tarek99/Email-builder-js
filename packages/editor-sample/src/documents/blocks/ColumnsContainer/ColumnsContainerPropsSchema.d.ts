import { z } from 'zod';
declare const ColumnsContainerPropsSchema: z.ZodObject<{
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
        columns: z.ZodTuple<[z.ZodObject<{
            childrenIds: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            childrenIds: string[];
        }, {
            childrenIds: string[];
        }>, z.ZodObject<{
            childrenIds: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            childrenIds: string[];
        }, {
            childrenIds: string[];
        }>, z.ZodObject<{
            childrenIds: z.ZodArray<z.ZodString, "many">;
        }, "strip", z.ZodTypeAny, {
            childrenIds: string[];
        }, {
            childrenIds: string[];
        }>], null>;
        fixedWidths: z.ZodNullable<z.ZodOptional<z.ZodTuple<[z.ZodOptional<z.ZodNullable<z.ZodNumber>>, z.ZodOptional<z.ZodNullable<z.ZodNumber>>, z.ZodOptional<z.ZodNullable<z.ZodNumber>>], null>>>;
        columnsCount: z.ZodNullable<z.ZodOptional<z.ZodUnion<[z.ZodLiteral<2>, z.ZodLiteral<3>]>>>;
        columnsGap: z.ZodNullable<z.ZodOptional<z.ZodNumber>>;
        contentAlignment: z.ZodNullable<z.ZodOptional<z.ZodEnum<["top", "middle", "bottom"]>>>;
    }, "strip", z.ZodTypeAny, {
        columns: [{
            childrenIds: string[];
        }, {
            childrenIds: string[];
        }, {
            childrenIds: string[];
        }];
        fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
        columnsCount?: 2 | 3 | null | undefined;
        columnsGap?: number | null | undefined;
        contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
    }, {
        columns: [{
            childrenIds: string[];
        }, {
            childrenIds: string[];
        }, {
            childrenIds: string[];
        }];
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
        columns: [{
            childrenIds: string[];
        }, {
            childrenIds: string[];
        }, {
            childrenIds: string[];
        }];
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
        columns: [{
            childrenIds: string[];
        }, {
            childrenIds: string[];
        }, {
            childrenIds: string[];
        }];
        fixedWidths?: [number | null | undefined, number | null | undefined, number | null | undefined] | null | undefined;
        columnsCount?: 2 | 3 | null | undefined;
        columnsGap?: number | null | undefined;
        contentAlignment?: "top" | "bottom" | "middle" | null | undefined;
    } | null | undefined;
}>;
export type ColumnsContainerProps = z.infer<typeof ColumnsContainerPropsSchema>;
export default ColumnsContainerPropsSchema;
//# sourceMappingURL=ColumnsContainerPropsSchema.d.ts.map