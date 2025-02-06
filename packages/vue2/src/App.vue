<template>
  <div id="app-vue">
  <button @click="sayName">sayName</button>
    <!-- <router-view /> -->
  </div>
</template>
<script>
export default {
  name: 'App',
  data(){
    return {
      name: 'zhangsan'
    }
  },
  methods: {
    sayName(){
      console.log(this.name)
    }
  }

}
</script>
<style>
#container {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-align: center;
}
</style>
