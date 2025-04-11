import { defineConfig } from '@rsbuild/core';
import { pluginVue } from '@rsbuild/plugin-vue';

export default defineConfig({
  assetPrefix: '/archery-timer-rs/',
  base: "/archery-timer-rs/",
  plugins: [pluginVue()],
});
