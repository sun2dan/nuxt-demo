<template>
  <div class="page-index">
    <div class="floor f-banner">
      <div class="main-box">
        <h2>banner楼层</h2>
        <div>{{msg}}</div>
      </div>
    </div>
    <div class="floor f-tab">
      <div class="main-box">
        <h2>Tab切换楼层</h2>
      </div>
    </div>
    <div class="floor f-news">
      <div class="main-box">
        <div class="pr">
          <h2>新闻楼层</h2>
          <nuxt-link to="/news" class="btn-f abs-rm">查看更多</nuxt-link>
        </div>
        <ul class="flex">
          <li class="flex-1" v-for="(item,i) in recmdList">
            <div class="img-box">
              <img :src="item.img" class="abs-mm" alt="">
            </div>
            <div class="info-box flex">
              <span>{{item.origin}}</span>
              <span>{{item.publishTime}}</span>
            </div>
            <h4 class="ellips">{{item.title}}</h4>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
  import tkd from "assets/data/tkd";
  import pageAxios from 'assets/utils/pageAxios'

  export default {
    name: '',
    props: {},
    layout: 'default',
    head: tkd.index,
    data() {
      return {
        recmdList: [],
        msg: ''
      }
    },
    async asyncData() {
      let res1 = await pageAxios.get("news/recommend", {params: {}});
      let code = res1.code;
      let recmdList = res1.data;
      return {recmdList};
    },
    created() {
      // this.getNews();
    },
    methods: {
      async getNews() {
        let res1 = await pageAxios.get("news/recommend", {params: {}});
        let code = res1.code;
        let recmdList = res1.data;
        this.recmdList = recmdList;
        console.log(code, recmdList);
      },
      // 本地测试 跨域问题
      async getCont() {
        let res1 = await pageAxios.get("http://test.jd.com:8092", {params: {}});
        let code = res1.code;
        let data = res1.data;
        console.log('cont', res1, code, data);
        return res1;
      },
    },
    computed: {},
    components: {}
  }
</script>
<style rel="stylesheet/scss" lang="scss" type="text/scss">
  .page-index {
    .f-banner {color: $f; background: #FFB200;}
    .f-tab {background: #E4E4E4;}
    .f-news {color: $f; background: $main;
      ul {margin-top: 30px;}
      li {width: 370px; margin-right: 45px;}
      .img-box {height: 200px; }
      .info-box {margin: 15px 0 10px; color: $minorF;
        span:last-of-type {position: relative; margin-left: 10px; padding-left: 10px;
          &:before {content: ''; position: absolute; left: -1px; top: 0; bottom: 0; width: 2px; background-color: $borderF;}
        }
      }
      h4 {font-size: 18px; line-height: 1.5;}
    }
  }
</style>
