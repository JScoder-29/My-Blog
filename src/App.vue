<template>
  <div id="app">
    <navBar></navBar>
    <router-view></router-view>
    <textItem class="item" v-for = "item of text" :key="item.key" :textContent = "item"></textItem>
  </div>
</template>

<script>
import navBar from 'components/common/navBar.vue'
import textItem from 'components/common/textItem.vue'
export default {
  name: 'App',
  components: {
    navBar,
    textItem
  },
  data() {
    return {
      text: [{
        key: 1,
        title: '数据类型转换',
        time: '2021-08-02',
        keywords: ['Javascript', '基础'],
        description: '简单的规则是',
      },{
        key: 2,
        title: '数据类型转换',
        time: '2021-08-02',
        keywords: ['Javascript', '基础'],
        description: '简单的规则是',
      },{
        key: 3,
        title: '数据类型转换',
        time: '2021-08-02',
        keywords: ['Javascript', '基础'],
        description: '简单的规则是',
      }]
    }
  },
  
}
</script>

<style lang="less">
#app {
  color: black;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  background: #fafafa;
}
// .background {
//   padding-top: 80px;
// }
.item {
  margin:30px auto;
}

</style>
