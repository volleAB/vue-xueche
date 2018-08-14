<template>
  <div id="app">
    <comtitle/>
    <router-view/>
    <comnav></comnav>
  </div>
</template>

<script>
import comnav from './components/nav'
import comtitle from './components/header'

export default {
  name: 'App',
  data () {
    return {}
  },
  components: {
    comnav,
    comtitle
  },
  methods: {
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
