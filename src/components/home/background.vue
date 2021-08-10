<template>
  <div class="background">
    <div class="welcome">
      <span>Welcome，我是钰熙！</span>
      <p>这是我的博客平台，我会在这里记录自己的学习，项目和生活！</p>
    </div>
    <div class="img">
      <img class="circle-svg" src="../../assets/imgs/circle.svg" alt="">
      <img class="hero-svg" src="../../assets/imgs/hero.svg" alt="">
    </div>   
  </div>
</template>

<script>

export default {
  name:'background',
  components: {

  },
  data(){
    return{
     
    }
  }
}
</script>

<style lang="less" scoped>
.background {
  // width: 100vw;
  height: calc(100vh - 80px);
  background-color: #f5f5fa;
  position: relative;
  
  .welcome {
    width: 45%;
    position: absolute;
    top: 30%;
    left: 7%;
    z-index: 2;
    
    span {
      height: 56px;
      font-size: 60px;
      font-weight: 600;
    }
    p {
      
      position: absolute;
      top: 120px;
      font-size: 20px;
    }
  }
  .img {
    height: 100vh;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    
    .circle-svg {
      width: 500px;
      animation: scaleup 6s ease-in-out infinite;
    }
    .hero-svg {
      width: 800px;
      animation: up 6s ease-in-out infinite;
    }
  }

 
}

@keyframes scaleup {
  0% {
    transform: scale(1.2);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.2);
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


</style>