<template>
<el-config-provider :locale="zhCn">
<ViewHead/>


<router-view/>

</el-config-provider>
</template>

<script>
import ViewFooter from '@/components/ViewFooter.vue'
import PageSearch from '@/components/PageSearch'
import ViewHead from '@/components/ViewHead'
//import { setAddRoutes } from '@/router/index'
export default {
  name: 'App',
  components: {
    ViewFooter,
    PageSearch,
    ViewHead
  },
  /*created() {
    setAddRoutes();
  }*/
}
</script>

<script setup>
import zhCn from "element-plus/lib/locale/lang/zh-cn"
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

body {
  text-align: center;
}
</style>
