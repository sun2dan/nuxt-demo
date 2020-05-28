<template>
  <header class="fix-lt w100">
    <div class="main-box">
      <nuxt-link to="/"><h2>NuxtJS 测试项目</h2></nuxt-link>
    </div>
  </header>
</template>
<script>
  export default {
    name: '',
    props: {},
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
  header {z-index: 100; height: 70px; line-height: 70px; border-bottom: 1px solid $border; background: $f;
    h2 {color: $mainActive;}
  }
</style>
