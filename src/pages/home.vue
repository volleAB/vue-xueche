<template>
  <div id="home">
    <el-row class="clearfix">
      <el-col :span="8">
        <div class="grid-content">
          <div class="icon iconfont icon-location"></div>
          <div><h5>找场地</h5><span>覆盖全城，包您满意</span></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <div class="icon iconfont icon-coach"></div>
          <div><h5>找教练</h5><span>覆盖全城，包您满意</span></div>
        </div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content">
          <div class="icon iconfont icon-service"></div>
          <div><h5>找服务</h5><span>覆盖全城，包您满意</span></div>
        </div>
      </el-col>
    </el-row>
    <div class="border"></div>
    <el-row class="clearfix">
      <el-col :span="12">
        <div class="grid-content">
          <div class="icon iconfont icon-pan fl"></div>
          <div class="fr"><h5 style="margin: 14px">免费试学</h5><span>免费试学，专车接送</span></div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content">
          <div class="icon iconfont icon-phone fl"></div>
          <div class="fr"><h5 style="margin: 14px">电话咨询</h5><span>电话咨询，专车接送</span></div>
        </div>
      </el-col>
    </el-row>
    <div class="border"></div>
    <div class="part clearfix">
      <div class="p-title clearfix"><div class="title fl">好教练</div><i class="fr">更多></i></div>
      <div class="part-item clearfix" v-for="(item, index) in coachList" :key="index">
        <router-link :to="{ name: 'details',params: {coachId: 1} }">
          <div class="coach-info">
            <el-row>
              <el-col :span="6"><div class="grid-content"><img src="../assets/images/timg.jpg" alt=""></div></el-col>
              <el-col :span="12"><div class="grid-content">{{item.name}}{{item.age}}{{item.license}}{{item.location}}</div></el-col>
              <el-col :span="6"><div class="grid-content">￥{{item.price}}</div></el-col>
            </el-row>
          </div>
        </router-link>
        <div class="border"></div>
      </div>
    </div>
  </div>
</template>

<script>
require('../assets/scss/home.scss')
require('../assets/icon/iconfont.css')

export default {
  data () {
    return {
      coachList: [
        {
          name: '刘德华',
          age: '30',
          license: 'c1',
          location: '八英里',
          servicePeople: '54',
          price: '3000',
          pic: ''
        },
        {
          name: '刘德华',
          age: '30',
          license: 'c1',
          location: '八英里',
          servicePeople: '54',
          price: '3000',
          pic: ''
        },
        {
          name: '刘德华',
          age: '30',
          license: 'c1',
          location: '八英里',
          servicePeople: '54',
          price: '3000',
          pic: ''
        }
      ]
    }
  },
  creaded () {

  },
  methods: {

  }
}
</script>
