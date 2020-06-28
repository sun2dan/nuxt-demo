<template>
  <div class="news-detail">
    <div class="main-box">
      <h2>{{data.title}}</h2>
      <div class="news-info s-rev flex">
        <span>{{data.origin}}</span>
        <span>{{data.publishTime}}</span>
      </div>
      <div class="cont" v-html="data.content"></div>
    </div>
  </div>
</template>

<script>
  import pageAxios from "../../assets/utils/pageAxios";

  export default {
    name: '',
    props: {},
    async asyncData({params}) {
      let id = params.id;
      let res1 = await pageAxios.get(`news/${id}`);
      let code = res1.code;
      let data = res1.data;
      return {data};
    },
    data() {
      return {
        data: {},
      }
    },
    created() {
    },
    mounted() {
    },
    watch: {},
    methods: {},
    computed: {},
    components: {}
  }
</script>

<style rel="stylesheet/scss" lang="scss" type="text/scss">
  .news-detail { padding: 30px 0;
    h2 {line-height: 1.5;}
    .news-info {color: $minor;}
    .cont {padding-top: 10px; line-height: 1.4; font-size: 16px;
      p {margin-bottom: 15px;}
      img {display: block; margin: 0 auto;}
    }
  }
</style>
