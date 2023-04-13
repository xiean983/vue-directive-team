<template>
  <div class="hello">
    <!-- <button v-copy="msg">{{ msg }}</button> -->
    <!-- <div class="empty" v-empty="value">
      <span class="echart1">111</span>
    </div> -->
    <div class="list">
      <img v-lazyLoad="img" alt="" v-for="(img, index) in imgList" :key="index">
    </div>
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
      value: {
        el: 'echart1',
        value: false,
        emimgpty: require('../assets/empty.png'),
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
