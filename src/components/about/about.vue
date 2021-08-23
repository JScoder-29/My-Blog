<template>
  <div class="about">
    <div class="keyboard">
      <div class="row" ref="row1">
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
      <div class="row" ref="row2">
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
      <div class="row row3" ref="row3">
        <button class="nibtn">z</button>
        <button class="nibtn">X</button>
        <button class="nibtn">C</button>
        <button class="nibtn">V</button>
        <button class="nibtn">B</button>
        <button class="nibtn">N</button>
        <button class="nibtn">M</button>
      </div>
    </div>
    <div class="CV column">
      <textarea class="nibtn-inset" :placeholder = msg  @keydown="keydown" @keyup="keyup"  ref ='text'>
      </textarea>
      <div class="personal cv">
          <div class="row">
            <img class="nibtn-inset" src="../../assets/imgs/home_bg.png" alt="">
          </div>
          <div class="row">
            <div class="nibtn icon "><i class="iconfont">&#xe60f;</i></div>
            <div class="nibtn icon"><i class="iconfont">&#xe60f;</i></div>
            <div class="nibtn icon"><i class="iconfont">&#xe60f;</i></div>
            <div class="nibtn icon"><i class="iconfont">&#xe60f;</i></div>
          </div>
      </div>
      <div class="info cv">
        <div>
          <h1>{{title}}</h1>
          <hr>
          <p>打手我开大会急死偶家的零售价低拉丝机我old静安寺垃圾啦家水利局动力熬时间地拉伸李大师俩是都俩数据的俩是</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data(){
    return{
      msg:'打字试试？',
      title:'title'
    } 
  },
  methods: {
    keydown(event){
      console.log(this.$refs.text.value);
      for(let i = 0; i < 10; i++){
        if(event.keyCode == this.$refs.row1.children[i].innerText.charCodeAt()){
          this.$refs.row1.children[i].classList.add('nibtn-inset');
          return
        }
      }
      for(let i = 0; i < 9; i++){
        if(event.keyCode == this.$refs.row2.children[i].innerText.charCodeAt()){
          this.$refs.row2.children[i].classList.add('nibtn-inset');
          return
        }
      }
      for(let i = 0; i < 7; i++){
        if(event.keyCode == this.$refs.row3.children[i].innerText.charCodeAt()){
          this.$refs.row3.children[i].classList.add('nibtn-inset');
          return
        }
      }
    },
    keyup(event){
      for(let i = 0; i < 10; i++){
        if(event.keyCode == this.$refs.row1.children[i].innerText.charCodeAt()){
          this.$refs.row1.children[i].classList.remove('nibtn-inset');
          return
        }
      }
      for(let i = 0; i < 9; i++){
        if(event.keyCode == this.$refs.row2.children[i].innerText.charCodeAt()){
          this.$refs.row2.children[i].classList.remove('nibtn-inset');
          return
        }
      }
      for(let i = 0; i < 7; i++){
        if(event.keyCode == this.$refs.row3.children[i].innerText.charCodeAt()){
          this.$refs.row3.children[i].classList.remove('nibtn-inset');
          return
        }
      }
    },
  }
}
</script>

<style lang="less" scoped>
.keyboard {
  margin-top: 30px;
}
textarea {
  border: none;
  background-color: var(--nibgc);
  height: 100px;
  width: 200px;
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
}
hr {
  margin: 20px 0;
}
.info {
  width: 900px;
  height: 400px;
  border-radius: 10px;
  margin: 20px;
  padding: 50px;
}
img {
  height: 100px;
  width: 100px;
  border-radius: 50%;
  padding: 15px;
}
.personal {
  width: max-content;
  padding: 20px;
  margin: 20px;
  border-radius: 10px;
}
.icon {
  height: 42px;
  width: 42px;
  margin: 10px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
}
button {
  height: 40px;
  width: 60px;
  border-radius: 3px;
  margin: 5px;
  border: none;
  user-select: none;
}
.nibtn,.cv {
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
.column {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.row3 {
padding-right: 70px;
}
</style>