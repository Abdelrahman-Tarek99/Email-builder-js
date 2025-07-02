var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { useState } from 'react';
import { IosShareOutlined } from '@mui/icons-material';
import { IconButton, Snackbar, Tooltip } from '@mui/material';
import { useDocument } from '../../documents/editor/EditorContext';
export default function ShareButton() {
    const document = useDocument();
    const [message, setMessage] = useState(null);
    const onClick = () => __awaiter(this, void 0, void 0, function* () {
        const c = encodeURIComponent(JSON.stringify(document));
        location.hash = `#code/${btoa(c)}`;
        setMessage('The URL was updated. Copy it to share your current template.');
    });
    const onClose = () => {
        setMessage(null);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(IconButton, { onClick: onClick },
            React.createElement(Tooltip, { title: "Share current template" },
                React.createElement(IosShareOutlined, { fontSize: "small" }))),
        React.createElement(Snackbar, { anchorOrigin: { vertical: 'top', horizontal: 'center' }, open: message !== null, onClose: onClose, message: message })));
}
//# sourceMappingURL=ShareButton.js.map