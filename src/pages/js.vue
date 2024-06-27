<script lang="tsx" setup>
import { ElMessageBox } from 'element-plus'
import { Tag } from '~/components/FC'
import QueryForm from '~/core/QueryForm'
import DataTable from '~/core/DataTable'
import { deleteJsTemplate, jsTemplateList } from '~/api'
import type { KeyWithValue } from '~/api'
import EditDialog from '~/components/js/EditDialog'

const tableData = ref<KeyWithValue[]>([])
const loading = ref<boolean>(false)

function loadData() {
  loading.value = true
  jsTemplateList().then((res) => {
    tableData.value = res.data || []
  }).finally(() => {
    loading.value = false
  })
}

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
const DataTableNode = DataTable<KeyWithValue>({
  items: tableData,
  loading,
  columns: [
    {
      key: 'key',
      width: 100,
      label: 'JS模板名',
    },
    {
      label: 'value',
      key: 'value',
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
            deleteJsTemplate({ key: item.key! }).then(() => {
              loadData()
            })
          })
        },
      },
    ],
  },
})

onMounted(() => {
  loadData()
})
</script>

<template>
  <div>
    <QueryFormNode />
    <DataTableNode />
  </div>
</template>
