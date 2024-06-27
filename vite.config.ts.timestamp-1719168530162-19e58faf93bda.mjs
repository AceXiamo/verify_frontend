// vite.config.ts
import path from "node:path";
import { defineConfig } from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/vite@5.2.11_@types+node@20.2.3_terser@5.17.6/node_modules/vite/dist/node/index.js";
import Vue from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.11_@types+node@20.2.3_terser@5.17.6__vue@3.4.27_typescript@5.4.5_/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import generateSitemap from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/vite-ssg-sitemap@0.6.1/node_modules/vite-ssg-sitemap/dist/index.js";
import Layouts from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/vite-plugin-vue-layouts@0.11.0_vite@5.2.11_@types+node@20.2.3_terser@5.17.6__vue-router@4.3.2_d5rcdi34c4kwyl2hwfhv5yuuey/node_modules/vite-plugin-vue-layouts/dist/index.mjs";
import Components from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/unplugin-vue-components@0.27.0_@babel+parser@7.24.5_rollup@4.17.2_vue@3.4.27_typescript@5.4.5_/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/unplugin-auto-import@0.17.6_@vueuse+core@10.9.0_vue@3.4.27_typescript@5.4.5___rollup@4.17.2/node_modules/unplugin-auto-import/dist/vite.js";
import Markdown from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/unplugin-vue-markdown@0.26.2_rollup@4.17.2_vite@5.2.11_@types+node@20.2.3_terser@5.17.6_/node_modules/unplugin-vue-markdown/dist/vite.js";
import VueMacros from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/unplugin-vue-macros@2.9.2_@vueuse+core@10.9.0_vue@3.4.27_typescript@5.4.5___esbuild@0.20.2_ro_hznlisjikf23cssmtmt7cywzyy/node_modules/unplugin-vue-macros/dist/vite.mjs";
import VueI18n from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/@intlify+unplugin-vue-i18n@4.0.0_rollup@4.17.2_vue-i18n@9.13.1_vue@3.4.27_typescript@5.4.5__/node_modules/@intlify/unplugin-vue-i18n/lib/vite.mjs";
import { VitePWA } from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/vite-plugin-pwa@0.20.0_vite@5.2.11_@types+node@20.2.3_terser@5.17.6__workbox-build@7.0.0_workbox-window@7.0.0/node_modules/vite-plugin-pwa/dist/index.js";
import VueDevTools from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/vite-plugin-vue-devtools@7.2.0_rollup@4.17.2_vite@5.2.11_@types+node@20.2.3_terser@5.17.6__vue@3.4.27_typescript@5.4.5_/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import LinkAttributes from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/markdown-it-link-attributes@4.0.1/node_modules/markdown-it-link-attributes/index.js";
import Unocss from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/unocss@0.60.2_postcss@8.4.38_rollup@4.17.2_vite@5.2.11_@types+node@20.2.3_terser@5.17.6_/node_modules/unocss/dist/vite.mjs";
import Shiki from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/@shikijs+markdown-it@1.6.0/node_modules/@shikijs/markdown-it/dist/index.mjs";
import WebfontDownload from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/vite-plugin-webfont-dl@3.9.4_vite@5.2.11_@types+node@20.2.3_terser@5.17.6_/node_modules/vite-plugin-webfont-dl/dist/index.mjs";
import VueRouter from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/unplugin-vue-router@0.8.6_rollup@4.17.2_vue-router@4.3.2_vue@3.4.27_typescript@5.4.5___vue@3.4.27_typescript@5.4.5_/node_modules/unplugin-vue-router/dist/vite.mjs";
import { VueRouterAutoImports } from "file:///Users/AceXiamo/work/0623/verify_frontend/node_modules/.pnpm/unplugin-vue-router@0.8.6_rollup@4.17.2_vue-router@4.3.2_vue@3.4.27_typescript@5.4.5___vue@3.4.27_typescript@5.4.5_/node_modules/unplugin-vue-router/dist/index.mjs";
var __vite_injected_original_dirname = "/Users/AceXiamo/work/0623/verify_frontend";
var vite_config_default = defineConfig({
  resolve: {
    alias: {
      "~/": `${path.resolve(__vite_injected_original_dirname, "src")}/`
    }
  },
  plugins: [
    VueMacros({
      plugins: {
        vue: Vue({
          include: [/\.vue$/, /\.md$/]
        })
      }
    }),
    // https://github.com/posva/unplugin-vue-router
    VueRouter({
      extensions: [".vue", ".md"],
      dts: "src/typed-router.d.ts"
    }),
    // https://github.com/JohnCampionJr/vite-plugin-vue-layouts
    Layouts(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-i18n",
        "@vueuse/head",
        "@vueuse/core",
        VueRouterAutoImports,
        {
          // add any other imports you were relying on
          "vue-router/auto": ["useLink"]
        }
      ],
      dts: "src/auto-imports.d.ts",
      dirs: [
        "src/composables",
        "src/stores"
      ],
      vueTemplate: true
    }),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      // allow auto load markdown components under `./src/components/`
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts"
    }),
    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    Unocss(),
    // https://github.com/unplugin/unplugin-vue-markdown
    // Don't need this? Try vitesse-lite: https://github.com/antfu/vitesse-lite
    Markdown({
      wrapperClasses: "prose prose-sm m-auto text-left",
      headEnabled: true,
      async markdownItSetup(md) {
        md.use(LinkAttributes, {
          matcher: (link) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener"
          }
        });
        md.use(await Shiki({
          defaultColor: false,
          themes: {
            light: "vitesse-light",
            dark: "vitesse-dark"
          }
        }));
      }
    }),
    // https://github.com/antfu/vite-plugin-pwa
    VitePWA({
      registerType: "autoUpdate",
      includeAssets: ["favicon.svg", "safari-pinned-tab.svg"],
      manifest: {
        name: "Vitesse",
        short_name: "Vitesse",
        theme_color: "#ffffff",
        icons: [
          {
            src: "/pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "any maskable"
          }
        ]
      }
    }),
    // https://github.com/intlify/bundle-tools/tree/main/packages/unplugin-vue-i18n
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__vite_injected_original_dirname, "locales/**")]
    }),
    // https://github.com/feat-agency/vite-plugin-webfont-dl
    WebfontDownload(),
    // https://github.com/webfansplz/vite-plugin-vue-devtools
    VueDevTools()
  ],
  // https://github.com/vitest-dev/vitest
  test: {
    include: ["test/**/*.test.ts"],
    environment: "jsdom"
  },
  // https://github.com/antfu/vite-ssg
  ssgOptions: {
    script: "async",
    formatting: "minify",
    crittersOptions: {
      reduceInlineStyles: false
    },
    onFinished() {
      generateSitemap();
    }
  },
  ssr: {
    // TODO: workaround until they support native ESM
    noExternal: ["workbox-window", /vue-i18n/]
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvQWNlWGlhbW8vd29yay8wNjIzL3ZlcmlmeV9mcm9udGVuZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL0FjZVhpYW1vL3dvcmsvMDYyMy92ZXJpZnlfZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL0FjZVhpYW1vL3dvcmsvMDYyMy92ZXJpZnlfZnJvbnRlbmQvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgcGF0aCBmcm9tICdub2RlOnBhdGgnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IFZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXG5pbXBvcnQgZ2VuZXJhdGVTaXRlbWFwIGZyb20gJ3ZpdGUtc3NnLXNpdGVtYXAnXG5pbXBvcnQgTGF5b3V0cyBmcm9tICd2aXRlLXBsdWdpbi12dWUtbGF5b3V0cydcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuaW1wb3J0IE1hcmtkb3duIGZyb20gJ3VucGx1Z2luLXZ1ZS1tYXJrZG93bi92aXRlJ1xuaW1wb3J0IFZ1ZU1hY3JvcyBmcm9tICd1bnBsdWdpbi12dWUtbWFjcm9zL3ZpdGUnXG5pbXBvcnQgVnVlSTE4biBmcm9tICdAaW50bGlmeS91bnBsdWdpbi12dWUtaTE4bi92aXRlJ1xuaW1wb3J0IHsgVml0ZVBXQSB9IGZyb20gJ3ZpdGUtcGx1Z2luLXB3YSdcbmltcG9ydCBWdWVEZXZUb29scyBmcm9tICd2aXRlLXBsdWdpbi12dWUtZGV2dG9vbHMnXG5pbXBvcnQgTGlua0F0dHJpYnV0ZXMgZnJvbSAnbWFya2Rvd24taXQtbGluay1hdHRyaWJ1dGVzJ1xuaW1wb3J0IFVub2NzcyBmcm9tICd1bm9jc3Mvdml0ZSdcbmltcG9ydCBTaGlraSBmcm9tICdAc2hpa2lqcy9tYXJrZG93bi1pdCdcbmltcG9ydCBXZWJmb250RG93bmxvYWQgZnJvbSAndml0ZS1wbHVnaW4td2ViZm9udC1kbCdcbmltcG9ydCBWdWVSb3V0ZXIgZnJvbSAndW5wbHVnaW4tdnVlLXJvdXRlci92aXRlJ1xuaW1wb3J0IHsgVnVlUm91dGVyQXV0b0ltcG9ydHMgfSBmcm9tICd1bnBsdWdpbi12dWUtcm91dGVyJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICd+Lyc6IGAke3BhdGgucmVzb2x2ZShfX2Rpcm5hbWUsICdzcmMnKX0vYCxcbiAgICB9LFxuICB9LFxuXG4gIHBsdWdpbnM6IFtcbiAgICBWdWVNYWNyb3Moe1xuICAgICAgcGx1Z2luczoge1xuICAgICAgICB2dWU6IFZ1ZSh7XG4gICAgICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLm1kJC9dLFxuICAgICAgICB9KSxcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vcG9zdmEvdW5wbHVnaW4tdnVlLXJvdXRlclxuICAgIFZ1ZVJvdXRlcih7XG4gICAgICBleHRlbnNpb25zOiBbJy52dWUnLCAnLm1kJ10sXG4gICAgICBkdHM6ICdzcmMvdHlwZWQtcm91dGVyLmQudHMnLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0pvaG5DYW1waW9uSnIvdml0ZS1wbHVnaW4tdnVlLWxheW91dHNcbiAgICBMYXlvdXRzKCksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdW5wbHVnaW4tYXV0by1pbXBvcnRcbiAgICBBdXRvSW1wb3J0KHtcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgJ3Z1ZScsXG4gICAgICAgICd2dWUtaTE4bicsXG4gICAgICAgICdAdnVldXNlL2hlYWQnLFxuICAgICAgICAnQHZ1ZXVzZS9jb3JlJyxcbiAgICAgICAgVnVlUm91dGVyQXV0b0ltcG9ydHMsXG4gICAgICAgIHtcbiAgICAgICAgICAvLyBhZGQgYW55IG90aGVyIGltcG9ydHMgeW91IHdlcmUgcmVseWluZyBvblxuICAgICAgICAgICd2dWUtcm91dGVyL2F1dG8nOiBbJ3VzZUxpbmsnXSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmQudHMnLFxuICAgICAgZGlyczogW1xuICAgICAgICAnc3JjL2NvbXBvc2FibGVzJyxcbiAgICAgICAgJ3NyYy9zdG9yZXMnLFxuICAgICAgXSxcbiAgICAgIHZ1ZVRlbXBsYXRlOiB0cnVlLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzXG4gICAgQ29tcG9uZW50cyh7XG4gICAgICAvLyBhbGxvdyBhdXRvIGxvYWQgbWFya2Rvd24gY29tcG9uZW50cyB1bmRlciBgLi9zcmMvY29tcG9uZW50cy9gXG4gICAgICBleHRlbnNpb25zOiBbJ3Z1ZScsICdtZCddLFxuICAgICAgLy8gYWxsb3cgYXV0byBpbXBvcnQgYW5kIHJlZ2lzdGVyIGNvbXBvbmVudHMgdXNlZCBpbiBtYXJrZG93blxuICAgICAgaW5jbHVkZTogWy9cXC52dWUkLywgL1xcLnZ1ZVxcP3Z1ZS8sIC9cXC5tZCQvXSxcbiAgICAgIGR0czogJ3NyYy9jb21wb25lbnRzLmQudHMnLFxuICAgIH0pLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2FudGZ1L3Vub2Nzc1xuICAgIC8vIHNlZSB1bm8uY29uZmlnLnRzIGZvciBjb25maWdcbiAgICBVbm9jc3MoKSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS91bnBsdWdpbi91bnBsdWdpbi12dWUtbWFya2Rvd25cbiAgICAvLyBEb24ndCBuZWVkIHRoaXM/IFRyeSB2aXRlc3NlLWxpdGU6IGh0dHBzOi8vZ2l0aHViLmNvbS9hbnRmdS92aXRlc3NlLWxpdGVcbiAgICBNYXJrZG93bih7XG4gICAgICB3cmFwcGVyQ2xhc3NlczogJ3Byb3NlIHByb3NlLXNtIG0tYXV0byB0ZXh0LWxlZnQnLFxuICAgICAgaGVhZEVuYWJsZWQ6IHRydWUsXG4gICAgICBhc3luYyBtYXJrZG93bkl0U2V0dXAobWQpIHtcbiAgICAgICAgbWQudXNlKExpbmtBdHRyaWJ1dGVzLCB7XG4gICAgICAgICAgbWF0Y2hlcjogKGxpbms6IHN0cmluZykgPT4gL15odHRwcz86XFwvXFwvLy50ZXN0KGxpbmspLFxuICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICB0YXJnZXQ6ICdfYmxhbmsnLFxuICAgICAgICAgICAgcmVsOiAnbm9vcGVuZXInLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pXG4gICAgICAgIG1kLnVzZShhd2FpdCBTaGlraSh7XG4gICAgICAgICAgZGVmYXVsdENvbG9yOiBmYWxzZSxcbiAgICAgICAgICB0aGVtZXM6IHtcbiAgICAgICAgICAgIGxpZ2h0OiAndml0ZXNzZS1saWdodCcsXG4gICAgICAgICAgICBkYXJrOiAndml0ZXNzZS1kYXJrJyxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSlcbiAgICAgIH0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1wbHVnaW4tcHdhXG4gICAgVml0ZVBXQSh7XG4gICAgICByZWdpc3RlclR5cGU6ICdhdXRvVXBkYXRlJyxcbiAgICAgIGluY2x1ZGVBc3NldHM6IFsnZmF2aWNvbi5zdmcnLCAnc2FmYXJpLXBpbm5lZC10YWIuc3ZnJ10sXG4gICAgICBtYW5pZmVzdDoge1xuICAgICAgICBuYW1lOiAnVml0ZXNzZScsXG4gICAgICAgIHNob3J0X25hbWU6ICdWaXRlc3NlJyxcbiAgICAgICAgdGhlbWVfY29sb3I6ICcjZmZmZmZmJyxcbiAgICAgICAgaWNvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzcmM6ICcvcHdhLTE5MngxOTIucG5nJyxcbiAgICAgICAgICAgIHNpemVzOiAnMTkyeDE5MicsXG4gICAgICAgICAgICB0eXBlOiAnaW1hZ2UvcG5nJyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNyYzogJy9wd2EtNTEyeDUxMi5wbmcnLFxuICAgICAgICAgICAgc2l6ZXM6ICc1MTJ4NTEyJyxcbiAgICAgICAgICAgIHR5cGU6ICdpbWFnZS9wbmcnLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3JjOiAnL3B3YS01MTJ4NTEyLnBuZycsXG4gICAgICAgICAgICBzaXplczogJzUxMng1MTInLFxuICAgICAgICAgICAgdHlwZTogJ2ltYWdlL3BuZycsXG4gICAgICAgICAgICBwdXJwb3NlOiAnYW55IG1hc2thYmxlJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICB9KSxcblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9pbnRsaWZ5L2J1bmRsZS10b29scy90cmVlL21haW4vcGFja2FnZXMvdW5wbHVnaW4tdnVlLWkxOG5cbiAgICBWdWVJMThuKHtcbiAgICAgIHJ1bnRpbWVPbmx5OiB0cnVlLFxuICAgICAgY29tcG9zaXRpb25Pbmx5OiB0cnVlLFxuICAgICAgZnVsbEluc3RhbGw6IHRydWUsXG4gICAgICBpbmNsdWRlOiBbcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJ2xvY2FsZXMvKionKV0sXG4gICAgfSksXG5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vZmVhdC1hZ2VuY3kvdml0ZS1wbHVnaW4td2ViZm9udC1kbFxuICAgIFdlYmZvbnREb3dubG9hZCgpLFxuXG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3dlYmZhbnNwbHovdml0ZS1wbHVnaW4tdnVlLWRldnRvb2xzXG4gICAgVnVlRGV2VG9vbHMoKSxcbiAgXSxcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vdml0ZXN0LWRldi92aXRlc3RcbiAgdGVzdDoge1xuICAgIGluY2x1ZGU6IFsndGVzdC8qKi8qLnRlc3QudHMnXSxcbiAgICBlbnZpcm9ubWVudDogJ2pzZG9tJyxcbiAgfSxcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vYW50ZnUvdml0ZS1zc2dcbiAgc3NnT3B0aW9uczoge1xuICAgIHNjcmlwdDogJ2FzeW5jJyxcbiAgICBmb3JtYXR0aW5nOiAnbWluaWZ5JyxcbiAgICBjcml0dGVyc09wdGlvbnM6IHtcbiAgICAgIHJlZHVjZUlubGluZVN0eWxlczogZmFsc2UsXG4gICAgfSxcbiAgICBvbkZpbmlzaGVkKCkge1xuICAgICAgZ2VuZXJhdGVTaXRlbWFwKClcbiAgICB9LFxuICB9LFxuXG4gIHNzcjoge1xuICAgIC8vIFRPRE86IHdvcmthcm91bmQgdW50aWwgdGhleSBzdXBwb3J0IG5hdGl2ZSBFU01cbiAgICBub0V4dGVybmFsOiBbJ3dvcmtib3gtd2luZG93JywgL3Z1ZS1pMThuL10sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE2UyxPQUFPLFVBQVU7QUFDOVQsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8scUJBQXFCO0FBQzVCLE9BQU8sYUFBYTtBQUNwQixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGdCQUFnQjtBQUN2QixPQUFPLGNBQWM7QUFDckIsT0FBTyxlQUFlO0FBQ3RCLE9BQU8sYUFBYTtBQUNwQixTQUFTLGVBQWU7QUFDeEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxvQkFBb0I7QUFDM0IsT0FBTyxZQUFZO0FBQ25CLE9BQU8sV0FBVztBQUNsQixPQUFPLHFCQUFxQjtBQUM1QixPQUFPLGVBQWU7QUFDdEIsU0FBUyw0QkFBNEI7QUFqQnJDLElBQU0sbUNBQW1DO0FBbUJ6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxNQUFNLEdBQUcsS0FBSyxRQUFRLGtDQUFXLEtBQUssQ0FBQztBQUFBLElBQ3pDO0FBQUEsRUFDRjtBQUFBLEVBRUEsU0FBUztBQUFBLElBQ1AsVUFBVTtBQUFBLE1BQ1IsU0FBUztBQUFBLFFBQ1AsS0FBSyxJQUFJO0FBQUEsVUFDUCxTQUFTLENBQUMsVUFBVSxPQUFPO0FBQUEsUUFDN0IsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQTtBQUFBLElBR0QsVUFBVTtBQUFBLE1BQ1IsWUFBWSxDQUFDLFFBQVEsS0FBSztBQUFBLE1BQzFCLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQTtBQUFBLElBR0QsUUFBUTtBQUFBO0FBQUEsSUFHUixXQUFXO0FBQUEsTUFDVCxTQUFTO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUE7QUFBQSxVQUVFLG1CQUFtQixDQUFDLFNBQVM7QUFBQSxRQUMvQjtBQUFBLE1BQ0Y7QUFBQSxNQUNBLEtBQUs7QUFBQSxNQUNMLE1BQU07QUFBQSxRQUNKO0FBQUEsUUFDQTtBQUFBLE1BQ0Y7QUFBQSxNQUNBLGFBQWE7QUFBQSxJQUNmLENBQUM7QUFBQTtBQUFBLElBR0QsV0FBVztBQUFBO0FBQUEsTUFFVCxZQUFZLENBQUMsT0FBTyxJQUFJO0FBQUE7QUFBQSxNQUV4QixTQUFTLENBQUMsVUFBVSxjQUFjLE9BQU87QUFBQSxNQUN6QyxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUE7QUFBQTtBQUFBLElBSUQsT0FBTztBQUFBO0FBQUE7QUFBQSxJQUlQLFNBQVM7QUFBQSxNQUNQLGdCQUFnQjtBQUFBLE1BQ2hCLGFBQWE7QUFBQSxNQUNiLE1BQU0sZ0JBQWdCLElBQUk7QUFDeEIsV0FBRyxJQUFJLGdCQUFnQjtBQUFBLFVBQ3JCLFNBQVMsQ0FBQyxTQUFpQixlQUFlLEtBQUssSUFBSTtBQUFBLFVBQ25ELE9BQU87QUFBQSxZQUNMLFFBQVE7QUFBQSxZQUNSLEtBQUs7QUFBQSxVQUNQO0FBQUEsUUFDRixDQUFDO0FBQ0QsV0FBRyxJQUFJLE1BQU0sTUFBTTtBQUFBLFVBQ2pCLGNBQWM7QUFBQSxVQUNkLFFBQVE7QUFBQSxZQUNOLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsUUFDRixDQUFDLENBQUM7QUFBQSxNQUNKO0FBQUEsSUFDRixDQUFDO0FBQUE7QUFBQSxJQUdELFFBQVE7QUFBQSxNQUNOLGNBQWM7QUFBQSxNQUNkLGVBQWUsQ0FBQyxlQUFlLHVCQUF1QjtBQUFBLE1BQ3RELFVBQVU7QUFBQSxRQUNSLE1BQU07QUFBQSxRQUNOLFlBQVk7QUFBQSxRQUNaLGFBQWE7QUFBQSxRQUNiLE9BQU87QUFBQSxVQUNMO0FBQUEsWUFDRSxLQUFLO0FBQUEsWUFDTCxPQUFPO0FBQUEsWUFDUCxNQUFNO0FBQUEsVUFDUjtBQUFBLFVBQ0E7QUFBQSxZQUNFLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNSO0FBQUEsVUFDQTtBQUFBLFlBQ0UsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFlBQ04sU0FBUztBQUFBLFVBQ1g7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLElBQ0YsQ0FBQztBQUFBO0FBQUEsSUFHRCxRQUFRO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixpQkFBaUI7QUFBQSxNQUNqQixhQUFhO0FBQUEsTUFDYixTQUFTLENBQUMsS0FBSyxRQUFRLGtDQUFXLFlBQVksQ0FBQztBQUFBLElBQ2pELENBQUM7QUFBQTtBQUFBLElBR0QsZ0JBQWdCO0FBQUE7QUFBQSxJQUdoQixZQUFZO0FBQUEsRUFDZDtBQUFBO0FBQUEsRUFHQSxNQUFNO0FBQUEsSUFDSixTQUFTLENBQUMsbUJBQW1CO0FBQUEsSUFDN0IsYUFBYTtBQUFBLEVBQ2Y7QUFBQTtBQUFBLEVBR0EsWUFBWTtBQUFBLElBQ1YsUUFBUTtBQUFBLElBQ1IsWUFBWTtBQUFBLElBQ1osaUJBQWlCO0FBQUEsTUFDZixvQkFBb0I7QUFBQSxJQUN0QjtBQUFBLElBQ0EsYUFBYTtBQUNYLHNCQUFnQjtBQUFBLElBQ2xCO0FBQUEsRUFDRjtBQUFBLEVBRUEsS0FBSztBQUFBO0FBQUEsSUFFSCxZQUFZLENBQUMsa0JBQWtCLFVBQVU7QUFBQSxFQUMzQztBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
