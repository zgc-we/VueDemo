<template>
  <a-layout id="components-layout-demo-custom-trigger" class="home">
    <a-layout-sider
      :trigger="null"
      collapsible
      v-model="collapsed"
    >
      <div class="logo">
        <img style="width:30px;" alt="Vue logo" src="../assets/logo.png">
        VUE-DEMO
      </div>
      <a-menu
        mode="inline"
        theme="dark"
        :defaultSelectedKeys="['1']"
        :defaultOpenKeys="['sub1']"
        :style="{ height: '100%', borderRight: 0 }"
      >
        <a-sub-menu v-for="(item, index) in menu" :key="index">
          <span slot="title"><a-icon :type="item.types"/>{{item['name']}}</span>
          <a-menu-item v-for="(k, ix) in item.children" :key="`${ix}_${k.path}`">
            <router-link :to="k.path">{{k['name']}}</router-link>
          </a-menu-item>
        </a-sub-menu> 
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="()=> collapsed = !collapsed"
        />
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        这是 about 页面
        <router-view/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
  import menuList from '../utils/menu.js';
  export default {
    data(){
      return {
        collapsed: false,
        menu: menuList,
      }
    },
  }
</script>

<style>
.home {
  height: 750px;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color .3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: #fff;
  margin: 16px;
  line-height: 32px;
  overflow: hidden;
}
</style>
