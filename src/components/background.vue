<template>
  <div class="background">
    <navBar></navBar>
    <banner></banner>
  </div>
</template>

<script>
import navBar from './navBar.vue'
import banner from './banner.vue'
export default {
  name:'background',
  components: {
    navBar,
    banner
  }
}
</script>

<style lang="less" scoped>
.background {
  position: relative;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    to bottom,
    #C9ACD4,
    #BF7EA7,
    #C24A52
  );
 
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 500px;
  min-width: 800px;
}


</style>