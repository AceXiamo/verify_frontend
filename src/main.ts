import { ViteSSG } from 'vite-ssg'
import { setupLayouts } from 'virtual:generated-layouts'
import { MotionPlugin } from '@vueuse/motion'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { routes } from 'vue-router/auto-routes'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { install as VueMonacoEditorPlugin } from '@guolao/vue-monaco-editor'
import context from './utils/context'

import App from './App.vue'
import type { UserModule } from './types'

import './styles/main.css'
import 'uno.css'

library.add(fas)
library.add(far)
library.add(fab)

// https://github.com/antfu/vite-ssg
export const createApp = ViteSSG(
  App,
  {
    routes: setupLayouts(routes),
    base: import.meta.env.BASE_URL,
  },
  (ctx) => {
    ctx.app.use(ElementPlus, {
      locale: zhCn,
    })
    ctx.app.use(MotionPlugin)
    ctx.app.use(context)
    ctx.app.use(VueMonacoEditorPlugin, {
      paths: {
        // The recommended CDN config
        vs: 'https://cdn.jsdelivr.net/npm/monaco-editor@0.43.0/min/vs',
      },
    })
    ctx.app.component('FontAwesomeIcon', FontAwesomeIcon)
    // install all modules under `modules/`
    Object.values(import.meta.glob<{ install: UserModule }>('./modules/*.ts', { eager: true }))
      .forEach(i => i.install?.(ctx))
    // ctx.app.use(Previewer)
  },
)
