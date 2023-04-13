# vue-directive-team

A collection of directives for vue2.x

## Install

```bash
$ npm i vue-directive-team
# or
$ yarn add vue-directive-team
```

## Usage

```javascript
import Vue from 'vue'
import directive from 'vue-directive-team'

Vue.use(directive)
```

**v-copy**
```vue
    <button v-copy="copyText">复制</button>
```

**v-debounce**

```vue
    <button v-debounce="debounceClick">防抖</button>
    <script>
        methods: {
            debounceClick() {}
        }
    </script>
```

**v-LazyLoad**

```vue
    <img v-LazyLoad="xxx.jpg" />
```

**v-premission**

```vue
    <!-- 显示 -->
    <button v-permission="'1'">权限按钮1</button>
    <!-- 不显示 -->
    <button v-permission="'0'">权限按钮2</button></div>
```

**v-waterMarker**

```vue
    <div v-waterMarker="{text:'版权所有',textColor:'rgba(180, 180, 180, 0.4)'}"></div>
```

**v-draggable**

```vue
    <div class="el-dialog" v-draggable></div>
```

**v-empty**
```vue
    <div class="empty" v-empty="value">
      <span class="echart1">111</span>
    </div>
    <script>
        data(){
            return{
                el: 'echart1', // 需要展示数据的dom类名
                value: false,  // 是否有数据的状态
                emimgpty: require('../assets/empty.png'), // 无数据的图片
            }
        }
    </script>
```