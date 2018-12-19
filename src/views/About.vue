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
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" />subnav 1</span>
          <a-menu-item key="1">option1</a-menu-item>
          <a-menu-item key="2">option2</a-menu-item>
          <a-menu-item key="3">option3</a-menu-item>
          <a-menu-item key="4">option4</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="laptop" />subnav 2</span>
          <a-menu-item key="5">option5</a-menu-item>
          <a-menu-item key="6">option6</a-menu-item>
          <a-menu-item key="7">option7</a-menu-item>
          <a-menu-item key="8">option8</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="notification" />subnav 3</span>
          <a-menu-item key="9">option9</a-menu-item>
          <a-menu-item key="10">option10</a-menu-item>
          <a-menu-item key="11">option11</a-menu-item>
          <a-menu-item key="12">option12</a-menu-item>
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
        Content
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
  export default {
    data(){
      return {
        collapsed: false,
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
