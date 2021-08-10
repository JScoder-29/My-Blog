<template>
  <div class="navBar">
    <a href="#" class="logo">yuxi.com</a>
    <ul class="nav-list">
      <li><a href="#">主页</a></li>
      <li><a href="#">技术</a></li>
      <li><a href="#">生活</a></li>
    </ul>
    <div class="search">
      <input type="text">
    </div>
    <a href="#" class="ctn">关于我</a>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.navBar {
  width: 100%;
  height: 80px;
  font-size: 18px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: rgba(55,58,80,.05) 0px 16px 32px, 
              rgba(55,58,80,.05) 0px 8px 16px, 
              rgba(55,58,80,.05) 0px 4px 8px, 
              rgba(55,58,80,.05) 0px 2px 4px, 
              rgba(55,58,80,.05) 0px 1px 2px;
  background: #fff;
  a {
    text-align: center;
    line-height: 80px;
    color: #484c7a;
  }
  .logo {
    font-size: 24px;
    font-weight: 600;
    color: #5468FF;
  }
  .search {
    line-height: 80px;
    input {
      height: 48px;
      width: 300px;
    }
  }
  ul {
    min-width: 258px;
    text-align: center;
    li {
      line-height: 80px;
      display: inline-block;
      margin: 0 25px;
      a {
        color: #484c7a;
      }
    }
  }
  .ctn {
    width: 128px;
    height: 48px;
    line-height: 48px;
    color: #fff;
    background: linear-gradient(
    to bottom left, 
    #5ADAFF, 
    #5468FF);
    box-shadow: 0px 2px 4px rgba(45, 35, 66, .4), 
                0px 7px 13px -3px rgba(45, 35, 66, .3), 
                inset 0px -3px 0px rgba(58, 65, 111, .5);
    text-shadow: 0 1px 0 rgba(0, 0, 0, .4);
    border-radius: 4px;
  }
}
</style>