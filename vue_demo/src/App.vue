<template>
  <div id="app">
    <keep-alive include='Home'>
      <router-view/>
    </keep-alive>
    
  </div>
</template>
<script>
import request from "./utils/request.js";
import {mapState,mapGetters, mapMutations} from 'vuex';
export default {
  name: "App",
  created() {
    request.get("/api/user/info");
  }, 
  data(){
    return {
      text:''
    }
  },
  computed:{
    ...mapState(['num','list'])
  },
  methods:{
    ...mapMutations(['CHANGE_NUM','ADD_LIST']),
    addlist(){
      // console.log(text)
      if(this.text.trim() !== ''){
        this.ADD_LIST(this.text)
        this.text = '';
      }
    }
  }
};
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
