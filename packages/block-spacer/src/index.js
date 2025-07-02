import React from 'react';
import { z } from 'zod';
export const SpacerPropsSchema = z.object({
    props: z
        .object({
        height: z.number().gte(0).optional().nullish(),
    })
        .optional()
        .nullable(),
});
export const SpacerPropsDefaults = {
    height: 16,
};
export function Spacer({ props }) {
    var _c;
    const style = {
        height: (_c = props === null || props === void 0 ? void 0 : props.height) !== null && _c !== void 0 ? _c : SpacerPropsDefaults.height,
    };
    return React.createElement("div", { style: style });
}
//# sourceMappingURL=index.js.map