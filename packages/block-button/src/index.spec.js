import React from 'react';
import { render } from '@testing-library/react';
import { Button } from '.';
describe('block-button', () => {
    it('renders with default values', () => {
        expect(render(React.createElement(Button, null)).asFragment()).toMatchSnapshot();
    });
});
//# sourceMappingURL=index.spec.js.map