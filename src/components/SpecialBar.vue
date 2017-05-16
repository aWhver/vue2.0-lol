<template>
  <div class="special">
    <header-top></header-top>
    <article class="border-1px" v-for="barItem in privilege">
      <div class="introduce">
        <figure>
          <img :src="barItem.imageUrl" alt="">
        </figure>
        <div>
          <h4>{{barItem.name}}</h4>
          <p>{{barItem.address}}<span>{{barItem.distance}}km</span> </p>
        </div>
      </div>
      <div class="privilege">
        <span><i></i>{{barItem.freeHero}}</span>
        <span><i></i>{{barItem.freeSkin}}</span>
        <span><i></i>{{barItem.experience}}</span>
      </div>
    </article>
  </div>
</template>
<script>
  import headerTop from './commom/header'
  import { specialBar } from '../data/discoverData'
  import {mapMutations} from 'vuex'
  export default{
    data () {
      return {
        privilege:specialBar
      }
    },
    mounted () {
      this.$store.commit( 'set_title','附近网吧')
    },
    components:{
      headerTop
    }
  }
</script>
<style lang="scss" scope>
  @import '../../static/mixin.scss';
  .special{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    padding-top: 1.8rem;
  }
  .special article{
    padding:8px;
    background:#fff;
    .introduce{overflow:hidden;}
  }
  .special article figure{float:left;margin-right:6px;}
  .special article figure img{display:block;width:56px;}
  .special article .introduce > div{
    float:left;
    line-height:20px;
  }
  .special article .introduce > div p{
    font-size:12px;
    max-width:235px;
    color:#bbb;
    text-overflow: ellipsis;
    overflow:hidden;
    white-space: nowrap;
  }
  .special article .introduce .nearby-icon{
    display:inline-block;
    width:16px;
    height:21px;
    background:url(/static/image/barImg/nearby.png) center/contain;
    vertical-align: middle;
    transform:scale(0.8);
  }
  .privilege span{font-size: 12px;margin-top:6px;display:inline-block;}
  .privilege span i{
    display:inline-block;
    width:16px;
    height:16px;
    vertical-align: middle;
    margin-right: 3px;
  }
  .privilege span:nth-of-type(1) i{background:url(/static/image/barImg/freehero.png) center/contain}
  .privilege span:nth-of-type(2) i{background:url(/static/image/barImg/freeskin.png) center/contain}
  .privilege span:nth-of-type(3) i{background:url(/static/image/barImg/exp.png) center/contain}
</style>
