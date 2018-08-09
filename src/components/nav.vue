<template>
  <div class="nav">
    <div class="icon iconfont icon-home nav-item">首页</div>
    <div class="icon iconfont icon-menu nav-item">教练</div>
    <div class="icon iconfont icon-order nav-item">预约</div>
    <div class="icon iconfont icon-mine nav-item">我的</div>
  </div>
</template>

<style lang="scss">
  .nav {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 60px;
    border-top: 1px solid #eeeeee;
    clear: both;
    .nav-item {
      float: left;
      width: 25%;
      padding: 4px 10px;
      box-sizing: border-box;
    }
  }
</style>

<script>
require('../assets/icon/iconfont.css')

export default {
  data () {
    return []
  },
  methods: {

  }
}
</script>
