<template>
    <div class="empty-data">
      <img :src="img" alt="empty">
    </div>
  </template>
  
  <script>
  export default {
    name: 'EmptyData',
    props: {
      img: {
        type: String,
        default: require('../assets/empty.png'),
      }
    }
  }
  </script>
  
  <style scoped>
  .empty-data {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
  .empty-data img {
    width: 100%;
    height: 100%;
  }
  </style>
  