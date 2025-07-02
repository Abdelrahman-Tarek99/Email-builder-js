import React from 'react';
import { z } from 'zod';
export declare const SpacerPropsSchema: z.ZodObject<{
    props: z.ZodNullable<z.ZodOptional<z.ZodObject<{
        height: z.ZodOptional<z.ZodNullable<z.ZodOptional<z.ZodNumber>>>;
    }, "strip", z.ZodTypeAny, {
        height?: number | null | undefined;
    }, {
        height?: number | null | undefined;
    }>>>;
}, "strip", z.ZodTypeAny, {
    props?: {
        height?: number | null | undefined;
    } | null | undefined;
}, {
    props?: {
        height?: number | null | undefined;
    } | null | undefined;
}>;
export type SpacerProps = z.infer<typeof SpacerPropsSchema>;
export declare const SpacerPropsDefaults: {
    height: number;
};
export declare function Spacer({ props }: SpacerProps): React.JSX.Element;
//# sourceMappingURL=index.d.ts.map