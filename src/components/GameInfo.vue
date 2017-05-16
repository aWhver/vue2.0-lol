<template>
  <div class="gameInfo">
    <header-top></header-top>
    <img src="/static/image/discover/goods.png" width="100%" alt="">
  </div>
</template>
<script>
  import headerTop from './commom/header'
  import {mapMutations} from 'vuex'
  export default {
    mounted () {
      this.$store.commit('set_title','物品资料')
    },
    components: {
      headerTop
    }
  }
</script>
<style scope>
  .gameInfo {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    padding-top: 1.8rem;
    background: #fff;
  }
</style>
