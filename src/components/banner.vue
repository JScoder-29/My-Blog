<template>
  <div class="banner">
    <div class="page1"></div> 
    <div class="page2"></div>
    <div class="page3"></div>
  </div>
</template>

<script>
export default {
  name:'banner'
}
</script>

<style lang="less" scoped>
  .banner {
    height: 300px;
    width: 300px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%);
    div {
      height: 200px;
      width: 200px;
      background: #fff;
      position: absolute;
      border-radius: 10px;
      box-shadow:  0 0 2px rgba(0, 0, 0, .5);
    }
    .page1 {
      z-index: 7;
    }
    .page2 {
      left: 30px;
      top: -30px;
      z-index: 6;
    }
    .page3 {
      left: 60px;
      top: -60px;
      z-index: 5;
    }
  }
</style>