import { ElButton, ElMessage, ElMessageBox } from 'element-plus'
import Dialog from './Dialog'
import useValueInField from './useValueInField'
import { Tag, VerifyNode } from './FC'
import type { FieldConfig, KeyWithValue } from '~/api'
import { FieldTypes, jsTemplateList, saveVerifyManage } from '~/api'
import DataForm from '~/core/DataForm'
import { useDatePickerField, useSelectorField, useTextField } from '~/core/FormFields'
import useCodeEditor from '~/core/FormFields/useCodeEditor'
import DataTable from '~/core/DataTable'

const JAVASCRIPT_PREFIX = 'var value = #value_str, result;\n'

function generateKey(): string {
  return `field_${Math.random().toString(36).substr(2, 8)}`
}

const DialogContent = defineComponent({
  props: {
    item: {
      type: Object as PropType<FieldConfig>,
      required: true,
    },
    close: {
      type: Function as PropType<() => void>,
      required: false,
    },
    reload: {
      type: Function as PropType<() => void>,
      required: false,
    },
    submitHandler: {
      type: Function as PropType<(item: FieldConfig) => void>,
      required: false,
    },
  },
  setup(props) {
    const formData = ref<FieldConfig>({})
    const children = ref<FieldConfig[]>([])
    const jsTemplates = ref<KeyWithValue[]>([])

    const loadJsTemplates = () => {
      jsTemplateList().then((res) => {
        jsTemplates.value = res.data || []
      })
    }

    const submit = () => {
      const formDataVal = {
        ...formData.value,
        children: children.value,
      }
      if (formData.value.javascript === JAVASCRIPT_PREFIX)
        delete formDataVal.javascript
      if (props.submitHandler) {
        props.submitHandler(formDataVal)
        props.close?.()
      }
      else {
        saveVerifyManage(formDataVal).then(() => {
          ElMessage.success('保存成功')
          props.reload?.()
          props.close?.()
        })
      }
    }

    const addToChild = (item: FieldConfig) => {
      children.value = [
        ...children.value || [],
        item,
      ]
    }

    const openChildDialog = () => {
      show({
        item: {},
        submitHandler: (item) => {
          addToChild(item)
        },
      })
    }

    const DataFormNode = DataForm<FieldConfig>({
      modelValue: formData,
      labelWidth: 140,
      formItems: [
        {
          label: 'key',
          key: 'key',
          col: 12,
          rules: [{ required: true, message: '请输入字段名' }],
        },
        {
          label: '字段类型',
          key: 'type',
          type: useSelectorField({
            options: FieldTypes,
          }),
          col: 12,
          rules: [{ required: true, message: '请选择字段类型' }],
        },
        {
          label: '数组成员类型',
          key: 'arrayType',
          type: useSelectorField({
            options: FieldTypes,
          }),
          show: model => model.type === 'array',
          col: 12,
          rowEnd: true,
        },

        {
          label: '备注',
          key: 'desc',
          type: useTextField({
            type: 'textarea',
          }),
        },

        // for common
        {
          label: '正则校验',
          key: 'regex',
          type: useTextField({
            type: 'textarea',
          }),
          show: model => model.type === 'string' || model.type === 'number',
          col: 24,
          remark: '使用正则校验, 如: ^[0-9]*$',
        },
        {
          label: '必填',
          key: 'required',
          type: useSelectorField({
            options: [
              { value: true, label: '是' },
              { value: false, label: '否' },
            ],
          }),
          col: 12,
          rowEnd: true,
          remark: '是否必填，在指定校验字段时生效',
          rules: [{ required: true, message: '请选择是否必填' }],
        },
        {
          label: 'value in',
          key: 'valueIn',
          show: model => model.type === 'string' || model.type === 'number' || model.type === 'date',
          type: () => useValueInField({
            values: formData.value.valueIn || [],
            onChange: (value: string) => {
              formData.value.valueIn = [
                ...formData.value.valueIn || [],
                value,
              ]
            },
          }),
          col: 24,
        },
        {
          label: 'value in sql',
          key: 'valueInSql',
          show: model => model.type === 'string' || model.type === 'number' || model.type === 'date',
          type: useTextField({
            type: 'textarea',
          }),
          remark: '#[key] 为占位符，会根据传入对象进行替换',
        },
        {
          label: 'JavaScript',
          key: 'javascript',
          type: () => useCodeEditor({
            value: formData.value.javascript,
            onChange: (value: string) => {
              formData.value.javascript = value
            },
          }),
          remark: '#value_str 为占位符，表示当前字段值, result 为结果, 1 表示校验成功, 其它值会作为验证失败的具体信息返回',
        },
        {
          label: 'JS模板',
          type: () => {
            return (
              <div class="flex gap-[5px]">
                {
                  jsTemplates.value.map(item => (
                    <ElButton
                      type="primary"
                      size="small"
                      onClick={() => {
                        formData.value.javascript = item.value
                      }}
                    >
                      {item.key}
                    </ElButton>
                  ))
                }
              </div>
            )
          },
        },

        // for number
        {
          label: '最小值',
          key: 'minValue',
          type: useTextField({
            type: 'number',
          }),
          show: model => model.type === 'number',
          col: 12,
          rowEnd: true,
        },
        {
          label: '最小值(SQL)',
          key: 'minValueSql',
          type: useTextField({
            type: 'textarea',
          }),
          show: model => model.type === 'number',
          remark: '#[key] 为占位符，会根据传入对象进行替换',
          col: 24,
        },
        {
          label: '最小值规则',
          key: 'staticIsMin',
          type: useSelectorField({
            options: [
              { value: true, label: '以填写的最小值为准' },
              { value: false, label: '取 填写值/SQL查询值 的最小值' },
            ],
          }),
          show: model => model.type === 'number' && !!model.minValue && !!model.minValueSql,
          rules: [{ required: true, message: '请选择最小值规则' }],
          col: 12,
          rowEnd: true,
        },

        {
          label: '最大值',
          key: 'maxValue',
          type: useTextField({
            type: 'number',
          }),
          show: model => model.type === 'number',
          col: 12,
          rowEnd: true,
        },
        {
          label: '最大值(SQL)',
          key: 'maxValueSql',
          type: useTextField({
            type: 'textarea',
          }),
          show: model => model.type === 'number',
          remark: '#[key] 为占位符，会根据传入对象进行替换',
          col: 24,
        },
        {
          label: '最大值规则',
          key: 'staticIsMax',
          type: useSelectorField({
            options: [
              { value: true, label: '以填写的最大值为准' },
              { value: false, label: '取 填写值/SQL查询值 的最大值' },
            ],
          }),
          show: model => model.type === 'number' && !!model.maxValue && !!model.maxValueSql,
          rules: [{ required: true, message: '请选择最大值规则' }],
          col: 12,
          rowEnd: true,
        },

        // for string
        {
          label: '最小长度',
          key: 'minLength',
          type: useTextField({
            type: 'number',
          }),
          show: model => model.type === 'string',
          col: 12,
        },
        {
          label: '最大长度',
          key: 'maxLength',
          type: useTextField({
            type: 'number',
          }),
          show: model => model.type === 'string',
          col: 12,
        },
        {
          label: '开始字符',
          key: 'beginWith',
          show: model => model.type === 'string',
          col: 12,
        },
        {
          label: '结束字符',
          key: 'endWith',
          show: model => model.type === 'string',
          col: 12,
        },

        // for date
        {
          label: '日期格式',
          key: 'format',
          show: model => model.type === 'date',
          col: 12,
          rowEnd: true,
          remark: '时间格式校验, 如: yyyy-MM-dd HH:mm:ss',
        },
        {
          label: '最小时间',
          key: 'minDate',
          show: model => model.type === 'date',
          type: useDatePickerField({
            type: 'datetime',
          }),
          col: 12,
        },
        {
          label: '最大时间',
          key: 'maxDate',
          show: model => model.type === 'date',
          type: useDatePickerField({
            type: 'datetime',
          }),
          col: 12,
        },
      ],
    })

    const DataTableNode = DataTable<FieldConfig>({
      items: children,
      pagination: { show: false },
      columns: [
        {
          label: '字段名',
          key: 'key',
          width: 100,
        },
        {
          label: '字段类型',
          render: (item) => {
            const data = FieldTypes.find(type => type.value === item.type)
            return <Tag str={data?.label} className={data?.className} />
          },
          width: 100,
        },
        {
          label: '校验规则',
          render: (item) => {
            return <VerifyNode item={item} />
          },
        },
      ],
      action: {
        width: 100,
        items: [
          {
            text: '编辑',
            type: 'primary',
            onClick: (item) => {
              show({
                item,
                submitHandler: (item) => {
                  const index = children.value.findIndex(child => child.id === item.id)
                  if (index >= 0)
                    children.value.splice(index, 1, item)
                },
              })
            },
          },
          {
            text: '删除',
            type: 'danger',
            onClick: (item) => {
              ElMessageBox.confirm('确定删除吗？', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning',
              }).then(() => {
                children.value = children.value.filter(child => child.id !== item.id)
              })
            },
          },
        ],
      },
    })

    onMounted(() => {
      loadJsTemplates()
      formData.value = {
        type: 'string',
        ...props.item,
      }
      children.value = (props.item.children || []).map(child => ({ ...child, id: generateKey() }))
      if (!formData.value.javascript)
        formData.value.javascript = JAVASCRIPT_PREFIX
      if (!formData.value.children)
        formData.value.children = []
    })

    return {
      submit,
      formData,
      openChildDialog,
      DataFormNode,
      DataTableNode,
    }
  },
  render() {
    return (
      <div class="p-[10px_30px]">
        {this.DataFormNode}
        {
          (this.formData.type === 'object' || this.formData.arrayType === 'object') && (
            <div class="mt-[20px]">
              <div class="mb-[10px] flex items-center text-[15px] font-bold">
                <span class="text-emerald-500">#</span>
                <span class="ml-[5px] text-[#333]">子项配置</span>
                <ElButton
                  size="small"
                  type="primary"
                  class="ml-auto"
                  onClick={() => this.openChildDialog()}
                >
                  添加
                </ElButton>
              </div>
              {this.DataTableNode}
            </div>
          )
        }
        <div class="mt-[20px] flex justify-end">
          <ElButton type="default" onClick={() => this.close?.()}>返回</ElButton>
          <ElButton
            type="primary"
            onClick={() => {
              this.submit()
              this.close?.()
            }}
          >
            提交
          </ElButton>
        </div>
      </div>
    )
  },
})

function show({ item, reload, submitHandler }: { item?: FieldConfig, reload?: () => void, submitHandler?: (item: FieldConfig) => void }) {
  const instance = Dialog.init({
    title: 'Edit',
    width: 1000,
    content: () => (
      <DialogContent
        item={{
          ...item,
        }}
        close={instance?.close}
        reload={reload}
        submitHandler={submitHandler}
      />
    ),
  })
}

export default { show }
