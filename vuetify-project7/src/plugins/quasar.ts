/**
 * plugins/quasar.ts
 *
 * Quasar Framework Configuration
 * https://quasar.dev/
 */

import type { App } from 'vue'
import { Quasar, Dialog, Notify, Loading, Dark, LocalStorage, SessionStorage, useQuasar } from 'quasar'

// Import Quasar CSS
import 'quasar/dist/quasar.css'

// Import Quasar icon libraries
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
import '@quasar/extras/material-icons-outlined/material-icons-outlined.css'

export default function useQuasarPlugin(app: App) {
  app.use(Quasar, {
    config: {
      brand: {
        primary: '#1976D2',
        secondary: '#26A69A',
        accent: '#9C27B0',
        dark: '#1D1D1D',
        dark_page: '#121212',
        positive: '#21BA45',
        negative: '#DB2828',
        info: '#31CCEC',
        warning: '#F2711C',
      },
      dark: false,
      notify: {
        position: 'top-right',
        timeout: 2500,
        actions: [{ label: 'Cerrar', color: 'white' }],
      },
      loadingBar: {
        color: 'primary',
        size: '4px',
        position: 'top',
      },
    },
    plugins: {
      Dialog,
      Notify,
      Loading,
      Dark,
      LocalStorage,
      SessionStorage,
    },
  })
}

export { Dialog, Notify, Loading, Dark, useQuasar, LocalStorage, SessionStorage }

