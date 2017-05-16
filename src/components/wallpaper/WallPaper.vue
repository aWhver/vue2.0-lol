<template>
  <div class="wallPaper">
    <header-top></header-top>
    <section class="wallpaper-box">
      <div class="type">
        <ul>
          <li>
            <router-link to="/championList/disc/wallpaper/New">最新</router-link>
          </li>
          <li>
            <router-link to="/championList/disc/wallpaper/Hot">最热</router-link>
          </li>
          <li>
            <router-link to="/championList/disc/wallpaper/Collection">收藏</router-link>
          </li>
        </ul>
      </div>
      <router-view></router-view>
    </section>
  </div>

</template>
<script>
  import headerTop from '../commom/header'
  import {mapMutations} from 'vuex'
  export default {
    mounted () {
      this.$store.commit('set_title','壁纸')
    },
    components: {
      headerTop
    }
  }
</script>
<style lang="scss" scope>
  .wallPaper {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    padding-top: 1.8rem;
    background: #fff;
    .type ul{
      display:flex;
      li{
        flex:1;
        a{
          display:block;
          text-align: center;
          padding:0.5rem 0;
          &.router-link-active{
            color:#d3bf8d;
          }
        }
      }
    }
  }
</style>
