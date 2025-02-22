import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Define o diretório de saída para o build
    target: 'es2015' // Define o target para ES2015
  }
});