<template>
  <div id="mine">
    <div class="user">
      <div class="user-button">
        <el-button type="primary">注册</el-button>
        <el-button>登录</el-button>
      </div>
      <div class="border"></div>
      <div class="user-info">
        <div class="user-base">基本资料</div>
        <div class="user-password">密码修改</div>
        <div class="border"></div>
        <div class="user-order">我的订单</div>
        <div class="border"></div>
      </div>
      <div class="problem">常见问题</div>
      <div class="aboutus">关于我们</div>
    </div>
  </div>
</template>

<script>
require('../assets/scss/mine.scss')

export default {
  data () {
    return {}
  },
  created () {
    this.$store.state.title = '我的'
  }
}
</script>
