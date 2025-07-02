var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import hljs from 'highlight.js';
import jsonHighlighter from 'highlight.js/lib/languages/json';
import xmlHighlighter from 'highlight.js/lib/languages/xml';
import prettierPluginBabel from 'prettier/plugins/babel';
import prettierPluginEstree from 'prettier/plugins/estree';
import prettierPluginHtml from 'prettier/plugins/html';
import { format } from 'prettier/standalone';
hljs.registerLanguage('json', jsonHighlighter);
hljs.registerLanguage('html', xmlHighlighter);
export function html(value) {
    return __awaiter(this, void 0, void 0, function* () {
        const prettyValue = yield format(value, {
            parser: 'html',
            plugins: [prettierPluginHtml],
        });
        return hljs.highlight(prettyValue, { language: 'html' }).value;
    });
}
export function json(value) {
    return __awaiter(this, void 0, void 0, function* () {
        const prettyValue = yield format(value, {
            parser: 'json',
            printWidth: 0,
            trailingComma: 'all',
            plugins: [prettierPluginBabel, prettierPluginEstree],
        });
        return hljs.highlight(prettyValue, { language: 'javascript' }).value;
    });
}
//# sourceMappingURL=highlighters.js.map