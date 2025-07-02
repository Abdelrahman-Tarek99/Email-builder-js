import React from 'react';
type Props = {
    label: string | JSX.Element;
    children: JSX.Element | JSX.Element[];
    defaultValue: string;
    onChange: (v: string) => void;
};
export default function RadioGroupInput({ label, children, defaultValue, onChange }: Props): React.JSX.Element;
export {};
//# sourceMappingURL=RadioGroupInput.d.ts.map