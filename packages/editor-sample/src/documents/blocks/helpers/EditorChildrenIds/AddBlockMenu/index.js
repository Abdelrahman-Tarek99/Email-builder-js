import React, { useState } from 'react';
import BlocksMenu from './BlocksMenu';
import DividerButton from './DividerButton';
import PlaceholderButton from './PlaceholderButton';
export default function AddBlockButton({ onSelect, placeholder }) {
    const [menuAnchorEl, setMenuAnchorEl] = useState(null);
    const [buttonElement, setButtonElement] = useState(null);
    const handleButtonClick = () => {
        setMenuAnchorEl(buttonElement);
    };
    const renderButton = () => {
        if (placeholder) {
            return React.createElement(PlaceholderButton, { onClick: handleButtonClick });
        }
        else {
            return React.createElement(DividerButton, { buttonElement: buttonElement, onClick: handleButtonClick });
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { ref: setButtonElement, style: { position: 'relative' } }, renderButton()),
        React.createElement(BlocksMenu, { anchorEl: menuAnchorEl, setAnchorEl: setMenuAnchorEl, onSelect: onSelect })));
}
//# sourceMappingURL=index.js.map