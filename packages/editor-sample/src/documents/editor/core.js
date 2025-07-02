import React from 'react';
import { z } from 'zod';
import { Avatar, AvatarPropsSchema } from '@usewaypoint/block-avatar';
import { Button, ButtonPropsSchema } from '@usewaypoint/block-button';
import { Divider, DividerPropsSchema } from '@usewaypoint/block-divider';
import { Heading, HeadingPropsSchema } from '@usewaypoint/block-heading';
import { Html, HtmlPropsSchema } from '@usewaypoint/block-html';
import { Image, ImagePropsSchema } from '@usewaypoint/block-image';
import { Spacer, SpacerPropsSchema } from '@usewaypoint/block-spacer';
import { Text, TextPropsSchema } from '@usewaypoint/block-text';
import { buildBlockComponent, buildBlockConfigurationDictionary, buildBlockConfigurationSchema, } from '@usewaypoint/document-core';
import ColumnsContainerEditor from '../blocks/ColumnsContainer/ColumnsContainerEditor';
import ColumnsContainerPropsSchema from '../blocks/ColumnsContainer/ColumnsContainerPropsSchema';
import ContainerEditor from '../blocks/Container/ContainerEditor';
import ContainerPropsSchema from '../blocks/Container/ContainerPropsSchema';
import EmailLayoutEditor from '../blocks/EmailLayout/EmailLayoutEditor';
import EmailLayoutPropsSchema from '../blocks/EmailLayout/EmailLayoutPropsSchema';
import EditorBlockWrapper from '../blocks/helpers/block-wrappers/EditorBlockWrapper';
const EDITOR_DICTIONARY = buildBlockConfigurationDictionary({
    Avatar: {
        schema: AvatarPropsSchema,
        Component: (props) => (React.createElement(EditorBlockWrapper, null,
            React.createElement(Avatar, Object.assign({}, props)))),
    },
    Button: {
        schema: ButtonPropsSchema,
        Component: (props) => (React.createElement(EditorBlockWrapper, null,
            React.createElement(Button, Object.assign({}, props)))),
    },
    Container: {
        schema: ContainerPropsSchema,
        Component: (props) => (React.createElement(EditorBlockWrapper, null,
            React.createElement(ContainerEditor, Object.assign({}, props)))),
    },
    ColumnsContainer: {
        schema: ColumnsContainerPropsSchema,
        Component: (props) => (React.createElement(EditorBlockWrapper, null,
            React.createElement(ColumnsContainerEditor, Object.assign({}, props)))),
    },
    Heading: {
        schema: HeadingPropsSchema,
        Component: (props) => (React.createElement(EditorBlockWrapper, null,
            React.createElement(Heading, Object.assign({}, props)))),
    },
    Html: {
        schema: HtmlPropsSchema,
        Component: (props) => (React.createElement(EditorBlockWrapper, null,
            React.createElement(Html, Object.assign({}, props)))),
    },
    Image: {
        schema: ImagePropsSchema,
        Component: (data) => {
            var _c, _d;
            const props = Object.assign(Object.assign({}, data), { props: Object.assign(Object.assign({}, data.props), { url: (_d = (_c = data.props) === null || _c === void 0 ? void 0 : _c.url) !== null && _d !== void 0 ? _d : 'https://placehold.co/600x400@2x/F8F8F8/CCC?text=Your%20image' }) });
            return (React.createElement(EditorBlockWrapper, null,
                React.createElement(Image, Object.assign({}, props))));
        },
    },
    Text: {
        schema: TextPropsSchema,
        Component: (props) => (React.createElement(EditorBlockWrapper, null,
            React.createElement(Text, Object.assign({}, props)))),
    },
    EmailLayout: {
        schema: EmailLayoutPropsSchema,
        Component: (p) => React.createElement(EmailLayoutEditor, Object.assign({}, p)),
    },
    Spacer: {
        schema: SpacerPropsSchema,
        Component: (props) => (React.createElement(EditorBlockWrapper, null,
            React.createElement(Spacer, Object.assign({}, props)))),
    },
    Divider: {
        schema: DividerPropsSchema,
        Component: (props) => (React.createElement(EditorBlockWrapper, null,
            React.createElement(Divider, Object.assign({}, props)))),
    },
});
export const EditorBlock = buildBlockComponent(EDITOR_DICTIONARY);
export const EditorBlockSchema = buildBlockConfigurationSchema(EDITOR_DICTIONARY);
export const EditorConfigurationSchema = z.record(z.string(), EditorBlockSchema);
//# sourceMappingURL=core.js.map