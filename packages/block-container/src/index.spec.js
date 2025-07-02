import React from 'react';
import { render } from '@testing-library/react';
import { Container } from '.';
describe('block-container', () => {
    it('renders with default values', () => {
        expect(render(React.createElement(Container, null)).asFragment()).toMatchSnapshot();
    });
});
//# sourceMappingURL=index.spec.js.map