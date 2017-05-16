<template>
  <div class="news_con">
    <section class="banner">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(news,index) in bannerNews" :key="index"><a :href="news.article_url"><img :src="news.image_url_big" class="banner-item"  alt="" height="20%" width="100%"></a></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </section>
    <section class="news_list">
      <mu-list>
        <template v-for="article in newsList">
          <mu-list-item v-html="article"/>
          <mu-divider/>
        </template>
      </mu-list>

      <!--<mu-infinite-scroll :scroller="scroller" :loading="loading" @load="loadMore"/>-->
      <!--<ul>
        <li v-for="(article,index) in newstNews" :key="index">
          <a :href="article.article_url">
            <figure>
              <img :src="article.image_url_small" alt="">
            </figure>
            <div class="des">
              <p class="title">{{article.title}}</p>
              <p class="detail">{{article.summary}}</p>
              <p class="time">
                <span>{{article.publication_date.split(' ')[0]}}</span>
                <span>{{article.pv | filterRead}}阅</span>
              </p>
            </div>
          </a>
        </li>
      </ul>-->
    </section>
  </div>
</template>
<script>
  import { newstNews , bannerNews } from '../data/index'
  import { filterRead } from '../filter/filter'
  import { swiper , swiperSlide } from 'vue-awesome-swiper'
  import { mapMutations } from 'vuex'

  export default {
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination',
          paginationClickable: true,
          autoplay: 3000
        },
        bannerNews: bannerNews,
        newsList:[],
        num:10,
        loading:false,
        scroller:null
      }
    },
    methods: {
      setTitle () {
        this.$store.commit('set_title','资讯')
      },
      loadMore () {
        //this.loading = true;
        setTimeout(function () {
          for(let i = this.num;i<this.num+6;i++){
            this.newsList.push(newstNews[i])
          }
          this.num += 6;
          //this.loading = false;
        },1500)
      },
      toNewsArr () {
        for(let i = 0;i<this.num;i++){
          let pv = filterRead(newstNews[i].pv);
          this.newsList.push(`
            <a href=${newstNews[i].article_url}>
              <figure>
                <img src=${newstNews[i].image_url_small} alt="">
              </figure>
              <div class="des">
                <p class="title">${newstNews[i].title}</p>
                <p class="detail">${newstNews[i].summary}</p>
                <p class="time">
                  <span>${newstNews[i].publication_date.split(' ')[0]}</span>
                  <span>${pv}阅</span>
                </p>
              </div>
            </a>
          `)
        }
      }
    },
    mounted () {
      this.setTitle();
      this.toNewsArr();
      //this.scroller = this.$el;
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style scope>
  .banner{
    margin-top:1.8rem;
  }
  .news_con{
    padding-bottom: 40px;
  }
  .news_list .mu-list > div{
    padding:0 10px;
  }
  .news_list a {
    display: flex;
  }
  .news_list figure {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .news_list figure img {
    display: block;
    width: 90px;
    height: 65px;
  }
  .news_list .des {
    padding-left: 0.35rem;
  }
  .news_list p{
    text-align: left;
  }
  .news_list p.title {
    color: #000;
    font-size: 0.65rem;
  }
  .news_list p.detail {
    line-height: 0.8rem;
    font-size: 0.55rem;
    padding: 3px 0;
  }
  .news_list p.time {
    font-size: 12px;
  }
  .news_list p.time span:nth-of-type(2) {
    color: #f60;
  }

</style>
