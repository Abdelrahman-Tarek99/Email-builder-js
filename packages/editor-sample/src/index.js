import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Export the main App component
export { default as EmailBuilder } from './App';
// Export the main function to mount the editor
export function mountEmailBuilder(container) {
    const root = ReactDOM.createRoot(container);
    root.render(React.createElement(React.StrictMode, null,
        React.createElement(App, null)));
    return root;
}
// Default export for the entire app
export default App;
//# sourceMappingURL=index.js.map