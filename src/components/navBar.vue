<template>
  <div class="navBar">
    <i class="iconfont">&#xe61a;</i>
    <ul>
      <li>主页</li>
      <li>技术</li>
      <li>生活</li>
      <li>健康</li>
      <li>关于我</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navBar'
}
</script>

<style lang="less" scoped>
  .navBar {
    display: flex;
  }
  i {
    font-size: 40px;
    position: absolute;
    top: 30px;
    left: 50px;
  }
  ul {
    height: 60px;
    width: 800px;
    display: flex;
    justify-content: space-evenly;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translateX(-50%);
    li {
      width: 130px;
      line-height: 60px;
      text-align: center;
      
      background: rgba(255, 255, 255, 0.2);
    }
    li:hover {
     
      background: rgba(255,255,255,.6);  
    }
  }

</style>