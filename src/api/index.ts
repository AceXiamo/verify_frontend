import axios from 'axios'

export type FieldType = 'string' | 'number' | 'date' | 'array' | 'object'

export interface FieldConfig {
  id?: string
  key?: string
  type?: FieldType
  regex?: string
  desc?: string
  required?: boolean
  javascript?: string
  valueIn?: string[]
  valueInSql?: string
  staticIsValueIn?: boolean

  // for number
  minValue?: number
  minValueSql?: string
  staticIsMin?: boolean
  maxValue?: number
  maxValueSql?: string
  staticIsMax?: boolean

  // for string
  length?: number
  maxLength?: number
  minLength?: number
  beginWith?: string
  endWith?: string

  // for date
  format?: string
  minDate?: string
  maxDate?: string

  // for array
  arrayType?: FieldType

  // for object
  children?: FieldConfig[]
}

export const FieldTypes = [
  {
    value: 'string',
    label: '字符串',
    className: 'text-white bg-blue-500',
  },
  {
    value: 'number',
    label: '数字',
    className: 'text-white bg-green-500',
  },
  {
    value: 'date',
    label: '日期时间',
    className: 'text-white bg-yellow-500',
  },
  {
    value: 'array',
    label: '数组',
    className: 'text-white bg-indigo-500',
  },
  {
    value: 'object',
    label: '对象',
    className: 'text-white bg-pink-500',
  },
]

export interface ResponseData<T> {
  success: boolean
  data: T
  message: string
}

export function getVerifyManageList(): Promise<ResponseData<FieldConfig[]>> {
  return new Promise((resolve) => {
    axios.get('/api/verify/manage/list').then((res) => {
      resolve(res.data)
    })
  })
}

export function saveVerifyManage(data: FieldConfig): Promise<ResponseData<void>> {
  return axios.post('/api/verify/manage/save', data)
}

export function deleteVerifyManage(params: { key: string }): Promise<ResponseData<void>> {
  return axios.delete('/api/verify/manage/delete', { params })
}

export interface KeyWithValue {
  key?: string
  value?: string
}

export function groupList(): Promise<ResponseData<KeyWithValue[]>> {
  return new Promise((resolve) => {
    axios.get('/api/verify/group/list').then((res) => {
      resolve(res.data)
    })
  })
}

export function saveGroup(params: KeyWithValue): Promise<ResponseData<void>> {
  return axios.post('/api/verify/group/save', {}, {
    params,
  })
}

export function deleteGroup(params: { key: string }): Promise<ResponseData<void>> {
  return axios.delete('/api/verify/group/delete', { params })
}

export function jsTemplateList(): Promise<ResponseData<KeyWithValue[]>> {
  return new Promise((resolve) => {
    axios.get('/api/verify/js/list').then((res) => {
      resolve(res.data)
    })
  })
}

export function saveJsTemplate(data: KeyWithValue): Promise<ResponseData<void>> {
  return axios.post('/api/verify/js/save', data)
}

export function deleteJsTemplate(params: { key: string }): Promise<ResponseData<void>> {
  return axios.delete('/api/verify/js/delete', { params })
}
