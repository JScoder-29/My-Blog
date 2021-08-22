<template>
    <div class="navBar" :class="{fixed: isFixed}" ref="navBar">
      <router-link to="/" class="logo">YuXi's Blog</router-link>
      <ul class="nav-list">
        <li><router-link to="/"><i class="iconfont">&#xe60f;</i>主页</router-link></li>
        <li><router-link to="/article"><i class="iconfont">&#xe623;</i>文章</router-link></li>
        <li><router-link to="/life"><i class="iconfont">&#xe61b;</i>生活</router-link></li>
        <li><router-link to="/about"><i class="iconfont">&#xe629;</i>关于我</router-link></li>
      </ul>
    </div>
</template>

<script>
export default {
  name: 'navBar',
  data(){
    return {
      isFixed: false
    }
  },
  methods:{
    //固定nav
    fixNav(){
      //做兼容
      const scrollTop =  document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop >60) {
            this.isFixed = true
        } else {
            this.isFixed = false
        }
    }
  },
  mounted(){
    window.addEventListener("scroll", this.fixNav)
  },
  
}
</script>

<style lang="less" scoped>
//覆盖浏览器自带字体颜色
a {
  color: #eee;
}

.navBar {
  position: fixed;
  width: 100%;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  z-index: 999;
  padding: 0 1.9%;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  user-select: none;
  .logo {
    font-size: 24px;
    font-weight: 600;
  }
    li {  
      display: inline-block;
      margin: 0 15px;
      i {
        margin-right: 5px;
      }
      a {
        position: relative;
        font-size: 14px;
        font-weight: 600;  
        padding-bottom: 7px;
      }
      a:after {
        position: absolute;
        bottom: 0;
        left: 0;
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
        width: 100%;
      }
      a:hover {
        color: transparent;
        background: linear-gradient(
                    to bottom right, 
                  rgb(80, 80, 255), 
                  rgb(253, 119, 119));
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }
}

.fixed {
  background: rgba(255,255,255,0.6);
  a {
    color: #000;
  }
}
//完成
</style>