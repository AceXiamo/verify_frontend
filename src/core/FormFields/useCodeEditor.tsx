import { VueMonacoEditor } from '@guolao/vue-monaco-editor'

export default (props?: {
  value?: string
  onChange?: (value: string) => void
}) => {
  return (
    <div style="background-color: #1E1E1E" class="min-h-[200px] flex pt-[20px]">
      <VueMonacoEditor
        className="h-[200px]"
        value={props?.value}
        onChange={props?.onChange}
        language="javascript"
        options={{
          automaticLayout: true,
          formatOnType: true,
          formatOnPaste: true,
        }}
        theme="vs-dark"
      />
    </div>
  )
}
