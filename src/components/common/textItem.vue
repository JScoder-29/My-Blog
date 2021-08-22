<template>
  <div class="textItem" >
    <ul class="keywords">
      <li v-for = "item in textContent.blog_keywords" :key= "item.index">{{item}}</li>
    </ul>
    <div class="title" @click="readText">{{textContent.blog_title}}</div>
    <div class="time">{{textContent.blog_create_time}}</div>
    <div class="description">{{textContent.blog_description}}</div>
    <button class="readmore" @click="readText">Read More</button>
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
    readText(){
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

.textItem {
  width: 1090px;
  height: 350px;
  padding: 45px 55px;
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 5px;
  -webkit-box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
  box-shadow: 0 4px 8px 6px rgba(7,17,27,.06);
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -o-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
  .keywords {
    display: flex;
    li {
      line-height: 20px;
      color: #EF9120;
      margin-right: 10px;
      padding: 5px 10px;
      border: 3px solid #EF9120;
      border-radius: 15px;
    }
  }
  .title {
    width:max-content;
    font-size: 40px;
    font-weight: 600;
    cursor: pointer;
  }
  .time {
    font-size: 20px;  
  }
  .description {
    font-size: 15px;
  }
  .readmore {
    line-height: 60px;
    width: 200px;
    text-align: center;
    color: #FFF;
    font-size: 20px;
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
}

.textItem:hover {
  -webkit-box-shadow: 0 4px 12px 12px rgba(7, 17, 27,.15);
  box-shadow: 0 4px 12px 12px rgba(7, 17, 27,.15);
}
.readmore:hover {
  -webkit-box-shadow: 0 4px 8px 6px rgba(7,17,27,.1);
  box-shadow: 0 4px 8px 6px rgba(7,17,27,.15);
  font-size: 25px;
}
//完成
</style>