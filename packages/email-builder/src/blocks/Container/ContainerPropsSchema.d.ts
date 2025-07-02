import { z } from 'zod';
export declare const ContainerPropsSchema: z.ZodObject<{
    style: any;
    props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        childrenIds: z.ZodNullable<z.ZodOptional<z.ZodArray<z.ZodString, "many">>>;
    }, "strip", z.ZodTypeAny, {
        childrenIds?: string[] | null | undefined;
    }, {
        childrenIds?: string[] | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    [x: string]: any;
    style?: any;
    props?: {
        childrenIds?: string[] | null | undefined;
    } | null | undefined;
}, {
    [x: string]: any;
    style?: any;
    props?: {
        childrenIds?: string[] | null | undefined;
    } | null | undefined;
}>;
export type ContainerProps = z.infer<typeof ContainerPropsSchema>;
//# sourceMappingURL=ContainerPropsSchema.d.ts.map