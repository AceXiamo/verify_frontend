import type { VNode } from 'vue'
import { h } from 'vue'
import { ElOption, ElSelect } from 'element-plus'

interface SelectDefine {
  'options': any
  'modelValue'?: any
  'update:modelValue'?: (value: any) => void
  'filterable'?: boolean
  'label'?: string
  'value'?: string
  'clearable'?: boolean
}

export default (define: SelectDefine) => {
  const options = (): VNode[] => {
    return define.options.map((item: any) => {
      return h(ElOption, {
        label: item[define.label || 'label'],
        value: item[define.value || 'value'],
      })
    })
  }

  return h(
    ElSelect,
    {
      clearable: true,
      style: {
        width: '160px',
      },
      ...define,
    },
    options,
  )
}
