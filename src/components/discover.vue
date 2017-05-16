<template>
  <div class="discover_con">
    <div class="con_top">
      <a href="">
        <i></i>
        英雄资料
      </a>
      <a href="">
        <i></i>
        召唤师查询
      </a>
      <a href="">
        <i></i>
        附近玩家
      </a>
    </div>
    <div class="con_footer">
      <mu-list>
        <router-link  v-for="(con,index) in conList" :to="{path:con.url}" :key="index">
          <mu-list-item :title="con.title">
            <mu-icon slot="left" :value="con.value"/>
          </mu-list-item>
        </router-link>
      </mu-list>
      <mu-divider />
    </div>
  </div>
</template>
<script>
  import { conList } from '../data/discoverData'
  export default{
    data () {
      return {
        conList:conList
      }
    }
  }
</script>
<style lang="scss" scope>
  .discover_con{
    padding-top:10px;
    background:#fff;
    margin-bottom:40px;
  }
  .discover_con .con_top{
    display:flex;
    padding-bottom:10px;
  }
  .discover_con .con_top a{
    flex:1;
    margin:0 20px;
    text-align: center;
    color:#000;
    font-size:12px;
  }
  .discover_con .con_top a i{
    display:block;
    width:34px;
    height:34px;
    margin:0 auto 10px;
    background-position:center center;
    background-repeat:no-repeat;
  }
  .discover_con .con_top a:nth-of-type(1) i{
    background-image:url(/static/image/clubImg/heroInfo.png);
  }
  .discover_con .con_top a:nth-of-type(2) i{
    background-image:url(/static/image/clubImg/playerSearch.png);
  }
  .discover_con .con_top a:nth-of-type(3) i{
    background-image:url(/static/image/clubImg/nearPlayer.png);
  }
  .con_footer .mu-list a{display:block;}
  .con_footer .mu-list a > div{
    border-top: 1px solid #e1e1e1;
  }
  .con_footer .mu-list a .mu-item-left i{
    background-repeat: no-repeat;
    width:24px;
    height:24px;
    color:#d0ac66;
  }
  .con_footer .mu-list a:nth-of-type(1) .mu-item-left i{background-image:url(/static/image/clubImg/lol.png);}
  .con_footer .mu-list a:nth-of-type(2) .mu-item-left i{background-image:url(/static/image/clubImg/gameHelp.png);}
  .con_footer .mu-list a:nth-of-type(3) .mu-item-left i{background-image:url(/static/image/clubImg/gameInfo.png);}
  .con_footer .mu-list a:nth-of-type(4) .mu-item-left i{background-image:url(/static/image/clubImg/specialBar.png);}
  .con_footer .mu-list a:nth-of-type(6) .mu-item-left i{background-image:url(/static/image/clubImg/moment.png);}
</style>
