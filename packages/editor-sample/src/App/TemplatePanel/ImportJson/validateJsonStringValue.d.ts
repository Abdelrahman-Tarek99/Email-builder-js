import { TEditorConfiguration } from '../../../documents/editor/core';
type TResult = {
    error: string;
    data?: undefined;
} | {
    data: TEditorConfiguration;
    error?: undefined;
};
export default function validateTextAreaValue(value: string): TResult;
export {};
//# sourceMappingURL=validateJsonStringValue.d.ts.map