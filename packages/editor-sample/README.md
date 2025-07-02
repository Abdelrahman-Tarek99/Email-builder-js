# EmailBuilder.js Editor

A visual email template builder built with React and TypeScript.

## Installation as Local Package

### 1. Build the Package

```bash
cd packages/editor-sample
npm install
npm run build
npm pack
```

This will create a `.tgz` file like `email-builder-js-editor-1.0.0.tgz`.

### 2. Install in Your Project

```bash
# In your project directory
npm install /path/to/email-builder-js-editor-1.0.0.tgz
npm install react react-dom @mui/material @mui/icons-material insane marked
```

### 3. Use in Your React Project

```tsx
import React from 'react';
import { EmailBuilder, mountEmailBuilder } from 'email-builder-js-editor';

// Option 1: Use as React component
function MyApp() {
  return (
    <div>
      <h1>My Email Builder</h1>
      <EmailBuilder />
    </div>
  );
}

// Option 2: Mount to a specific container
function MyApp() {
  const containerRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (containerRef.current) {
      mountEmailBuilder(containerRef.current);
    }
  }, []);

  return (
    <div>
      <h1>My Email Builder</h1>
      <div ref={containerRef} />
    </div>
  );
}
```

## Development

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run preview # Preview production build
```

## Features

- Visual email template builder
- Drag and drop interface
- Real-time preview
- Export to HTML/JSON
- Test email functionality
- Variable support (merge tags)
- Image upload with base64 support

## Dependencies

This package requires the following peer dependencies:
- React 18+
- React DOM 18+
- Material-UI components

## License

MIT
