/* 按钮点击防抖指令 */
const debounce = {
    inserted: function (el, binding) {
      let timer
      el.addEventListener('click', () => {
        if (timer) {
          clearTimeout(timer)
        }
        timer = setTimeout(() => {
          binding.value()
        }, 300)
      })
    },
  }
  
  export default debounce