<template>
  <div id="app">
    <div class="example">
      <button @click="showMask">show Mask</button>
    </div>
  
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
     
    }
  },
  methods: {
    showMask(){
      this.$mask.show();
      setTimeout(()=>{
        this.$mask.hide();
      },2000)
    }
  }
}
</script>

<style lang="css">
.example {
  text-align: center;
  margin-bottom: 20px;
}
</style>
