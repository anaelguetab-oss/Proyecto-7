/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Types
import type { App } from 'vue'

// Plugins
import { createPinia } from 'pinia'
import vuetify from './vuetify'
import useQuasarPlugin from './quasar'

export function registerPlugins (app: App) {
  app.use(createPinia())
  app.use(vuetify)
  useQuasarPlugin(app)
}
