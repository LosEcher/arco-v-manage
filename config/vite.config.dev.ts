import fs from 'fs';
import { resolve } from 'path';
import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    server: {
      open: true,
      fs: {
        strict: true,
      },
      https: {
        key: fs.readFileSync(resolve(__dirname, '../cert/localhost+2-key.pem')),
        cert: fs.readFileSync(resolve(__dirname, '../cert/localhost+2.pem')),
      },
      proxy: {
        '/api': {
          target: 'https://localhost:3030',
          // ws: true,
          changeOrigin: true,
          secure: false,
          // rewrite: path => path.replace('/api', ''),
        },
      },
    },
    plugins: [
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
  },
  baseConig
);
