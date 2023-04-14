<template>
  <div class="hello">
    <!-- <div class="empty" v-empty="value">
      <span class="echart1">
        <div class="echart1" v-for="(item, index) in value.list" :key="index" v-highlight="{value: item.title, keyword: '书籍', color: 'red' }">{{ item.title }}</div>
      </span>
    </div> -->
    <button v-throttling="{ fn: addNum, delay: 3000 }">{{ num }}</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      num: 1,
      value: {
        list: [],
        img: require('../assets/empty.png'),
        el: 'echart1',
      },
      imgList: [
        require('../assets/empty.png'),
        require('../assets/empty1.png'),
        require('../assets/empty2.png'),
        require('../assets/empty3.png')
      ]
    }
  },
  mounted() {
    // 模拟异步请求
    setTimeout(() => {
      this.value.list = [
        { id: 1, title: '文章1' },
        { id: 2, title: '文章2' }
      ]
    }, 3000)
    setTimeout(() => {
      this.value.list = [
        { id: 1, title: '书籍1' },
        { id: 2, title: '文章2' }
      ]
    }, 5000)
  },
  methods: {
    addNum() {
      this.num++
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello,
.empty,
.list {
  width: 100vw;
  height: 100vh;
  background-color: #f5f5f5;
}

.list img {
  width: 100vw;
  height: 100vh;
}
</style>
