import { z } from 'zod';
declare const ContainerPropsSchema: z.ZodObject<{
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
    props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        childrenIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, "strip", z.ZodTypeAny, {
        childrenIds?: string[] | null | undefined;
    }, {
        childrenIds?: string[] | null | undefined;
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
    props?: {
        childrenIds?: string[] | null | undefined;
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
    props?: {
        childrenIds?: string[] | null | undefined;
    } | null | undefined;
}>;
export default ContainerPropsSchema;
export type ContainerProps = z.infer<typeof ContainerPropsSchema>;
//# sourceMappingURL=ContainerPropsSchema.d.ts.map