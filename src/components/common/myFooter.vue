<template>
  <div class="myFooter">
    <hr>
    <div class="copyright">
      <h4>Copyright</h4>
      <h4>YuXi's Blog</h4>
      <h4>Policy</h4>
    </div>
  </div>
</template>

<script>
export default {
  name:'myFooter'
}
</script>

<style lang="less" scoped>
.myFooter {
  margin-top: 150px;
  hr {
    width: 90%;
    height: 4px;
    background-color: black;
    margin: 0 auto;
  }
  .copyright {
    display: flex;
    justify-content: space-around;
    color: black;
    padding: 30px;
    font-weight: 400;
  }
}
//完成
</style>