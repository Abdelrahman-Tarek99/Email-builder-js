import React from 'react';
import { renderToStaticMarkup as baseRenderToStaticMarkup } from 'react-dom/server';
import Reader from '../Reader/core';
export default function renderToStaticMarkup(document, { rootBlockId }) {
    return ('<!DOCTYPE html>' +
        baseRenderToStaticMarkup(React.createElement("html", null,
            React.createElement("body", null,
                React.createElement(Reader, { document: document, rootBlockId: rootBlockId })))));
}
//# sourceMappingURL=renderToStaticMarkup.js.map