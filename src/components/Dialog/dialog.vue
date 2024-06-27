<script lang="ts" setup>
import { useMotions } from '@vueuse/motion'
import type { VNode } from 'vue'
import { h, onMounted, ref } from 'vue'
import { CircleCloseFilled } from '@element-plus/icons-vue'

export interface DialogProps {
  title: string
  content?: (h: any) => VNode
  footer?: (h: any) => VNode
  width?: string | number
  appendToBody?: boolean
  onClose?: (key: string) => void
  motionKey?: string
}

const props = withDefaults(defineProps<DialogProps>(), {
  title: '',
})
const show = ref(false)
const motion = useMotions()
onMounted(() => {
  show.value = true
})

function leave() {
  motion[props.motionKey!].leave(() => {
    show.value = false
    props.onClose?.(props.motionKey!)
  })
}

defineExpose({
  leave,
})
</script>

<template>
  <div
    v-if="show"
    v-motion="$props.motionKey!"
    class="fixed inset-0 z-[999] overflow-auto bg-black bg-opacity-20"
    :initial="{
      opacity: 0,
      y: 10,
      transition: {
        duration: 200,
      },
    }"
    :enter="{
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
      },
    }"
    :leave="{
      opacity: 0,
      y: 10,
      transition: {
        ease: 'easeOut',
      },
    }"
    @click="leave"
  >
    <div
      class="absolute inset-0 m-[100px_auto] h-max min-h-[100px] flex flex-col gap-[20px] rounded-md bg-white py-[20px] dark:bg-[#333]"
      :style="{ width: typeof $props.width === 'number' ? `${$props.width}px` : $props.width }"
      @click.stop
    >
      <div class="flex items-center px-[20px]">
        <span class="select-none text-[15px] text-[#333] font-bold">{{ $props.title }}</span>
        <div class="ml-auto cursor-pointer" @click="leave">
          <el-icon :size="24" color="#E74745">
            <CircleCloseFilled />
          </el-icon>
        </div>
      </div>
      <template v-if="$props.content">
        <component :is="$props.content(h)" />
      </template>
      <template v-if="$props.footer">
        <component :is="$props.footer(h)" />
      </template>
    </div>
  </div>
</template>
