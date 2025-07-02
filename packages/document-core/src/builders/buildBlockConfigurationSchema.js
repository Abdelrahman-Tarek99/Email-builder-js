import { z } from 'zod';
/**
 *
 * @param blocks Main DocumentBlocksDictionary
 * @returns zod schema that can parse arbitary objects into a single BlockConfiguration
 */
export default function buildBlockConfigurationSchema(blocks) {
    const blockObjects = Object.keys(blocks).map((type) => z.object({
        type: z.literal(type),
        data: blocks[type].schema,
    }));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return z.discriminatedUnion('type', blockObjects).transform((v) => v);
}
//# sourceMappingURL=buildBlockConfigurationSchema.js.map