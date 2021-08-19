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
import {request,getText} from 'network/request.js'
import textItem from 'components/common/textItem.vue'


export default {
  name: 'App',
  components: {   
    textItem,
  },
  data() {
    return {
      text: null,
      value:'',
     toolbars: {
      navigation: false, // 导航目录
      }

    }
  },
  created(){
    // const  _this = this
    // this.$axios.get('http://39.105.118.1:3000/getText?id=2').then(function (resp) {
    //     _this.value = resp.data[0].blog_text;
    //   })
    // this.$axios.get('http://39.105.118.1:3000/getTitle').then(function (resp) {
    //     _this.text = resp.data
    //     console.log(_this.text);
    //     for(let i = 0; i < _this.text.length; i++){
    //       _this.text[i].blog_keywords = _this.text[i].blog_keywords.split(',')
    //     }  
    //   })
    // request({
    //   url: '/getText?id=2'
    // }).then((resp)=>{
    //   this.value = resp.data[0].blog_text;
    // });
    getText('2').then((resp)=>{
      this.value = resp.data[0].blog_text;
    }).catch((err)=>{
      console.log(err);
    });
    request({
      url: '/getTitle'
    }).then((resp)=>{
      this.text = resp.data
      for(let i = 0; i < this.text.length; i++){
          this.text[i].blog_keywords = this.text[i].blog_keywords.split(',')
      }  
    })
  }
}

//   beforeMount(){
//     axios({
//   url: 'http://localhost:3000/getText'
// }).then(res => {
//   this.value = res
// })
//   }
  

</script>

<style lang="less">
#app {
  color: black;
  font-family: Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,SimSun,sans-serif;
  background: linear-gradient(
    to  right, 
    rgba(80, 80, 255,.5), 
    rgba(253, 119, 119.3))

}
// .background {
//   padding-top: 80px;
// }
.item {
  margin:30px auto;
}
.editor {
  width: 1300px;

  margin: 0 auto;
  
}
.markdown {
  height: auto !important;
  font-size: 18px !important;
  padding: 100px 300px;
  background: #FBFBFB !important;
}
#bgBottom{
  overflow: hidden;
}
</style>
