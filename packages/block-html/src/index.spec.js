import React from 'react';
import { render } from '@testing-library/react';
import { Html } from '.';
describe('block-html', () => {
    it('renders with default values', () => {
        expect(render(React.createElement(Html, null)).asFragment()).toMatchSnapshot();
    });
});
//# sourceMappingURL=index.spec.js.map