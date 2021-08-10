<template>
<div class="textItem">
    <ul class="keywords">
      <li v-for = "item in textContent.keywords" :key= "item">{{item}}</li>
    </ul>
    <div class="title">{{textContent.title}}</div>
    <div class="time">{{textContent.time}}</div>
    <div class="description">{{textContent.description}}</div>
  </div>
</template>

<script>
export default {
  name:'textItem',
  props: [
    "textContent"
  ]
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
    box-shadow: 20px 20px 60px #ced1d6,-20px -20px 60px #fff;
    border-radius: 10px;
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
    }
    .time {
      margin: 0 0 20px 20px;
    }
    .description {
      margin-left: 20px;
    }
  }
</style>