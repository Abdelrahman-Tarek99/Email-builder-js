import React from 'react';
type SliderInputProps = {
    label: string;
    iconLabel: JSX.Element;
    step?: number;
    marks?: boolean;
    units: string;
    min?: number;
    max?: number;
    defaultValue: number;
    onChange: (v: number) => void;
};
export default function SliderInput({ label, defaultValue, onChange, ...props }: SliderInputProps): React.JSX.Element;
export {};
//# sourceMappingURL=SliderInput.d.ts.map