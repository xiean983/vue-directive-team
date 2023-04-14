const throttling = {
  inserted: function (el, binding) {
    let timer = null;
    const { fn, delay, immediate } = binding.value
    el.addEventListener('click', () => {
      if (!timer) {
        if (immediate) {
          fn()
        }
        timer = setTimeout(() => {
          if (!immediate) fn()
          timer = null
        }, delay)
      }
    })
  },
}

export default throttling
