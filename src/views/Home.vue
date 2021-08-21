<template>
  <div class="Home">
    <textItem class="item" v-for = "item of text" :key="item.key" :textContent = "item"></textItem>
  </div>
</template>

<script>
import {getTitle} from 'network/request.js'
import textItem from 'components/common/textItem'
export default {
  name:'Home',
  components: {   
    textItem
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
.item {
  margin:30px auto;
}
</style>