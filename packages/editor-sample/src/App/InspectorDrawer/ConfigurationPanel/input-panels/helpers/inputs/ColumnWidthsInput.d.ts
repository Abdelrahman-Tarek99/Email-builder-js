import React from 'react';
export declare const DEFAULT_2_COLUMNS: [number];
export declare const DEFAULT_3_COLUMNS: [number, number];
type FixedWidths = [
    number | null | undefined,
    number | null | undefined,
    number | null | undefined
];
type ColumnsLayoutInputProps = {
    defaultValue: FixedWidths | null | undefined;
    onChange: (v: FixedWidths | null | undefined) => void;
};
export default function ColumnWidthsInput({ defaultValue, onChange }: ColumnsLayoutInputProps): React.JSX.Element;
export {};
//# sourceMappingURL=ColumnWidthsInput.d.ts.map