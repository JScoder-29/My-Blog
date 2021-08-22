<template>
  <div class="Detail">
    <div class="editor">
      <mavon-editor
            :value="value"
            :boxShadow="false"
            style="z-index:1;height:50vh"
            :editable="false"
            :subfield="false"
            :toolbarsFlag="true"
            defaultOpen="preview"
            :navigation="false"
            :toolbars="toolbars"
            class="markdown"
          >
      </mavon-editor>
    </div>
  </div>
</template>

<script>
import {getText} from 'network/request.js'

export default {
  name: 'Detail',
  data() {
    return {
      text: null,
      value:'',
      title:'',
      id: null,
     toolbars: {
      navigation: false, // 导航目录
      }
    }
  },
  methods:{
  },
  created(){
    getText(this.$route.query.id).then((resp)=>{
      this.title = resp.data[0].blog_title
      this.value = resp.data[0].blog_text;
    }).catch((err)=>{
      console.log(err);
    }); 
  },
}
</script>

<style lang="less" scoped>
.editor {
  width: 65%;
  margin: 0 auto;
}
.markdown {
  height: auto !important;
  font-size: 18px !important;
  padding: 100px 10%;
  background: #FBFBFB !important;
}
</style>