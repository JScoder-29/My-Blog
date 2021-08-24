<template>
  <div class="Home">
    <div class="left">
      <textItem class="item" v-for = "item of text" :key="item.key" :textContent = "item"></textItem>
    </div>
    <div class="right">
      <tag class="tag"></tag>
    </div>
  </div>
</template>

<script>
import textItem from 'components/common/textItem'
import tag from 'components/common/tag'
import {getTitle} from 'network/request.js'

export default {
  name:'Home',
  components: {   
    textItem,
    tag
  },
  data() {
    return {
      text: null,
      value:'',
      title:'',
    }
  },
  methods:{
  },
  created(){
    getTitle().then((resp)=>{
      this.text = resp.data
      for(let i = 0; i < this.text.length; i++){
        this.text[i].blog_keywords = this.text[i].blog_keywords.split(',')
      }  
    })
  },
 
}
</script>

<style lang="less" scoped>
.Home {
  display: flex;
  justify-content: center;
}
.item {
  margin:30px auto;
}
.right {
  width: 200px;
  height: 300px;
  margin:30px;
}
//完成
</style>