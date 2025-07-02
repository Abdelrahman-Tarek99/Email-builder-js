import React from 'react';
import ReactDOM from 'react-dom/client';
import { CssBaseline, ThemeProvider } from '@mui/material';
import App from './App';
import theme from './theme';
ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(React.StrictMode, null,
    React.createElement(ThemeProvider, { theme: theme },
        React.createElement(CssBaseline, null),
        React.createElement(App, null))));
//# sourceMappingURL=main.js.map