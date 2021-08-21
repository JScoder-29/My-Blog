<template>
  <div id="app">
    <background>
    </background>
    <router-view id="bgBottom"></router-view>
    <footer>我是footer</footer>
  </div>
</template>

<script>
import background from 'components/common/background'

export default {
  name: 'App',
  components: {   
    background
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
            rgba(80, 80, 255,.5), 
            rgba(253, 119, 119.3));
  
}

footer {
  width: 300px;
  height: 300px;
  background: pink;
  margin: 0 auto;
}
</style>
