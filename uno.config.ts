// uno.config.ts
import {
  defineConfig,
  presetUno,
  presetAttributify,
  presetIcons
} from "unocss";

export default defineConfig({
  // ...UnoCSS options
  presets: [presetUno(), presetAttributify(), presetIcons()]
});
