// 获取moudule文件下所有js文件
const context = require.context('./module', false, /\.js$/);
// context.keys() 返回匹配成功模块的名字组成的数组
const directives = context.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1');
  // 通过context(key)导出文件内容。在文件中时通过export.default导出的，所以后边加.default
  const fileModule = context(modulePath);
  modules[moduleName] = fileModule.default;
  return modules;
}, {});

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key]);
      console.log(directives);
    })
    Vue.directive('empty',
      (el, binding) => {
        Vue.nextTick(() => {
          let { show, emimgpty, el: Elclass } = binding.value;
          const _DOM = el.querySelector(`.${Elclass}`);
          if (!_DOM) {
            console.log('传的对应的类名不对')
            return
          }
          if (show) {
            _DOM.style.display = 'block'
            const empty_content = el.querySelector('.empty_content');
            if (empty_content) empty_content.remove()
          } else {
            _DOM.style.display = 'none'
            // 创建空数据盒子，设置样式
            let div = document.createElement("div");
            div.className = "empty_content"
            div.style.height = el.clientHeight + 'px'
            div.style.width = el.clientWidth + 'px'
            div.style.display = 'flex'
            div.style.alignItems = 'center'
            div.style.justifyContent = 'center'
            // 创建img，设置样式
            let img = document.createElement("img");
            img.style.width = '100%'
            img.setAttribute('src', emimgpty)
            div.appendChild(img)
            el.appendChild(div)
          }
        })
      },
    )
  },
}

// 全局注册
// import Vue from 'vue'
// import Directives from '@/directives'
// Vue.use(Directives)

//局部
// import { copy, longpress } from "@/directives";
// export default {
//   directives: { copy, longpress },
// };