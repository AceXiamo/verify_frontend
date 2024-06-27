import { ElButton, ElMessage } from 'element-plus'
import Dialog from '../Dialog'
import DataForm from '~/core/DataForm'
import type { FieldConfig, KeyWithValue } from '~/api'
import { getVerifyManageList, saveGroup } from '~/api'

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
    const form = ref<KeyWithValue>({
      ...props.item,
    })
    const keyArr = ref<FieldConfig[]>([])

    function submit() {
      saveGroup(form.value).then(() => {
        ElMessage.success('保存成功')
        props.reload?.()
        props.close?.()
      })
    }

    const DataFormNode = DataForm<KeyWithValue>({
      modelValue: form,
      labelWidth: 60,
      formItems: [
        {
          label: '组名',
          key: 'key',
          col: 12,
          rowEnd: true,
        },
        {
          label: 'value',
          key: 'value',
          col: 24,
          rowEnd: true,
          remark: '关联的字段名，使用 `,` 进行分隔',
        },
        {
          label: '候选字段',
          type: () => {
            return (
              <div class="flex flex-wrap gap-[5px]">
                {
                  keyArr.value.map(item => (
                    <div
                      class="h-[20px] flex cursor-pointer select-none items-center rounded-[4px] bg-blue-400 px-[6px] text-[12px] text-white"
                      onClick={() => {
                        const arr = form.value.value ? form.value.value.split(',') : []
                        if (arr?.includes(item.key!)) {
                          arr.splice(arr.indexOf(item.key!), 1)
                        }
                        else {
                          arr?.push(item.key!)
                        }
                        form.value.value = arr?.join(',')
                      }}
                    >
                      {item.key}
                    </div>
                  ))
                }
              </div>
            )
          },
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

    const loadKeys = () => {
      getVerifyManageList().then((res) => {
        keyArr.value = res.data || []
      })
    }

    onMounted(() => {
      loadKeys()
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
    width: 800,
    content: () => <DialogContent item={item} reload={reload} close={instance?.close} />,
  })
}

export default { show }
