# vue-directive-team

A collection of directives for vue2.x

## Play with me

https://gitee.com/xiean983/vue-directive-team.git

## Install

```bash
$ npm i vue-directive-team
# or
$ yarn add vue-directive-team
```

## Usage

```javascript
import Vue from 'vue'
import copy from 'vue-directive-team'

Vue.use(copy)
```

```vue
<template>
	复制粘贴指令 v-copy
        <button v-copy="copyText">复制</button>
        copyText:'复制内容'
    按钮点击防抖指令 v-debounce
        <button v-debounce="debounceClick">防抖</button>
       methods: {
			 debounceClick(){}
	   }
    图片懒加载 v-LazyLoad
        <img v-LazyLoad="xxx.jpg" />
    权限校验指令 v-premission
         <!-- 显示 -->
        <button v-permission="'1'">权限按钮1</button>
        <!-- 不显示 -->
        <button v-permission="'0'">权限按钮2</button></div>
    实现页面水印 v-waterMarker
        <div v-waterMarker="{text:'lzg版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
    拖拽指令 v-draggable
        <div class="el-dialog" v-draggable></div>
</template>
```

### 
