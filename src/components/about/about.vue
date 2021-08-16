<template>
  <div class="about" @mouseup.self="change2">
    <div class="in" :class="{'out':nita}"
    @mousedown="change"
    @mouseup.self="change3"
    >sss 
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data(){
    return{
      nita: false,
      is:false
    }
  },
  methods: {
    change(){
      this.is = true
      this.nita = !this.nita
    },
    change2(){
      if(this.is){
        this.nita = !this.nita
      }
      this.is = false
    },
    change3(){
      this.is = false
    }
  }
}
</script>

<style lang="less" scoped>
.about {
  height: 500px;
  background: #ebd1dd;
  overflow: hidden;
}
.in {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 50%;
  background: #ebd1dd;
  box-shadow:  5px 5px 10px #8f7f87,
             -5px -5px 10px #ffffff;
  transition: all 1s;
   user-select:none;
   text-align: center;
   line-height: 100px;
}
.out {
background: #ebd1dd;
box-shadow: inset 5px 5px 10px #8f7f87,
            inset -5px -5px 10px #ffffff;
}
</style>