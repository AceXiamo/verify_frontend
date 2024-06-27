<script setup lang="tsx">
import { ElMessageBox } from 'element-plus'
import DataTable from '~/core/DataTable'
import QueryForm from '~/core/QueryForm'
import type { FieldConfig } from '~/api'
import { FieldTypes, deleteVerifyManage, getVerifyManageList } from '~/api'
import { Tag, VerifyNode } from '~/components/FC'
import EditDialog from '~/components/EditDialog'

defineOptions({
  name: 'IndexPage',
})
const tableData = ref<FieldConfig[]>([])
const loading = ref(false)
const QueryFormNode = QueryForm({
  actions: [
    {
      text: '添加',
      type: 'primary',
      handler: () => {
        EditDialog.show({
          item: {},
          reload: loadData,
        })
      },
    },
  ],
})

const DataTableNode = DataTable<FieldConfig>({
  items: tableData,
  pagination: { show: false },
  loading,
  columns: [
    {
      label: '字段名',
      key: 'key',
      width: 200,
    },
    {
      label: '字段类型',
      render: (item) => {
        const data = FieldTypes.find(type => type.value === item.type)
        return <Tag str={data?.label} className={data?.className} />
      },
      width: 200,
    },
    {
      label: '校验规则',
      render: (item) => {
        return <VerifyNode item={item} />
      },
    },
    {
      label: '描述',
      key: 'desc',
      width: 500,
    },
  ],
  action: {
    width: 200,
    items: [
      {
        text: '编辑',
        type: 'primary',
        onClick: (item) => {
          EditDialog.show({
            item,
            reload: loadData,
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
            deleteVerifyManage({ key: item.key! }).then(() => {
              loadData()
            })
          })
        },
      },
    ],
  },
})

function loadData() {
  loading.value = true
  getVerifyManageList().then((res) => {
    tableData.value = res.data || []
  }).finally(() => {
    loading.value = false
  })
}

onMounted(() => {
  loadData()
})
</script>

<template>
  <div flex flex-col px="10px">
    <QueryFormNode />
    <DataTableNode />
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
