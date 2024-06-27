import { h } from 'vue'
import { ElCascader } from 'element-plus'

interface IProps {
  options: any[]
  props?: {
    checkStrictly?: boolean
  }
}

export default (props: IProps) => {
  return h(ElCascader, {
    ...props,
  })
}
