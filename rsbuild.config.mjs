import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  base: '/App/',
  plugins: [pluginVue()],
});
