<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link>
      <router-link to="/admin/post">管理</router-link>
    </nav>
    <router-vue></router-vue>
  </div>
</template>

<script>
import './css/global.css';

import HelloWorld from './components/HelloWorld.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
  }
}
</script>

<style>
  nav a {
    display:inline-block;
    padding: 5px;
  }
</style>
