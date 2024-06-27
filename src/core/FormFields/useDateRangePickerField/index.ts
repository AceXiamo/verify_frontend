import type { Ref } from 'vue'
import { h } from 'vue'
import Component from './index.vue'

export default <T extends object, K extends keyof T>({
  queryForm,
  beginKey,
  endKey,
  onChange,
}: {
  queryForm: Ref<T>
  beginKey: Extract<K, string>
  endKey: Extract<K, string>
  onChange?: (value: [Date, Date]) => void
}) => {
  return h(Component, { queryForm, beginKey, endKey, onChange })
}
