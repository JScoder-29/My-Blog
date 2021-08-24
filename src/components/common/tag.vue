<template>
  <div class="father" ref="right">
    <div class="tags" :class="{fix:this.fixed}">
      <p>标签分类</p>  
      <ul class="classify">
        <li v-for = "item,index in classify" :key= "index" @click="getClassify(item)">{{item}}</li>
      </ul>
    </div>
  </div>
  
</template>

<script>
export default {
  name:'tag',
  data(){
    return {
      fixed: false,
      classify:['javascript', '数据类型', '任务轮询']
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
    },
    getClassify(tag){
      this.$router.push({
        path: '/tag',
        query: {tag: tag}
      })
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
  padding: 30px 40px;
  background: transparent;
  -webkit-box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
  box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
  p {
    font-size: 18px;
  }
  .classify {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    li {
      line-height: 40px;
      width: 100%;
      margin: 20px auto;
      text-align: center;
      color: #FFF;
      font-size: 16px;
      background-color: #EF9120;   
      border: none;
      border-radius: 2px;
      cursor: pointer;
      -webkit-box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
      box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
      transition: all 0.3s;
      -webkit-transition: all 0.3s;
      -moz-transition: all 0.3s;
      -o-transition: all 0.3s;
      -ms-transition: all 0.3s;
    }
    li:hover {
      -webkit-box-shadow: 0 4px 8px 6px rgba(7,17,27,.1);
      box-shadow: 0 4px 8px 6px rgba(7,17,27,.15);
      transform: scale(1.2);
    }
  }
}
.tags:hover {
  -webkit-box-shadow: 0 4px 12px 12px rgba(7, 17, 27,.15);
  box-shadow: 0 4px 12px 12px rgba(7, 17, 27,.15);
}

.fix {
  position: fixed;
  top:80px
}
//完成
</style>