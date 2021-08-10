<template>
  <div class="background">
      <img class="circle-svg" src="../../assets/imgs/circle.svg" alt="">
      <img class="hero-svg" src="../../assets/imgs/hero.svg" alt="">
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
  height: 100vh;
  background-color: #f5f5fa;
  position: relative;
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