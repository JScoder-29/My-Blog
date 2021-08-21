<template>
  <div class="background" :class="{'specialClass':this.$route.name =='home'}">
    <navBar></navBar>
    <div class="welcome">
      <span><slot>YuXi's Blog</slot></span>
      <p>
        <slot></slot>
      </p>
    </div> 
    <div class="scroll-down">
      <i class="iconfont" @click="scrollDown">&#xe61d;</i>
    </div>
  </div>
</template>

<script>
import navBar from 'components/common/navBar.vue'
export default {
  name:'background',
  components: {
    navBar
  },
  data(){
    return{
     
    }
  },
  methods:{
  //滑动出背景
    scrollDown(){
      bgBottom.scrollIntoView({
       behavior: "smooth", block: "start", inline: "nearest"
      });
    }
  }
}
</script>


<style lang="less" scoped>

.background {
  height: 50vh;
  background-image: url(../../assets/imgs/home_bg.png);
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  position: relative;
  color: #fff;
  -webkit-transition: all 0.3s ease-in-out;
  -moz-transition: all 0.3s ease-in-out;
  -o-transition: all 0.3s ease-in-out;
  -ms-transition: all 0.3s ease-in-out;
  transition: all 0.3s ease-in-out;
  // animation: scaleup 1s;
  
  .welcome {
    text-align: center;
    position: absolute;
    top: 43%;
    padding: 0 0.5rem;
    width: 100%;
    
    span {
      line-height: 1.5;
    font-size: 2.85em;
    font-weight: 600;
    text-shadow: 0.1rem 0.1rem 0.2rem rgba(0, 0, 0,.15);
    }
    p {
      font-size: 20px;   
    }
  }
  .scroll-down{
    width: 100%;
    height: 3em;
    position: absolute;
    bottom: 0;
    i {
      width: 100%;
      text-align: center;
      cursor: pointer;
      position: absolute;
      font-size: 2.8em;
      animation: scrolldown 1s ease-in-out infinite;
    }
  }
}
.welcome span:hover {
color: transparent;
background: linear-gradient(
    to bottom right, 
    rgb(80, 80, 255), 
    rgb(253, 119, 119));;
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
};

@keyframes scrolldown {
  0% {
    top: 0;
    opacity: 0.4;
  }
  50% {
    top: -16px;
    opacity: 1;
  }
  100% {
    top: 0;
    opacity: 0.4;
  }
}
@keyframes scaleup {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}
@keyframes up {
  0% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(10px);
  }
}

.specialClass {
  height: 100vh;
}
</style>