<template>
  <div class="discover">
    <div class="clubBanner">
      <div class="bannerBox clear">
        <ul>
          <li>
            <a href="">
              <figure><img src="../../static/image/clubImg/EDG.jpg" alt=""></figure>
              <figcaption>EDG</figcaption>
            </a>
          </li>
          <li>
            <a href="">
              <figure><img src="../../static/image/clubImg/OMG.jpg" alt=""></figure>
              <figcaption>OMG</figcaption>
            </a>
          </li>
          <li>
            <a href="">
              <figure><img src="../../static/image/clubImg/SS.jpg" alt=""></figure>
              <figcaption>Snake</figcaption>
            </a>
          </li>
          <li>
            <a href="">
              <figure><img src="../../static/image/clubImg/VG.jpg" alt=""></figure>
              <figcaption>VG</figcaption>
            </a>
          </li>
          <li>
            <a href="">
              <figure><img src="../../static/image/clubImg/RNG.jpg" alt=""></figure>
              <figcaption>RNG</figcaption>
            </a>
          </li>
          <li>
            <a href="">
              <figure><img src="../../static/image/clubImg/LGD.jpg" alt=""></figure>
              <figcaption>LGD</figcaption>
            </a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">
              <figure><img src="../../static/image/clubImg/NEWBE.jpg" alt=""></figure>
              <figcaption>Newbee</figcaption>
            </a>
          </li>
          <li>
            <a href="">
              <figure><img src="../../static/image/clubImg/IG.jpg" alt=""></figure>
              <figcaption>IG</figcaption>
            </a>
          </li>
          <li>
            <a href="">
              <figure><img src="../../static/image/clubImg/WE.jpg" alt=""></figure>
              <figcaption>WE</figcaption>
            </a>
          </li>
          <li>
            <a href="">
              <figure><img src="../../static/image/clubImg/IM.jpg" alt=""></figure>
              <figcaption>IM</figcaption>
            </a>
          </li>
          <li>
            <a href="">
              <figure><img src="../../static/image/clubImg/QG.jpg" alt=""></figure>
              <figcaption>QG</figcaption>
            </a>
          </li>
          <li>
            <a href="">
              <figure><img src="../../static/image/clubImg/QG.jpg" alt=""></figure>
              <figcaption>QG</figcaption>
            </a>
          </li>
        </ul>
      </div>
      <div class="fans">
        <a>粉丝俱乐部 > </a>
      </div>
    </div>
    <Discover></Discover>
    <transition name="slide-transformX">
      <router-view></router-view>
    </transition>
  </div>
</template>
<script>
  import { mapMutations } from 'vuex'
  import Discover from './discover'
  export default {
    mounted () {
      this.setTitle()
      //this.banner()
    },
    methods: {
      setTitle () {
        this.$store.commit('set_title','发现')
      },
      banner () {
        let bannerBox = this.$el.querySelector('.bannerBox');
        let disX,originalX;

        bannerBox.addEventListener('touchstart',function(e){
          e.preventDefault();
          disX = e.changedTouches[0].pageX;
          originalX = cssStyle(bannerBox,'left');
        });
        bannerBox.addEventListener('touchmove',function(e){
          let nowX = e.changedTouches[0].pageX-disX+originalX + 'px';
          cssStyle(bannerBox,'left',nowX);
        });
        function  cssStyle(){
          if(arguments.length==3){
            arguments[0].style[arguments[1]] = arguments[2]
          }else if(arguments.length==2){
            return arguments[0].style[arguments[1]]
          }
        }
      }
    },
    components:{
      Discover
    }
  }
</script>
<style scoped>
  .clubBanner{
    padding-top:2rem;
    background:rgba(0,0,0,.9);
  }
  .bannerBox{
    position: relative;
    left:0;
    top:0;
    width:200%;
  }
  .bannerBox ul{
    width:50%;
    float:left;
    display:flex;
    justify-content: space-between;
    text-align: center;
  }
  .bannerBox ul li{
    width:calc( 100% / 6 - 20px );
    margin:0 10px
  }
  .bannerBox ul figure img{
    display:block;
    width:100%;
    border-radius:100%;
    margin-bottom:10px;
  }
  figcaption{color:#fff;}
  .fans{text-align: center;}
  .fans a{
    padding:5px;
    border:1px solid greenyellow;
    border-radius:3px;
    display:inline-block;
    margin:15px 0;
  }
  .clear::after{
    content:'';
    display:block;
    clear:both;
  }
  .slide-transformX-enter-active, .slide-transformX-leave-active {
    transition: opacity .6s;
  }
  .slide-transformX-enter, .slide-transformX-leave-active {
    opacity: 0;
  }
</style>
