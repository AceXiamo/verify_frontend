import { ElMessage } from 'element-plus'
import Dialog from '../Dialog'
import DataForm from '~/core/DataForm'
import type { KeyWithValue } from '~/api'
import { saveJsTemplate } from '~/api'
import useCodeEditor from '~/core/FormFields/useCodeEditor'

const JAVASCRIPT_PREFIX = 'var value = #value_str, result;\n'

const DialogContent = defineComponent({
  props: {
    item: {
      type: Object as PropType<KeyWithValue>,
      default: () => ({}),
    },
    reload: {
      type: Function as PropType<() => void>,
      required: true,
    },
    close: {
      type: Function as PropType<() => void>,
      required: false,
    },
  },
  setup(props) {
    const form = ref<KeyWithValue>({ })

    function submit() {
      saveJsTemplate(form.value).then(() => {
        ElMessage.success('保存成功')
        props.reload?.()
        props.close?.()
      })
    }

    const DataFormNode = DataForm<KeyWithValue>({
      modelValue: form,
      labelWidth: 90,
      formItems: [
        {
          label: '名称',
          key: 'key',
          col: 12,
          rowEnd: true,
        },
        {
          label: 'JavaScript',
          key: 'value',
          type: () => useCodeEditor({
            value: form.value.value,
            onChange: (value: string) => {
              form.value.value = value
            },
          }),
          remark: '#value_str 为占位符，表示当前字段值, result 为结果, 1 表示校验成功, 其它值会作为验证失败的具体信息返回',
        },
      ],
      actions: [
        {
          text: '返回',
          type: 'default',
          handler: () => {
            props.close?.()
          },
        },
        {
          text: '提交',
          type: 'primary',
          handler: () => {
            submit()
          },
        },
      ],
    })

    onMounted(() => {
      form.value = {
        ...props.item,
      }
      if (!form.value.value)
        form.value.value = JAVASCRIPT_PREFIX
    })

    return {
      DataFormNode,
    }
  },
  render() {
    return <div class="p-[20px]">{this.DataFormNode}</div>
  },
})

function show({ item, reload }: { item: KeyWithValue, reload: () => void }) {
  const instance = Dialog.init({
    title: 'Edit Keys',
    width: 900,
    content: () => <DialogContent item={item} reload={reload} close={instance?.close} />,
  })
}

export default { show }
