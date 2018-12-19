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
      <a-layout-header style="background: rgba(93, 109, 195, 1); color: #fff;padding: 0">
        <div style="float:left">
          <a-icon
            class="trigger"
            :type="collapsed ? 'menu-unfold' : 'menu-fold'"
            @click="()=> collapsed = !collapsed"
          />
          XXX南站东西广场信息化综合管理平台
        </div>
        <div style="float: right;margin-right:20px;">
          <a-avatar :size="32" icon="user" />
          <a style="color:#fff;" @click="() => visible = !visible">退出</a>
        </div>
      </a-layout-header>
      <a-layout-content :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }">
        <div style="display: flex;flex-direction: column;height: 600px;">
          <div style="flex:1;min-height: 450px;">
            这是 about 页面
            <router-view/>
          </div>
          <div class="footer"> GongXiaoZhu@qq.com</div>
        </div>
      </a-layout-content>
      <!-- 弹框 -->
      <a-modal
        title="退出页面"
        v-model="visible"
        @ok="handleOk"
      >
        确认退出？
      </a-modal>
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
        visible: false
      }
    },
    methods: {
      handleOk() {
        this.$router.push({ path:"/"})
      }
    }
  }
</script>

<style>
.home {
  height: 750px;
}
.footer{
  height: 50px;
    line-height: 50px;
    border-top: 1px solid rgb(221, 221, 221);
    text-align: center;
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
    background: rgba(75, 91, 173, 1);
    height: 63px;
    line-height: 63px;
    padding-left: 23px;
    color: #fff;
    overflow: hidden;
}
</style>
