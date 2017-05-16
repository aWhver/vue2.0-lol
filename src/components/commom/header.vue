<template>
  <div class="index-title">
    <mu-flexbox>
      <mu-flexbox-item class="back-flex" grow="1">
        <mu-icon-button icon="arrow_back" @click="goBack"/>
      </mu-flexbox-item>
      <mu-flexbox-item class="title-flex" grow="5">
        {{title}}
      </mu-flexbox-item>
      <mu-flexbox-item class=""  grow="1">
      </mu-flexbox-item>
    </mu-flexbox>
  </div>

</template>
<script>
  import {mapState , mapMutations} from 'vuex'

  export default {
    methods:{
      goBack () {
        this.$router.go(-1)
        this.$store.commit('set_title','发现')
      },
      goBack1 () {
        this.$store.commit('set_title','发现')
      }
    },
    computed: mapState({
      title: state => state.title,
      bool: state => state.bool
    })
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
    background: #01131d;
    height: 1.8rem;
  }
  .title-flex {
    text-align: center;
    color: #c8b686;
    font-size: 18px;
  }
  .back-flex {
    color: #fff;
  }

</style>
