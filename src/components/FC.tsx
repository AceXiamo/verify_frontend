import type { FieldConfig } from '~/api'
import Verify from '~/utils/verify'

export function Tag({ str, bgColor, textColor, className }: { str?: any, bgColor?: string, textColor?: string, className?: string }) {
  return (
    <div>
      {str && (
        <div
          class={`w-max text-[12px] leading-[20px] ${bgColor || ''} ${textColor || ''} ${className || ''} px-[5px] rounded-[3px] h-[20px]`}
        >
          {str}
        </div>
      )}
    </div>
  )
}

export function VerifyNode({ item }: { item: FieldConfig }) {
  const arr: string[] = item.type ? (Verify as any)[item.type](item) : []
  return (
    <div class="flex gap-[10px]">
      {
        item.required && (
          <Tag str="必填" className="bg-red-500/20 text-red-500" />
        )
      }
      {
        arr.map((v: any) => {
          return (
            <div>
              <Tag str={v} className="bg-blue-500/20 text-blue-500" />
            </div>
          )
        })
      }
    </div>
  )
}
