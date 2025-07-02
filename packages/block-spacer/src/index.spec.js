import React from 'react';
import { render } from '@testing-library/react';
import { Spacer } from '.';
describe('Spacer', () => {
    it('renders with default values', () => {
        expect(render(React.createElement(Spacer, null)).asFragment()).toMatchSnapshot();
    });
    it('renders with props', () => {
        expect(render(React.createElement(Spacer, { props: { height: 10 } })).asFragment()).toMatchSnapshot();
    });
});
//# sourceMappingURL=index.spec.js.map