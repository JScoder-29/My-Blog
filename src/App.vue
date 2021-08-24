<template>
  <div id="app">
    <background></background>
    <router-view></router-view>
    <myFooter></myFooter>
  </div>
</template>

<script>
import background from 'components/common/background'
import myFooter from 'components/common/myFooter'
export default {
  name: 'App',
  components: {   
    background,
    myFooter
  },
  data() {
    return {
    }
  },

  methods:{
  },
  created(){

  },
  mounted(){
  
  }
}

  

</script>

<style lang="less">

#app {
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  background: linear-gradient(
              to  right, 
            rgba(80, 80, 255,.3), 
            rgba(253, 119, 119,.3));
  
}


</style>
