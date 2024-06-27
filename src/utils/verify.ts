import type { FieldConfig } from '~/api'

function forString(item: FieldConfig) {
  const rules: string[] = []
  if (item.regex)
    rules.push(`正则表达式: ${item.regex}`)
  if (item.javascript)
    rules.push('JavaScript')
  if (item.length)
    rules.push(`字符串长度必须为 ${item.length}`)
  if (item.minLength)
    rules.push(`字符串长度不能小于 ${item.minLength}`)
  if (item.maxLength)
    rules.push(`字符串长度不能大于 ${item.maxLength}`)
  if (item.beginWith)
    rules.push(`字符串必须以 ${item.beginWith} 开头`)
  if (item.endWith)
    rules.push(`字符串必须以 ${item.endWith} 结尾`)
  if (item.valueInSql)
    rules.push(`值必须在 '${item.valueInSql}' 中`)
  if (item.valueIn)
    rules.push(`值必须在 '${item.valueIn.join(', ')}' 中`)
  return rules
}

function forNunber(item: FieldConfig) {
  const rules: string[] = []
  if (item.javascript)
    rules.push('JavaScript')
  if (item.minValue)
    rules.push(`值不能小于 ${item.minValue}`)
  if (item.maxValue)
    rules.push(`值不能大于 ${item.maxValue}`)
  if (item.minValueSql)
    rules.push(`值不能小于 '${item.minValueSql}'`)
  if (item.maxValueSql)
    rules.push(`值不能大于 '${item.maxValueSql}'`)
  return rules
}

function forDate(item: FieldConfig) {
  const rules: string[] = []
  if (item.javascript)
    rules.push('JavaScript')
  if (item.minDate)
    rules.push(`值不能小于 ${item.minDate}`)
  if (item.maxDate)
    rules.push(`值不能大于 ${item.maxDate}`)
  if (item.format)
    rules.push(`日期格式: ${item.format}`)
  return rules
}

function forArray(item: FieldConfig) {
  const rules: string[] = []
  if (item.javascript)
    rules.push('JavaScript')
  if (item.valueIn)
    rules.push(`值必须在 ${item.valueIn.join(', ')} 中`)
  rules.push('详情中查看')
  return rules
}

function forObject(item: FieldConfig) {
  const rules: string[] = []
  if (item.javascript)
    rules.push('JavaScript')
  item.children?.forEach((child) => {
    rules.push(`${child.key}`)
  })
  return rules
}

export default {
  string: forString,
  number: forNunber,
  date: forDate,
  array: forArray,
  object: forObject,
}
