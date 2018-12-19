<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Login from '@/views/Login.vue'
  export default {
    name: 'app',
    methods: {

    },
    components: {
     
    }
  }

</script>

<style lang="less">
#app {
  height: 750px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background:url("./images/1120.jpg") no-repeat;
  background-size: 100% 100%;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
