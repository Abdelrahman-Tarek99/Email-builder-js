import { z } from 'zod';
import { ColumnsContainerPropsSchema as BaseColumnsContainerPropsSchema } from '@usewaypoint/block-columns-container';
const BasePropsShape = BaseColumnsContainerPropsSchema.shape.props.unwrap().unwrap().shape;
const ColumnsContainerPropsSchema = z.object({
    style: BaseColumnsContainerPropsSchema.shape.style,
    props: z
        .object(Object.assign(Object.assign({}, BasePropsShape), { columns: z.tuple([
            z.object({ childrenIds: z.array(z.string()) }),
            z.object({ childrenIds: z.array(z.string()) }),
            z.object({ childrenIds: z.array(z.string()) }),
        ]) }))
        .optional()
        .nullable(),
});
export default ColumnsContainerPropsSchema;
//# sourceMappingURL=ColumnsContainerPropsSchema.js.map