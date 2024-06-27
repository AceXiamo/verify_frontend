import type { PropType } from 'vue'
import { defineComponent, h } from 'vue'
import { Tag } from '~/components/FC'

const TagComponent = defineComponent({
  props: {
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      required: false,
    },
    str: {
      type: String,
      required: false,
    },
    className: {
      type: String,
      required: false,
    },
  },
  render() {
    return <Tag str={this.str ? this.str : this.modelValue!} className={this.className} />
  },
})

/**
 * Custom hook for handling tag fields.
 * @param props Optional props for the tag field.
 * @returns The tag field component.
 */
export default (define?: { str?: string, className?: string }) => {
  return h(TagComponent, { ...define })
}
