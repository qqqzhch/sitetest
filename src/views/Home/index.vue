<template>
  <div class="home">
    <div class="remtest">
      1
    </div>
    
  <p>{{ $t("message.hello") }}</p>

  <a-row>
    <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">
          <a-button type="primary">Primary
            <a-icon type="arrow-right" />
          </a-button>
    <a-button>Default</a-button>
    <a-button type="dashed">Dashed</a-button>
    <a-button type="danger">Danger</a-button>
    
    <a-button type="primary">按钮</a-button>
    <a-button type="link">Link</a-button>
    </a-col>
    <a-col :xs="20" :sm="16" :md="12" :lg="8" :xl="4">Col</a-col>
    <a-col :xs="2" :sm="4" :md="6" :lg="8" :xl="10">Col</a-col>
  </a-row>
      
    <!-- ssss -->
  <div style="margin-left: 10px;margin-top: 10px;">
    <a-card  style="width: 300px">
     
      <p>
          <a-dropdown>
    <a class="ant-dropdown-link" href="#"> Hover me <a-icon type="down" /> </a>
    <a-menu slot="overlay">
      <a-menu-item>
        <a href="javascript:;">1st menu item</a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript:;">2nd menu item</a>
      </a-menu-item>
      <a-menu-item>
        <a href="javascript:;">3rd menu item</a>
      </a-menu-item>
    </a-menu>
  </a-dropdown>
      </p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
    <br />
    <a-card size="small" title="Small size card" style="width: 300px">
      <a href="#" slot="extra">more</a>
      <p>card content</p>
      <p>card content</p>
      <p>card content</p>
    </a-card>
  </div>
    



    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  data() {
      return {
        
      };
  },
  methods: {
    
  },
}
</script>

<style lang="less" scoped>
.remtest{
  width:2rem;
  height: 2rem;
  background: red;
  display: inline-block
}
</style>
