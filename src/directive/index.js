/**
 * 定义vue指令
 */
export default {
  install (Vue) {
    // 使用v-backgroundColor ，设置页面背景颜色
    Vue.directive('backgroundColor', {
      inserted (el, binding) {
        document.documentElement.style.backgroundColor = binding.value
      },
      unbind () {
        document.documentElement.style.backgroundColor = ''
      }
    })

    // 修改标题
    Vue.directive('title', {
      inserted (el, binding) {
        document.title = binding.value
      },
      unbind () {
        document.title = ''
      }
    })

    // 使用v-style ，设置html、body的自定义样式, v-style="{'height': '100%'}"
    Vue.directive('style', {
      inserted (el, binding) {
        const value = binding.value
        for (const key in value) {
          document.documentElement.style[key] = value[key]
          document.body.style[key] = value[key]
        }
      },
      unbind (el, binding) {
        const value = binding.value
        for (const key in value) {
          document.documentElement.style[key] = ''
          document.body.style[key] = ''
        }
      }
    })

    // 获取焦点,有些浏览器是不能自动聚焦的
    Vue.directive('focus', {
      inserted (el) {
        el.focus()
      }
    })
  }
}
