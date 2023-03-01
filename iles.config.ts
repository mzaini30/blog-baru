import { defineConfig } from 'iles'
import { stylifyVite } from '@stylify/unplugin';

const stylifyPlugin = stylifyVite({
    bundles: [{ files: ['./*'], outputFile: './src/stylify.css' }],
    // Optional
    // Compiler config info https://stylifycss.com/docs/stylify/compiler#configuration
    compiler: {
        // https://stylifycss.com/docs/stylify/compiler#variables
        variables: {},
        // https://stylifycss.com/docs/stylify/compiler#macros
        macros: {},
        // https://stylifycss.com/docs/stylify/compiler#components
        components: {},
        // ...
    }
});

export default defineConfig({
  svelte: true,
  vite: {
    optimizeDeps: {
      include: ['svelte']
    },
    plugins: [stylifyPlugin],
  }
})
