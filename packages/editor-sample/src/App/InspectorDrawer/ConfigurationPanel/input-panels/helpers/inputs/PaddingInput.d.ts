import React from 'react';
type TPaddingValue = {
    top: number;
    bottom: number;
    right: number;
    left: number;
};
type Props = {
    label: string;
    defaultValue: TPaddingValue | null;
    onChange: (value: TPaddingValue) => void;
};
export default function PaddingInput({ label, defaultValue, onChange }: Props): React.JSX.Element;
export {};
//# sourceMappingURL=PaddingInput.d.ts.map