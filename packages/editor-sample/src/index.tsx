import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';

// Export the main App component
export { default as EmailBuilder } from './App';

// Export the main function to mount the editor
export function mountEmailBuilder(container: HTMLElement) {
  const root = ReactDOM.createRoot(container);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  return root;
}

// Export types
export type { TEditorConfiguration } from './documents/editor/core';

// Default export for the entire app
export default App; 