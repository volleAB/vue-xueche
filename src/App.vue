<template>
  <div id="app">
    <router-view/>
    <comnav></comnav>
  </div>
</template>

<script>
import comnav from './components/nav'

export default {
  name: 'App',
  components: {
    comnav
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
