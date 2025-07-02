import React from 'react';
import { ReaderBlock } from '../../Reader/core';
function getFontFamily(fontFamily) {
    const f = fontFamily !== null && fontFamily !== void 0 ? fontFamily : 'MODERN_SANS';
    switch (f) {
        case 'MODERN_SANS':
            return '"Helvetica Neue", "Arial Nova", "Nimbus Sans", Arial, sans-serif';
        case 'BOOK_SANS':
            return 'Optima, Candara, "Noto Sans", source-sans-pro, sans-serif';
        case 'ORGANIC_SANS':
            return 'Seravek, "Gill Sans Nova", Ubuntu, Calibri, "DejaVu Sans", source-sans-pro, sans-serif';
        case 'GEOMETRIC_SANS':
            return 'Avenir, "Avenir Next LT Pro", Montserrat, Corbel, "URW Gothic", source-sans-pro, sans-serif';
        case 'HEAVY_SANS':
            return 'Bahnschrift, "DIN Alternate", "Franklin Gothic Medium", "Nimbus Sans Narrow", sans-serif-condensed, sans-serif';
        case 'ROUNDED_SANS':
            return 'ui-rounded, "Hiragino Maru Gothic ProN", Quicksand, Comfortaa, Manjari, "Arial Rounded MT Bold", Calibri, source-sans-pro, sans-serif';
        case 'MODERN_SERIF':
            return 'Charter, "Bitstream Charter", "Sitka Text", Cambria, serif';
        case 'BOOK_SERIF':
            return '"Iowan Old Style", "Palatino Linotype", "URW Palladio L", P052, serif';
        case 'MONOSPACE':
            return '"Nimbus Mono PS", "Courier New", "Cutive Mono", monospace';
    }
}
function getBorder({ borderColor }) {
    if (!borderColor) {
        return undefined;
    }
    return `1px solid ${borderColor}`;
}
export default function EmailLayoutReader(props) {
    var _c, _d, _10, _11, _12;
    const childrenIds = (_c = props.childrenIds) !== null && _c !== void 0 ? _c : [];
    return (React.createElement("div", { style: {
            backgroundColor: (_d = props.backdropColor) !== null && _d !== void 0 ? _d : '#F5F5F5',
            color: (_10 = props.textColor) !== null && _10 !== void 0 ? _10 : '#262626',
            fontFamily: getFontFamily(props.fontFamily),
            fontSize: '16px',
            fontWeight: '400',
            letterSpacing: '0.15008px',
            lineHeight: '1.5',
            margin: '0',
            padding: '32px 0',
            minHeight: '100%',
            width: '100%',
        } },
        React.createElement("table", { align: "center", width: "100%", style: {
                margin: '0 auto',
                maxWidth: '600px',
                backgroundColor: (_11 = props.canvasColor) !== null && _11 !== void 0 ? _11 : '#FFFFFF',
                borderRadius: (_12 = props.borderRadius) !== null && _12 !== void 0 ? _12 : undefined,
                border: getBorder(props),
            }, role: "presentation", cellSpacing: "0", cellPadding: "0", border: 0 },
            React.createElement("tbody", null,
                React.createElement("tr", { style: { width: '100%' } },
                    React.createElement("td", null, childrenIds.map((childId) => (React.createElement(ReaderBlock, { key: childId, id: childId })))))))));
}
//# sourceMappingURL=EmailLayoutReader.js.map