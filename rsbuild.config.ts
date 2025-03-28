import { defineConfig } from '@rsbuild/core';

export default defineConfig({
    tools: {
        htmlPlugin: false,
      },
      output: {
        distPath: {
            js: 'js',
        },
        copy:[
            {
                from: 'src/manifest.json',
                to: 'manifest.json',
            },
            {
                from: 'src/assets',
                to: 'assets',
            }
        ],  
        filename: {
            js: "background.js",
        },
        assetPrefix: './',
      },
     
});
