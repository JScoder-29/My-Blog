<template>
  <div id="app">
    <navBar class="navBar"></navBar>
    <background/>
    <textItem v-for = "item of text" :key="item.key" :textContent = "item"></textItem>
  </div>
</template>

<script>
import navBar from 'components/common/navBar.vue'
import background from 'components/home/background.vue'
import textItem from 'components/common/textItem.vue'
export default {
  name: 'App',
  components: {
    navBar,
    background,
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
  }
}
</script>

<style lang="less">
#app {
  color: black;
}
.navBar {
  position: fixed;
  z-index: 999;
}

</style>
