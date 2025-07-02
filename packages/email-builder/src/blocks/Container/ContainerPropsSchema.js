import { z } from 'zod';
import { ContainerPropsSchema as BaseContainerPropsSchema } from '@usewaypoint/block-container';
export const ContainerPropsSchema = z.object({
    style: BaseContainerPropsSchema.shape.style,
    props: z
        .object({
        childrenIds: z.array(z.string()).optional().nullable(),
    })
        .optional()
        .nullable(),
});
//# sourceMappingURL=ContainerPropsSchema.js.map