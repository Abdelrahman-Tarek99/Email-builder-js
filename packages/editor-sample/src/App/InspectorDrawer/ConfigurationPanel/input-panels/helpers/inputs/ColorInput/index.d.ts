import React from 'react';
type Props = {
    label: string;
    onChange: (value: string) => void;
    defaultValue: string;
};
export default function ColorInput(props: Props): React.JSX.Element;
type NullableProps = {
    label: string;
    onChange: (value: null | string) => void;
    defaultValue: null | string;
};
export declare function NullableColorInput(props: NullableProps): React.JSX.Element;
export {};
//# sourceMappingURL=index.d.ts.map