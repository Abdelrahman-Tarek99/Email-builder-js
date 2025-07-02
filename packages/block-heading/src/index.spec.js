import React from 'react';
import { render } from '@testing-library/react';
import { Heading } from '.';
describe('Heading', () => {
    it('renders with default values', () => {
        expect(render(React.createElement(Heading, null)).asFragment()).toMatchSnapshot();
    });
    it('renders with style', () => {
        const style = {
            backgroundColor: '#444333',
            color: '#101010',
            fontFamily: 'HEAVY_SANS',
            fontWeight: 'normal',
            padding: {
                top: 15,
                bottom: 10,
                left: 24,
                right: 8,
            },
            textAlign: 'center',
        };
        const props = {
            text: 'Hello world!',
            level: 'h1',
        };
        expect(render(React.createElement(Heading, { style: style, props: props })).asFragment()).toMatchSnapshot();
    });
});
//# sourceMappingURL=index.spec.js.map