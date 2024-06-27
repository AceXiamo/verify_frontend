<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <nav flex="~ gap-4" mt-6 justify-center text-xl>
    <RouterLink to="/" h="28px" title="首页" data-test-id="home" icon-btn>
      <button h-full cursor-pointer>
        <div i-carbon-campsite />
      </button>
    </RouterLink>

    <RouterLink to="/keys" h="28px" title="分组" data-test-id="group" icon-btn>
      <button h-full cursor-pointer>
        <div i-carbon:cics-system-group />
      </button>
    </RouterLink>

    <RouterLink to="/js" h="28px" title="JS" data-test-id="group" icon-btn>
      <button h-full cursor-pointer>
        <div i-devicon:javascript />
      </button>
    </RouterLink>

    <button icon-btn :title="t('button.toggle_dark')" @click="toggleDark()">
      <div i="carbon-sun dark:carbon-moon" />
    </button>
  </nav>
</template>
