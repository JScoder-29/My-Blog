<template>
  <div class="about" @mouseup.self="change2">
    <div class="in" :class="{'out':nita}"
    @mousedown="change"
    @mouseup.self="change3"
    >
    <input type="text"  @keydown="keydow" @keyup="keyup">
    </div>
    <div class="row" ref="ss">
      <button class="nibtn" ref="Q">Q</button>
      <button class="nibtn">W</button>
      <button class="nibtn">E</button>
      <button class="nibtn">R</button>
      <button class="nibtn">T</button>
      <button class="nibtn">Y</button>
      <button class="nibtn">U</button>
      <button class="nibtn">I</button>
      <button class="nibtn">O</button>
      <button class="nibtn">P</button>
    </div>
    <div class="row">
      <button class="nibtn">A</button>
      <button class="nibtn">S</button>
      <button class="nibtn">D</button>
      <button class="nibtn">F</button>
      <button class="nibtn">G</button>
      <button class="nibtn">H</button>
      <button class="nibtn">J</button>
      <button class="nibtn">K</button>
      <button class="nibtn">L</button>
    </div>
    <div class="row row3">
      <button class="nibtn">z</button>
      <button class="nibtn">X</button>
      <button class="nibtn">C</button>
      <button class="nibtn">V</button>
      <button class="nibtn">B</button>
      <button class="nibtn">N</button>
      <button class="nibtn">M</button>
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
    },
    keydow(event){
      for(let i = 0; i < 10; i++){
        if(event.keyCode == this.$refs.ss.children[i].innerText.charCodeAt()){
          this.$refs.ss.children[i].classList.add('nibtn-inset');
        }
      }
    },
    keyup(event){
      for(let i = 0; i < 10; i++){
        if(event.keyCode == this.$refs.ss.children[i].innerText.charCodeAt()){
          this.$refs.ss.children[i].classList.remove('nibtn-inset');
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
button {
  height: 40px;
  width: 60px;
  border-radius: 3px;
  margin: 5px;
  border: none;
  user-select: none;
}
.nibtn {
  flex-shrink: 0;
  background-color: var(--nibgc);
  box-shadow: 3px 3px 6px var(--nishadowdark),
             -3px -3px 6px var(--nishadowlight);
}
.nibtn:hover {
  box-shadow: inset 3px 3px 6px var(--nishadowdark),
              inset -3px -3px 6px var(--nishadowlight);
}
.nibtn-inset {
  box-shadow: inset 3px 3px 6px var(--nishadowdark),
              inset -3px -3px 6px var(--nishadowlight);
}
.row {
  align-items: center;
  display: flex;
  justify-content: center;
}
.row3 {
padding-right: 70px;
}
.about {
  height: 500px;
  overflow: hidden;
}
.in {
  width: 100px;
  height: 100px;
  margin: 0 auto;
  margin-top: 50px;
  border-radius: 50%;
  background: var(--nibgc);
  box-shadow:  5px 5px 10px var(--nishadowdark),
             -5px -5px 10px var(--nishadowlight);
  transition: all 1s;
   user-select:none;
   text-align: center;
   line-height: 100px;
}
.out {
background: var(--nibgc);
box-shadow: inset 5px 5px 10px var(--nishadowdark),
            inset -5px -5px 10px var(--nishadowlight);
}
</style>