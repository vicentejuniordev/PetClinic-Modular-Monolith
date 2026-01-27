import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [vue(), tsconfigPaths()], // Adiciona o plugin para o vite interpretar tanto o vue quanto os caminhos relativos.
  server: {
    host: '0.0.0.0',
    port: 3000,
  }, // Configura o servidor de desenvolvimeto, adicionando qual o host e a port que ele vai rodar.
});
