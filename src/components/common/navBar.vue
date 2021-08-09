<template>
  <div class="navBar">
    <ul class="nav-list">
      <li><a href="#">主页</a></li>
      <li><a href="#">技术</a></li>
      <li><a href="#">生活</a></li>
      <li><a href="#" class="ctn">关于我</a></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.navBar {
  width: 100%;
  padding: 10px 50px;
  align-items: center;
  background: linear-gradient(
    to left,
    #0B486B,
    #F56217
  );;
  ul {
    text-align: right;
    li {
        display: inline-block;
        margin: 0 25px;
        a {
          color: #fff;
        }
      }
  }
}
</style>