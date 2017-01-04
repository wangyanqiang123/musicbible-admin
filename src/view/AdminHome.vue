<style scoped lang="less">
  @import "../mixins.less";
  .el-menu {
    border-radius: 0;
  }
  .el-menu--dark {
    background: @brown-color;
  }
  .top-nav {
    .nav-right {
      float: right;
      ul.el-menu > li {
        text-align: center;
      }
    }
  }
  .panel-center {
    top: 1em;
    bottom: 0px;
    width: 100%;
    height: 100%;
    color: red;
    overflow: hidden;
  }
</style>
<template>
  <div>

    <el-menu theme="dark" default-active="1" class="top-nav" mode="horizontal" @select="handleSelect" align="right">
      <el-menu-item index="1">音乐圣经管理后台</el-menu-item>
      <el-submenu index="2" class="nav-right">
        <template slot="title">这里是昵称</template>
        <el-menu-item index="2-1">选项1</el-menu-item>
        <el-menu-item index="2-2">选项2</el-menu-item>
        <el-menu-item index="2-3">退出登录</el-menu-item>
      </el-submenu>

    </el-menu>
    <div class="line"></div>

    <el-row class="panel-center">
      <el-col :span="4">
        <aside>
          <el-menu default-active="adhome/record" theme="dark" :router="true">
            <el-menu-item index="adhome/record">唱片</el-menu-item>
            <el-menu-item index="2">艺术家</el-menu-item>
          </el-menu>
        </aside>
      </el-col>
      <el-col :span="20">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'AdminHome',
  data () {
    return {
      msg: 'hello vue'
    }
  },
  components: {}
}
</script>
