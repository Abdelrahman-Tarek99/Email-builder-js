import React, { createContext, useContext } from 'react';
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
import ColumnsContainerPropsSchema from '../blocks/ColumnsContainer/ColumnsContainerPropsSchema';
import ColumnsContainerReader from '../blocks/ColumnsContainer/ColumnsContainerReader';
import { ContainerPropsSchema } from '../blocks/Container/ContainerPropsSchema';
import ContainerReader from '../blocks/Container/ContainerReader';
import { EmailLayoutPropsSchema } from '../blocks/EmailLayout/EmailLayoutPropsSchema';
import EmailLayoutReader from '../blocks/EmailLayout/EmailLayoutReader';
const ReaderContext = createContext({});
function useReaderDocument() {
    return useContext(ReaderContext);
}
const READER_DICTIONARY = buildBlockConfigurationDictionary({
    ColumnsContainer: {
        schema: ColumnsContainerPropsSchema,
        Component: ColumnsContainerReader,
    },
    Container: {
        schema: ContainerPropsSchema,
        Component: ContainerReader,
    },
    EmailLayout: {
        schema: EmailLayoutPropsSchema,
        Component: EmailLayoutReader,
    },
    //
    Avatar: {
        schema: AvatarPropsSchema,
        Component: Avatar,
    },
    Button: {
        schema: ButtonPropsSchema,
        Component: Button,
    },
    Divider: {
        schema: DividerPropsSchema,
        Component: Divider,
    },
    Heading: {
        schema: HeadingPropsSchema,
        Component: Heading,
    },
    Html: {
        schema: HtmlPropsSchema,
        Component: Html,
    },
    Image: {
        schema: ImagePropsSchema,
        Component: Image,
    },
    Spacer: {
        schema: SpacerPropsSchema,
        Component: Spacer,
    },
    Text: {
        schema: TextPropsSchema,
        Component: Text,
    },
});
export const ReaderBlockSchema = buildBlockConfigurationSchema(READER_DICTIONARY);
export const ReaderDocumentSchema = z.record(z.string(), ReaderBlockSchema);
const BaseReaderBlock = buildBlockComponent(READER_DICTIONARY);
export function ReaderBlock({ id }) {
    const document = useReaderDocument();
    return React.createElement(BaseReaderBlock, Object.assign({}, document[id]));
}
export default function Reader({ document, rootBlockId }) {
    return (React.createElement(ReaderContext.Provider, { value: document },
        React.createElement(ReaderBlock, { id: rootBlockId })));
}
//# sourceMappingURL=core.js.map