<template>
  <div class="layout">
    <com-header></com-header>
    <div class="page-box">
      <nuxt/>
    </div>
    <com-footer></com-footer>
  </div>
</template>
<script>
  import ComFooter from "../components/common/ComFooter";
  import ComHeader from "../components/common/ComHeader";

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
    components: {ComHeader, ComFooter}
  }
</script>
<style rel="stylesheet/scss" lang="scss" type="text/scss">
  .layout {min-width: 1200px;}
</style>
