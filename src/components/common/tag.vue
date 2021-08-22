<template>
  <div class="father" ref="right">
    <div class="tags" :class="{fix:this.fixed}" >
      我是tag
    </div>
  </div>
  
</template>

<script>
export default {
  name:'tag',
  data(){
    return {
      fixed: false
    }
  },
  methods:{
    //固定tag
    fixTag(){
      //视图中不存在tag组件时,移除绑定事件
      if(this.$refs.right == undefined){
        window.removeEventListener("scroll", this.fixTag)
      }else{
        const scrollTop =  this.$refs.right.getBoundingClientRect().top
        if (scrollTop <80 ) {
            this.fixed = true
        } else {
            this.fixed = false
        }
      }
    }
  },
  mounted(){
    window.addEventListener("scroll", this.fixTag)
  }
}
</script>

<style lang="less" scoped>
.tags {
  width: 200px;
  height: 300px;
  background: #000;
}
.fix {
  position: fixed;
  top:80px
}

</style>