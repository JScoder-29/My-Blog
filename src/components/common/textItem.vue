<template>
<div class="textItem" >
    <ul class="keywords">
      <li v-for = "item in textContent.blog_keywords" :key= "item.index">{{item}}</li>
    </ul>
    <div class="title" @click="tt">{{textContent.blog_title}}</div>
    <div class="time">{{textContent.blog_create_time}}</div>
    <div class="description">{{textContent.blog_description}}</div>
  </div>
</template>

<script>

export default {
  name:'textItem',
  props: {
    textContent:{
      type: Object,
      default(){
        return {}
      }
    }
  },
  methods: {
    tt(){
      this.$router.push({
        path: '/detail',
        query: {id: this.textContent.id}
      })
    }
  },
  created(){
  }
}
</script>

<style lang="less" scoped>
  @media screen and (max-width: 1440px) {
    .textItem {
      width: 200px;
    }

  }
  .textItem {
    width: 1090px;
    height: 350px;
    padding: 25px 45px;
    // box-shadow: 20px 20px 60px #ced1d6,-20px -20px 60px #fff;
    border-radius: 10px;
    background: #fff;
    .keywords {
      display: flex;
      margin-left: 10px;
      li {
        line-height: 20px;
        color: #EF9120;
        margin-left: 10px;
        padding: 5px 10px;
        border: 3px solid #EF9120;
        border-radius: 15px;
      }
    }
    .title {
      margin: 20px 20px 5px;
      font-size: 40px;
      font-weight: 600;
      cursor: pointer;
    }
    .time {
      margin: 0 0 20px 20px;
    }
    .description {
      margin-left: 20px;
    }
  }
</style>