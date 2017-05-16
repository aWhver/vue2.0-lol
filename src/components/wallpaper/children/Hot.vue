<template>
  <div class="wallpaper-img-hot">
    <ul>
      <li v-for="item in imgList1"><img :src="item.url" alt=""></li>
    </ul>
    <ul>
      <li v-for="item1 in imgList2"><img :src="item1.url" alt=""></li>
    </ul>
  </div>
</template>
<script>
  import axios from 'axios'
  import Qs from 'qs'
  export default {
    data () {
      return {
        imgList1:null,
        imgList2:null
      }
    },
    mounted () {
      axios.get('/static/data/data.json',{
        transformRequest:[function (data) {
          data = Qs.stringify({});
          return data;
        }]
      }).then(res => {
        this.imgList1 = JSON.parse(res.request.response).wallpaper_hot.splice(0,5);
        this.imgList2 = JSON.parse(res.request.response).wallpaper_hot.splice(5,5);
      },error => {
        console.log(error);
      })
    }
  }
</script>
<style lang="scss" scope>
  .wallpaper-img-hot{
    background: #fff;
    display:flex;
    ul{
      flex:1;
      margin:0 10px;
      li{
        margin-bottom:10px;
      }
      img{
        display:block;
        width:100%;
      }
    }
    ul:nth-of-type(even){
      margin-left: 0px;
    }
  }

</style>
