<template>
  <div class="index">
    <div class="index-title">
      <mu-flexbox>
        <mu-flexbox-item class="back-flex" grow="1">
        </mu-flexbox-item>
        <mu-flexbox-item class="title-flex" grow="5">
          {{title}}
        </mu-flexbox-item>
        <mu-flexbox-item class=""  grow="1">
        </mu-flexbox-item>
      </mu-flexbox>
    </div>
    <transition name="">
      <router-view></router-view>
    </transition>
    <mu-paper>
      <mu-bottom-nav :value="bottomNav" shift @change="changeNav">
        <mu-bottom-nav-item value="news" title="资讯" icon="fiber_new"/>
        <mu-bottom-nav-item value="player" title="好友" icon="person"/>
        <mu-bottom-nav-item value="championList" title="发现" icon="pets"/>
        <mu-bottom-nav-item value="video" title="视频" icon="ondemand_video"/>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>
<script>
  import { mapState } from 'vuex'
  export default {
    name : 'index',
    data () {
      return {
        bottomNav: 'news',
      }
    },
    mounted () {
      const Nav = this.$route.name;
      switch(Nav){
        case 'news':
          this.bottomNav = 'news';
          break;
        case 'player':
          this.bottomNav = 'player';
          break;
        case 'championList':
          this.bottomNav = 'championList';
          break;
        case 'video':
          this.bottomNav = 'video';
          break;
      }
    },
    computed: mapState({
        title : state => state.title
    }),
    methods: {
        changeNav (val) {
            this.bottomNav = val ;
            this.$router.push({name:val});
        }
    }
  }
</script>
<style scoped>
  .index-title{
    position:fixed;
    top:0;
    width:100%;
    z-index:99;
  }
  .mu-flexbox {
    background: #03a9f4;
    height: 1.8rem;
  }
  .title-flex {
    text-align: center;
    color: #fff;
    font-size: 18px;
  }
  .back-flex {
    color: #fff;
  }
  .mu-bottom-nav-shift-wrapper .mu-buttom-item{
    min-width:64px;
  }
  .mu-paper{
    position:fixed;
    bottom:0;
    width:100%;
  }




</style>
