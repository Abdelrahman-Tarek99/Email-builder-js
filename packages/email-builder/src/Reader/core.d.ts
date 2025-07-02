import React from 'react';
import { z } from 'zod';
export declare const ReaderBlockSchema: any;
export type TReaderBlock = z.infer<typeof ReaderBlockSchema>;
export declare const ReaderDocumentSchema: z.ZodRecord<z.ZodString, any>;
export type TReaderDocument = Record<string, TReaderBlock>;
export type TReaderBlockProps = {
    id: string;
};
export declare function ReaderBlock({ id }: TReaderBlockProps): React.JSX.Element;
export type TReaderProps = {
    document: Record<string, z.infer<typeof ReaderBlockSchema>>;
    rootBlockId: string;
};
export default function Reader({ document, rootBlockId }: TReaderProps): React.JSX.Element;
//# sourceMappingURL=core.d.ts.map