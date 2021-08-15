<template>
  <div id="app">
    <router-view></router-view>
    <div id = "bgBottom">
      <textItem class="item" v-for = "item of text" :key="item.key" :textContent = "item"></textItem>
    </div>
    <div class="editor">
      <mavon-editor
            :value="value"
            :boxShadow="false"
            style="z-index:1;height:50vh"
            :editable="false"
            :subfield="false"
            :toolbarsFlag="false"
            defaultOpen="preview"
          >
      </mavon-editor>
    </div>
    
  </div>
</template>

<script>

import textItem from 'components/common/textItem.vue'
export default {
  name: 'App',
  components: {
    
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
      }],
      value:'dsadasdadashdgjhasgdjhasgdhjasdjhasgdajhsdgjhasgdhjasgdhjasgdhjasgdajdgjhasgdhjasgdjhasgdhjasgdjhasgdhjasgdjhasgdhjasghdjasghjdasgdjhadasd',
      rops: {toolbarsFlag: false, subfield: false, defaultOpen: "preview",fontSize:'50px'},
      markdownOption: {
        bold: true 
      }
    }
  },
  
}
</script>

<style lang="less">
#app {
  color: black;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  background: linear-gradient(
     to right,  
     #07122E,
      
      #060B21;)

}
// .background {
//   padding-top: 80px;
// }
.item {
  margin:30px auto;
}
.editor {
  width: 1000px;
  margin: 0 auto;
  font-size: 50px !important;
}
#bgBottom{
  overflow: hidden;
}
</style>
