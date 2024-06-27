import { ElButton } from 'element-plus'
import Dialog from './Dialog'
import { Tag } from './FC'
import DataForm from '~/core/DataForm'

interface FieldDefine {
  values?: any
  onChange?: (value: any) => void
}

const DialogContent = defineComponent({
  props: {
    modelValue: {
      type: Object as PropType<any>,
      required: false,
    },
    onChange: {
      type: Function as PropType<(value: any) => void>,
      required: false,
    },
    close: {
      type: Function as PropType<() => void>,
      required: false,
    },
  },
  setup(props) {
    const formData = ref({
      val: '',
    })

    const DataFormNode = DataForm<{ val: string }>({
      modelValue: formData,
      labelWidth: 50,
      formItems: [
        {
          label: '值',
          key: 'val',
          col: 12,
        },
      ],
      actions: [
        {
          type: 'default',
          text: '返回',
          handler: () => {
            props.close?.()
          },
        },
        {
          type: 'primary',
          text: '提交',
          handler: () => {
            props.onChange?.(formData.value.val)
            props.close?.()
          },
        },
      ],
    })

    return {
      DataFormNode,
    }
  },
  render() {
    return (
      <div class="px-[20px]">
        {this.DataFormNode}
      </div>
    )
  },
})

function show(define: FieldDefine) {
  const instance = Dialog.init({
    title: '添加值',
    width: 500,
    content: () => (
      <DialogContent
        modelValue={define.values}
        onChange={define.onChange}
        close={instance?.close}
      />
    ),
  })
}

export default function useValueInField(props?: FieldDefine) {
  return (
    <div class="flex items-center gap-[5px]">
      {
          props?.values.map((item: any) => (
            <Tag str={item} className="bg-orange-500/20 text-orange-500" />
          ))
        }
      <ElButton
        type="primary"
        size="small"
        onClick={() => {
          show(props || {})
        }}
      >
        +
      </ElButton>
    </div>
  )
}
