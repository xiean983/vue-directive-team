指令定义函数提供了几个钩子函数（可选）：
    bind: 只调用一次，指令第一次绑定到元素时调用，可以定义一个在绑定时执行一次的初始化动作。

    inserted: 被绑定元素插入父节点时调用（父节点存在即可调用，不必存在于 document 中）。

    update: 被绑定元素所在的模板更新时调用，而不论绑定值是否变化。通过比较更新前后的绑定值。

    componentUpdated: 被绑定元素所在模板完成一次更新周期时调用。

    unbind: 只调用一次， 指令与元素解绑时调用。

module文件夹指令

    复制粘贴指令 v-copy
        <button v-copy="copyText">复制</button>
        copyText:'复制内容'
    按钮点击防抖指令 v-debounce
        <button v-debounce="debounceClick">防抖</button>
        debounceClick(){}
    图片懒加载 v-LazyLoad
        <img v-LazyLoad="xxx.jpg" />
    权限校验指令 v-premission
         <!-- 显示 -->
        <button v-permission="'1'">权限按钮1</button>
        <!-- 不显示 -->
        <button v-permission="'10'">权限按钮2</button></div>
    实现页面水印 v-waterMarker
        <div v-waterMarker="{text:'lzg版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
    拖拽指令 v-draggable
        <div class="el-dialog" v-draggable></div>