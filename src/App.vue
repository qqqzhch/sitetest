<template>
  <div id="app">
    <a-Layout>
      <a-layout-header>
        <Head/>
      </a-layout-header>
      
      <a-layout-content>
        <div class="lambbody">
          <router-view/>
        </div>
      </a-layout-content>
      <a-layout-footer>
        <Foot/>
      </a-layout-footer>
    </a-Layout>
  </div>
</template>
<script>
import Foot from '@/Layout/Foot.vue'
import Head from '@/Layout/Head.vue'


export default {
  components: {
    Foot,
    Head
  },
  
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  
}

</style>
