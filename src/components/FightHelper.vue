<template>
  <div class="fightHelper">
    <header-top></header-top>
    <section class="fightInfo">
      <figure>
        <img src="/static/image/discover/zhanji.png" alt="">
      </figure>
      <p class="tip">当前没有对战 <br>选择一场战绩给曾经的战友们添加印象吧</p>
      <router-link to="/">去战绩列表</router-link>
    </section>
  </div>

</template>
<script>
  import headerTop from './commom/header'
  import {mapMutations} from 'vuex'
  export default {
    mounted () {
      this.$store.commit('set_title','对战助手')
    },
    components: {
      headerTop
    }
  }
</script>
<style lang="scss" scope>
  .fightHelper{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
   padding-top: 1.8rem;
    background:#fff;
    section.fightInfo{
      padding-top:6rem;
      img{
        display:block;
        margin:0 auto;
      }
      p.tip{
        text-align: center;
        line-height:1.3rem;
        margin-top:1rem;
      }
      a{
        color:#fff;
        background:#4487c2;
        display:block;
        margin:0 10px;
        padding:10px 0;
        text-align: center;
        border-radius: 6px;
        font-size:16px;
      }
    }
  }

</style>
