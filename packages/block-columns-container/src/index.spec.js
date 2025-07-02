import React from 'react';
import { render } from '@testing-library/react';
import { ColumnsContainer } from '.';
describe('block-columns-container', () => {
    it('renders with default values', () => {
        expect(render(React.createElement(ColumnsContainer, null)).asFragment()).toMatchSnapshot();
    });
    describe('columnsCount 2', () => {
        it('renders column children', () => {
            const columns = [React.createElement(React.Fragment, null, "bread"), React.createElement(React.Fragment, null, "tomato"), React.createElement(React.Fragment, null, "lettuce")];
            expect(render(React.createElement(ColumnsContainer, { props: { columnsCount: 2 }, columns: columns })).asFragment()).toMatchSnapshot();
        });
        it('uses padding correctly', () => {
            const columns = [React.createElement(React.Fragment, null, "bread"), React.createElement(React.Fragment, null, "tomato"), React.createElement(React.Fragment, null, "lettuce")];
            expect(render(React.createElement(ColumnsContainer, { props: {
                    columnsGap: 12,
                    columnsCount: 2,
                }, columns: columns })).asFragment()).toMatchSnapshot();
        });
    });
    describe('columnsCount 3', () => {
        it('renders column children', () => {
            const columns = [React.createElement(React.Fragment, null, "bread"), React.createElement(React.Fragment, null, "tomato"), React.createElement(React.Fragment, null, "lettuce")];
            expect(render(React.createElement(ColumnsContainer, { props: { columnsCount: 3 }, columns: columns })).asFragment()).toMatchSnapshot();
        });
        it('uses padding correctly', () => {
            const columns = [React.createElement(React.Fragment, null, "bread"), React.createElement(React.Fragment, null, "tomato"), React.createElement(React.Fragment, null, "lettuce")];
            expect(render(React.createElement(ColumnsContainer, { props: {
                    columnsGap: 12,
                    columnsCount: 3,
                }, columns: columns })).asFragment()).toMatchSnapshot();
        });
    });
});
//# sourceMappingURL=index.spec.js.map