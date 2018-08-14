<template>
  <div class="header" @click="showTitle">
    <span>{{this.$store.state.title}}</span>
  </div>
</template>

<style lang="scss">
  .header {
    position: absolute;
    top: 0;
    width: 100%;
    height: 40px;
    background: skyblue;
    span {
      line-height: 2.2;
      font-size: 18px;
      color: #ffffff;
    }
  }
</style>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  created () {
    this.title = this.$store.state.title
  },
  methods: {
    showTitle () {
      console.log(this.title, this.$store.state.title)
    }
  }
}
</script>
