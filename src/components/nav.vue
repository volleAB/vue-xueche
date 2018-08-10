<template>
  <div class="nav">
    <div class="nav-item"><router-link :to="{ name: 'home' }"><i class="icon iconfont icon-home"></i>首页</router-link></div>
    <div class="nav-item"><router-link :to="{ name: 'coach' }"><i class="icon iconfont icon-menu"></i>教练</router-link></div>
    <div class="nav-item"><router-link :to="{ name: 'order' }"><i class="icon iconfont icon-order"></i>预约</router-link></div>
    <div class="nav-item"><router-link :to="{ name: 'mine' }"><i class="icon iconfont icon-mine"></i>我的</router-link></div>
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
      .iconfont {
        padding: 0 18px;
        font-size: 22px;
        &:active {
          color: rgb(0, 153, 255);
        }
      }
      .icon-home {
        font-size: 20px;
        padding: 0 19px;
      }
      a {
      color: #000000;
      }
      .router-link-active {
        color: rgb(0, 153, 255);
      }
    }
  }
</style>

<script>
require('../assets/icon/iconfont.css')

export default {
  data () {
    return {}
  },
  methods: {

  }
}
</script>
