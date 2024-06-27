import { h } from 'vue'
import { ElInput } from 'element-plus'

export default (props?: {
  placeholder?: string
  type?: string
  class?: string
  readonly?: boolean
  disabled?: boolean
  onKeyup?: (e: KeyboardEvent) => void
  onClick?: (e: MouseEvent) => void
}) => {
  return h(ElInput, {
    clearable: true,
    class: 'w-[160px]',
    ...props,
    onKeyup: (e: KeyboardEvent) => props?.onKeyup?.(e),
  })
}
