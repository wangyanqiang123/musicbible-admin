<template>
  <div>
    <el-row class="panel-top">
      <el-col :span="20">
        <h3>音乐圣经管理后台</h3>
      </el-col>
      <el-col :span="4">
        <el-tooltip effect="dark" content="点击退出登录" placement="bottom">
          <el-button>退出登录</el-button>
        </el-tooltip>
      </el-col>
    </el-row>
    <el-row class="panel-center">
      <el-col :span="6">
        <aside>
          <h1>这是边栏目</h1>
          <el-menu default-active="adhome/hello" theme="dark" :router="true">
            <el-menu-item index="adhome/hello">唱片</el-menu-item>
            <el-menu-item index="2">艺术家</el-menu-item>
          </el-menu>
        </aside>
      </el-col>
      <el-col :span="18">
        <transition name="fade">
          <router-view></router-view>
        </transition>
      </el-col>
    </el-row>
  </div>
</template>
<style scoped>
  .panel-top {
    position: absolute;
    top: 0px;
    bottom: 0px;
    height: 60px;
    width: 100%;
  }
  .panel-center {
    top: 60px;
    bottom: 0px;
    width: 100%;
    height: 100%;
    color: red;
    overflow: hidden;
  }
</style>
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
