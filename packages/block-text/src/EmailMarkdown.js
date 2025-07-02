var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
import insane from 'insane';
import { marked, Renderer } from 'marked';
import React, { useMemo } from 'react';
const ALLOWED_TAGS = [
    'a',
    'article',
    'b',
    'blockquote',
    'br',
    'caption',
    'code',
    'del',
    'details',
    'div',
    'em',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'hr',
    'i',
    'img',
    'ins',
    'kbd',
    'li',
    'main',
    'ol',
    'p',
    'pre',
    'section',
    'span',
    'strong',
    'sub',
    'summary',
    'sup',
    'table',
    'tbody',
    'td',
    'th',
    'thead',
    'tr',
    'u',
    'ul',
];
const GENERIC_ALLOWED_ATTRIBUTES = ['style', 'title'];
function sanitizer(html) {
    return insane(html, {
        allowedTags: ALLOWED_TAGS,
        allowedAttributes: Object.assign(Object.assign({}, ALLOWED_TAGS.reduce((res, tag) => {
            res[tag] = [...GENERIC_ALLOWED_ATTRIBUTES];
            return res;
        }, {})), { img: ['src', 'srcset', 'alt', 'width', 'height', ...GENERIC_ALLOWED_ATTRIBUTES], table: ['width', ...GENERIC_ALLOWED_ATTRIBUTES], td: ['align', 'width', ...GENERIC_ALLOWED_ATTRIBUTES], th: ['align', 'width', ...GENERIC_ALLOWED_ATTRIBUTES], a: ['href', 'target', ...GENERIC_ALLOWED_ATTRIBUTES], ol: ['start', ...GENERIC_ALLOWED_ATTRIBUTES], ul: ['start', ...GENERIC_ALLOWED_ATTRIBUTES] }),
    });
}
class CustomRenderer extends Renderer {
    table(header, body) {
        return `<table width="100%">
<thead>
${header}</thead>
<tbody>
${body}</tbody>
</table>`;
    }
    link(href, title, text) {
        if (!title) {
            return `<a href="${href}" target="_blank">${text}</a>`;
        }
        return `<a href="${href}" title="${title}" target="_blank">${text}</a>`;
    }
}
function renderMarkdownString(str) {
    const html = marked.parse(str, {
        async: false,
        breaks: true,
        gfm: true,
        pedantic: false,
        silent: false,
        renderer: new CustomRenderer(),
    });
    if (typeof html !== 'string') {
        throw new Error('marked.parse did not return a string');
    }
    return sanitizer(html);
}
export default function EmailMarkdown(_c) {
    var { markdown } = _c, props = __rest(_c, ["markdown"]);
    const data = useMemo(() => renderMarkdownString(markdown), [markdown]);
    return React.createElement("div", Object.assign({}, props, { dangerouslySetInnerHTML: { __html: data } }));
}
//# sourceMappingURL=EmailMarkdown.js.map