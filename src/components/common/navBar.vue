<template>
  <div>
    <div class="navBar">
      <router-link to="/" class="logo">YuXi's Blog</router-link>
      <ul class="nav-list">
        <li><router-link to="/"><i class="iconfont">&#xe60f;</i>主页</router-link></li>
        <li><router-link to="/tech"><i class="iconfont">&#xe623;</i>文章</router-link></li>
        <li><router-link to="/life"><i class="iconfont">&#xe61b;</i>生活</router-link></li>
        <li><router-link to="/about"><i class="iconfont">&#xe629;</i>关于我</router-link></li>
      </ul>
    </div>
  </div> 
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.navBar {
  width: 100%;
  height: 60px;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #eee;
  z-index: 999;
  padding: 0 36px;
  a {
    position: relative;
    text-shadow: 0.05rem 0.05rem 0.1rem rgba(0,0,0,.3);
    font-size: 0.78em;
    font-weight: 600;
    text-align: center;
    line-height: 60px;
    color: #eee;
    padding-bottom: 0.5em;
  }
  
  .logo {
    font-size: 24px;
    font-weight: 600;
  }
  ul {
    min-width: 258px;
    text-align: center;
    li {
      line-height: 60px;
      display: inline-block;
      margin: 0 15px;
      a:after {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 0;
    height: 3px;
    background-color: #69bee0;
    content: '';
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
      a:hover:after {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 5;
    width: 50px;
    height: 3px;
    background-color: #69bee0;
    content: '';
    -webkit-transition: all 0.3s ease-in-out;
    -moz-transition: all 0.3s ease-in-out;
    -o-transition: all 0.3s ease-in-out;
    -ms-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
}
      i {
        margin-right: 5px;
      }
    }
    a:hover {
    color: transparent;
    background: linear-gradient(
     to bottom right, 
      rgb(80, 80, 255), 
      rgb(253, 119, 119));
    background-clip: text;
    -webkit-background-clip: text;
    /* -webkit-text-fill-color: transparent; */
    };
  }
}
</style>