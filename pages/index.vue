<template>
  <div class="page-index">
    <div class="floor f-banner">
      <div class="main-box">
        <h2>banner楼层</h2>
      </div>
    </div>
    <div class="floor f-tab">
      <div class="main-box">
        <h2>Tab切换楼层</h2>
      </div>
    </div>
    <div class="floor f-news">
      <div class="main-box">
        <h2>新闻楼层</h2>
      </div>
    </div>
  </div>
</template>
<script>
  import tkd from "assets/data/tkd";

  export default {
    name: '',
    props: {},
    layout: 'default',
    head: tkd.index,
    data() {
      return {}
    },
    created() {
    },
    methods: {},
    computed: {},
    components: {}
  }
</script>
<style rel="stylesheet/scss" lang="scss" type="text/scss">
  .page-index {
    .f-banner {color: $f; background: #FFB200;}
    .f-tab {background: #E4E4E4;}
    .f-news {color: $f; background: $main;}
  }
</style>
