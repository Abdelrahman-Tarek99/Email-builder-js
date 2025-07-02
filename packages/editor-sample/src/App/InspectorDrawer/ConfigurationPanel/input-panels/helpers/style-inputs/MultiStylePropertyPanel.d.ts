import React from 'react';
import { TStyle } from '../../../../../../documents/blocks/helpers/TStyle';
type MultiStylePropertyPanelProps = {
    names: (keyof TStyle)[];
    value: TStyle | undefined | null;
    onChange: (style: TStyle) => void;
};
export default function MultiStylePropertyPanel({ names, value, onChange }: MultiStylePropertyPanelProps): React.JSX.Element;
export {};
//# sourceMappingURL=MultiStylePropertyPanel.d.ts.map