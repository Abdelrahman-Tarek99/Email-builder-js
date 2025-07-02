import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),  // ← use your index.tsx
      name: 'EditorSample',
      formats: ['es','cjs'],
      fileName: fmt => fmt === 'es' ? 'index.mjs' : 'index.js'
    },
    rollupOptions: {
      external: ['react','react-dom'],
      output: {
        globals: { react: 'React', 'react-dom': 'ReactDOM' }
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
  }
});
