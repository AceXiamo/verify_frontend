import { defineStore } from 'pinia'
import type { FieldConfig } from '~/api'
import EditDialog from '~/components/EditDialog'

export default defineStore('edit', () => {
  const formData = ref<FieldConfig>({})
  const children = ref<FieldConfig[]>([])

  const addToChild = (item: FieldConfig) => {
    children.value = [
      ...children.value || [],
      item,
    ]
  }

  const openChildDialog = () => {
    EditDialog.show({
      submitHandler: (item) => {
        addToChild(item)
      },
    })
  }

  return {
    formData,
    children,
    openChildDialog,
  }
})
