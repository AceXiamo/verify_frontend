import type { App, AppContext } from 'vue'

export let appContext: AppContext // eslint-disable-line import/no-mutable-exports

export default {
  install(app: App) {
    appContext = app._context
  },
}
