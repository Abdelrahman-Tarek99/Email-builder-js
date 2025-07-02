import { z } from 'zod';
declare const ColumnsContainerPropsSchema: z.ZodObject<{
    style: any;
    props: z.ZodNullable<z.ZodOptional<z.ZodObject<any, "strip", z.ZodTypeAny, {
        [x: string]: any;
    }, {
        [x: string]: any;
    }>>>;
}, "strip", z.ZodTypeAny, {
    [x: string]: any;
    style?: any;
    props?: {
        [x: string]: any;
    } | null | undefined;
}, {
    [x: string]: any;
    style?: any;
    props?: {
        [x: string]: any;
    } | null | undefined;
}>;
export default ColumnsContainerPropsSchema;
export type ColumnsContainerProps = z.infer<typeof ColumnsContainerPropsSchema>;
//# sourceMappingURL=ColumnsContainerPropsSchema.d.ts.map