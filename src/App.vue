<template>
  <div>
    <Header />
    <router-view />
    <!-- 在 Home、Search 显示的，在登录、注册隐藏 -->
    <Footer v-show="$route.meta.show"/>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  components: {
    Header,
    Footer
},
}
</script>

<style lang="scss" scoped>
</style>
