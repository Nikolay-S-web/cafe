import { defineConfig } from 'vite';
import path from 'path';
import VitePluginSvgSpritemap from '@spiriit/vite-plugin-svg-spritemap';
import autoprefixer from 'autoprefixer';
import babelPlugin from 'vite-plugin-babel';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import legacy from '@vitejs/plugin-legacy';

export default defineConfig({
    base: './',
    root: path.resolve(__dirname, 'src'),
    build: {
        outDir: path.resolve(__dirname, 'dist'),
        emptyOutDir: true,
        assetsDir: 'assets',
        rollupOptions: {
            output: {
                assetFileNames: 'assets/[name].[hash][extname]',
            },
        },
    },
    plugins: [VitePluginSvgSpritemap('./images/icons/*.svg'), babelPlugin(), ViteMinifyPlugin({}), legacy()],
    css: {
        postcss: {
            plugins: [
                autoprefixer({
                    grid: 'autoplace',
                }),
            ],
        },
    },
});
