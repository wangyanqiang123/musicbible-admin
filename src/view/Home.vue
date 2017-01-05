<template>
    <div class="p-layout">
        <div class="p-layout-topbar clearfix">
            <div class="p-layout-name" :class="{'sider-mini': isCollapse}">
                <span class="full" v-if="!isCollapse" @click="backToHome">音乐圣经管理后台</span>
                <span class="mini" v-else @click="backToHome">后台</span>
            </div>
            <div class="p-layout-collapse" @click="toggleSider"><i class="fa fa-bars"></i></div>
            <div class="p-layout-nav">
                <el-dropdown class="is-user">
                  <span class="el-dropdown-link">
                    admin <i class="el-icon-caret-bottom el-icon--right"></i>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="logout">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <div class="p-layout-body" :class="{'sider-full': !isCollapse,'sider-mini': isCollapse}">
            <aside class="p-layout-sider">
                <el-menu
                        theme="dark"
                        :unique-opened="true"

                        :router="true">
                    <el-menu-item index="/recordList">
                        唱片
                    </el-menu-item>
                    <el-menu-item index="/recordEdit">
                        唱片编辑
                    </el-menu-item>
                    <el-menu-item index="/tune">
                        曲目
                    </el-menu-item>
                </el-menu>
            </aside>
            <div class="p-layout-panel">
                <div class="p-layout-content">
                    <div class="p-layout-container">
                        <div class="p-layout-inner">
                            <slot></slot>
                        </div>
                    </div>
                </div>
                <div class="p-layout-footer"> 版权所有 © 音乐圣经 2016</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'p-layout',
  data () {
    return {
      loggedIn: true,
      isCollapse: false
    }
  },
  created () {
  },
  methods: {
    toggleSider () {
      this.isCollapse = !this.isCollapse
    },
    backToHome () {
      this.$router.replace('home')
    }
  }
}
</script>

<style lang="less">
    @import "../app";
    @sider-width: 224px;
    @top-height: 70px;
    @sider-collapse-width: 64px;
    @transition: all 0.3s ease;
    @cont-padding: 15px;

    html, body, #app {
        margin: 0;
        height: 100%;
    }
    .p-layout {
        .el-menu--dark .el-menu-item:hover {
            background-color: @primary-dark-color;
        }
        &-topbar {
            position: fixed;
            width: 100%;
            height: @top-height;
            line-height: @top-height;
            background-color: @brown-color;
            z-index: 101;
            color: #fff;

            a {
                color: @brown-color;
            }
            .el-dropdown-link {
                color: #fff;
            }
        }
        &-name {
            width: @sider-width;
            text-align: center;
            float: left;
            background-color: @brown-color;
            font-family: Helvetica;
            font-size: 22px;
            white-space: nowrap;
            transition: @transition;
            &.sider-mini {
                width: @sider-collapse-width;
            }
            .mini {
            }
        }
        &-nav {
            float: right;
            padding-right: 10px;
        }
        &-sider {
            width: @sider-width;
            background-color: @brown-color;
            position: fixed;
            top: @top-height;
            left: 0;
            height: 100%;
            transition: @transition;
            z-index: 102;
            overflow-x: hidden;
        }
        &-panel,
        &-content {
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            overflow: hidden;
            background: #f5f5f5;
            transition: @transition;
            width: auto;
        }

        &-collapse {
            float: left;
            width: @top-height;
            cursor: pointer;
            background-color: rgba(255, 255, 255, .1);
            text-align: center;
            color: #fff;
        }
        &-body {
            position: absolute;
            width: 100%;
            top: @top-height;
            bottom: 0;
            z-index: 100;
            &.sider-full {
                .p-layout-panel {
                    left: @sider-width;
                }
            }
            &.sider-mini {
                .p-layout-panel {
                    left: @sider-collapse-width;
                }
                .p-layout-sider {
                    width: @sider-collapse-width;
                }
                .el-menu {

                    .nav-next {
                        display: none;
                    }
                    &-item {
                        padding-left: 0;
                    }
                    .el-submenu {
                        text-align: left;
                    }
                }
            }
        }
        &-content {
            overflow-y: auto;
        }
        &-container {
            padding: 15px;
        }
        &-inner {
            padding: 10px;
            background: #fff;
            border-radius: 3px;
            margin-top: 10px;
        }
        &-breadcrumb {
            box-shadow: 0 1px 2px 0 rgba(0,0,0,.1);
            padding: 15px;
            background-color: #fff;
            margin: -15px -15px 0 -15px;
        }
        &-footer {
            height: 64px;
            line-height: 64px;
            text-align: center;
            font-size: 12px;
            color: #999;
            background: #fff;
            border-top: 1px solid #e9e9e9;
            width: 100%;
            display: none;
        }

        &-header {
            padding: 20px 10px;
            border-bottom: 1px solid #e9e9e9;
            background-color: @brown-color;
            &:before,
            &:after {
                content: '';
                display: table;
            }
            &:after {
                clear: both;
            }
            .is-user {
                float: right;
            }
        }
    }
</style>
