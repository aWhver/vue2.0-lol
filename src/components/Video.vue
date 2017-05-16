<template>
  <div class="video">
    <section class="video">
      <ul class="clear">
        <li v-for="(video,index) in newstVideos" :key="index">
          <a :href="'http://v.qq.com/iframe/player.html?vid='+video.vid+'&tiny=0&auto=0'">
            <div class="video_img"><img :src="video.img" alt="" width="100%"></div>
            <div class="video_con">
              <p>{{video.title}}</p>
              <p class="comments">
                <span>{{video.createdate.split('T')[0]}}</span>
                <span>{{video.comments | filterComment}}评论</span>
              </p>
            </div>
          </a>
        </li>
      </ul>
    </section>
  </div>
</template>
<script>
  import { newstVideos } from '../data/index'
  import { filterComment } from '../filter/filter'
  export default {
    data () {
      return {
        newstVideos: newstVideos
      }
    },
    methods:{
      setTitle () {
          this.$store.commit('set_title','视频')
      }
    },
    mounted () {
        this.setTitle()
    },
    filters: {
        filterComment
    }
  }
</script>
<style scope>
  div.video{padding-top:1.8rem;padding-bottom:60px;}
  section.video li{
  width:calc( 100% / 2 - 16px);
  height:6.6rem;
  float:left;
  margin:8px;
}
  .video p:nth-of-type(1){
    font-size:0.6rem;
    line-height:0.8rem;
  }
  .video p:nth-of-type(2){
    display: flex;
    justify-content: space-between;
    padding-top:3px;
    font-size:0.6rem;
  }
  .video p.comments span:nth-child(2){
    color:#f60;
  }
  .clear::after{
    content:'';
    display:block;
    clear:both;
  }

</style>
