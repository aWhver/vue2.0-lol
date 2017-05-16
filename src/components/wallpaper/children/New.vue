<template>
  <div class="wallpaper-img-new clear">
    <figure v-for="item in imgList"><img :src="item.url" alt=""></figure>
  </div>

</template>
<script>
  import axios from 'axios'
  import Qs from 'qs'
  import scroller from '../../scroll'
  export default {
    data () {
      return {
        startNum:0,
        endNum:6,
        imgList:null,
        loadList:null
      }
    },
    mounted () {
      axios.get('/static/data/data.json',{
        transformRequest:[function (data) {
          data = Qs.stringify({});
          return data;
        }]
      }).then(res => {
        this.imgList = JSON.parse(res.request.response).wallpaper_new;
      },error => {
        console.log(error);
      })
    },
    methods:{
      loadMore () {
        //this.loading = true;
        this.startNum = this.endNum;
        this.endNum += 6;
        if(this.endNum > 12){
          this.startNum = 0;
          this.endNum = 6;
        }
        axios.get('/static/data/data.json',{
          transformRequest:[function (data) {
            data = Qs.stringify({});
            return data;
          }]
        }).then(res => {
          this.loadList = JSON.parse(res.request.response).wallpaper_new;
          setTimeout(function () {
            for(let i = this.startNum;i<this.endNum;i++){
              this.imgList.push(loadList[i])
            }
            //this.loading = false;
          },1500)
        },error => {
          console.log(error);
        })
      }
    },
    components:{
      scroller
    }
  }
</script>
<style lang="scss" scoped>
  .wallpaper-img-new{
    width:100%;
    background:#fff;
    figure{
      float:left;
      width: calc(100% /2 - 15px);
      margin:0 10px 10px;
      img{
        width:100%;
      }
    }
    figure:nth-of-type(even){
      margin-left: 0px;
    }
  }
  .clear::after{
    content:'';
    display:block;
    clear:both;
  }
</style>
