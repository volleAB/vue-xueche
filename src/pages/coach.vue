<template>
  <div id="coach">
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
</template>

<script>
require('../assets/scss/home.scss')

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
      ],
      title: '教练'
    }
  },
  created () {
    this.$store.state.title = '教练'
  }
}
</script>
