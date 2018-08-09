<template>
  <div id="home">
    <el-row class="clearfix">
      <el-col :span="8">
        <div class="grid-content">
          <div class="icon iconfont icon-location"></div>
          <div><h5>找场地</h5><span>覆盖全城</span></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <div class="icon iconfont icon-coach"></div>
          <div><h5>找教练</h5><span>覆盖全城</span></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <div class="icon iconfont icon-service"></div>
          <div><h5>找服务</h5><span>覆盖全城</span></div>
        </div>
      </el-col>
    </el-row>
    <div class="border"></div>
    <el-row class="clearfix">
      <el-col :span="12">
        <div class="grid-content">
          <div class="icon iconfont icon-pan fl"></div>
          <div class="fr">免费试学</div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <div class="icon iconfont icon-phone fl"></div>
          <div class="fr">电话咨询</div>
        </div>
      </el-col>
    </el-row>
    <div class="border"></div>
    <div class="part clearfix">
      <div class="title fl">好教练</div><i class="fr">更多></i>
    </div>
  </div>
</template>

<script>
require('../assets/scss/home.scss')
require('../assets/icon/iconfont.css')

export default {
  data () {
    return []
  },
  creaded () {

  },
  methods: {

  }
}
</script>
