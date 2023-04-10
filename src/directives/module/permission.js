/* 
    对需要权限判断的 Dom 进行显示隐藏。
    解决判断条件繁琐且多个地方需要判断Dom隐藏的逻辑
*/
function checkArray(key) {
    let arr = ['1', '2', '3', '4']
    let index = arr.indexOf(key)
    if (index > -1) {
      return true // 有权限
    } else {
      return false // 无权限
    }
  }
  
  const permission = {
    inserted: function (el, binding) {
      let permission = binding.value // 获取到 v-permission的值
      if (permission) {
        let hasPermission = checkArray(permission)
        if (!hasPermission) {
          // 没有权限 移除Dom元素
          el.parentNode && el.parentNode.removeChild(el)
        }
      }
    },
  }
  
  export default permission