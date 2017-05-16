<template>
  <div class="disc">
    <div class="title">
      <mu-flexbox>
        <mu-flexbox-item class="back-flex" grow="1">
          <mu-icon-button icon="arrow_back"/>
        </mu-flexbox-item>
        <mu-flexbox-item class="title-flex" grow="5">
          title
        </mu-flexbox-item>
        <mu-flexbox-item class=""  grow="1">
        </mu-flexbox-item>
      </mu-flexbox>
    </div>
    <router-view></router-view>
  </div>

</template>
<script>
  import { mapState } from 'vuex'
  export default{
    computed:mapState({
      title:state => state.title
    })
  }
</script>
<style>
  .disc .title{
    position:absolute;
    top:0;
    left:0;
  }

</style>
