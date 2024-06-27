import type { Ref } from 'vue'
import { computed, defineComponent, h } from 'vue'

interface PropsType {
  typeId?: string
  typeName?: string
}

const Component = defineComponent({
  name: 'TypeField',
  props: {
    data: {
      type: Object as () => Ref<PropsType>,
      required: true,
    },
  },
  setup(props) {
    const queryForm = computed(() => props.data.value)

    return {
      queryForm,
    }
  },
  render() {
    return (
      <>
        <div class="flex overflow-hidden rounded-[3px]">
          <div class="h-[22px] bg-blue-500 px-[7px] text-white leading-[22px]">{this.queryForm.typeId || '-'}</div>
          <div class="h-[22px] bg-blue-500/10 px-[7px] text-blue-500 leading-[22px]">{this.queryForm.typeName || '-'}</div>
        </div>
      </>
    )
  },
})

export default function useTypeField(data: Ref<PropsType>) {
  return h(Component, { data })
}
