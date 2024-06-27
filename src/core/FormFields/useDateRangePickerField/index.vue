<script lang="ts" setup>
import type { Ref } from 'vue'
import { onMounted, ref } from 'vue'
import { dayjs } from 'element-plus'

interface IProps {
  queryForm: Ref<any>
  beginKey: string
  endKey: string
  onChange?: (val: [Date, Date]) => void
}

const props = defineProps<IProps>()
const pickerValue = ref()

function handleChange(val: [Date, Date]) {
  let begin, end
  if (val) {
    begin = dayjs(val[0]).format('YYYY-MM-DD')
    end = dayjs(val[1]).format('YYYY-MM-DD')
  }
  else {
    begin = null
  }
  const queryForm = props.queryForm.value
  queryForm[props.beginKey] = begin
  queryForm[props.endKey] = end
  props.onChange?.(val)
}

onMounted(() => {
  const begin = props.queryForm.value[props.beginKey]
  const end = props.queryForm.value[props.endKey]
  if (begin && end)
    pickerValue.value = [dayjs(begin).toDate(), dayjs(end).toDate()]
  else
    pickerValue.value = null
})
</script>

<template>
  <el-date-picker v-model="pickerValue" type="daterange" @change="handleChange" />
</template>
