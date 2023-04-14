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
    })
  },
}