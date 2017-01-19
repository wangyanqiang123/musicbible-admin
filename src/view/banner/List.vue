<template>
    <div>
        <el-row class="panel-top">
            <div class="p-layout-breadcrumb">
                <el-breadcrumb separator="/">
                    <el-breadcrumb-item :to="{ path: '/admin/dashboard' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item :to="{ path: '/admin/banner/list' }">Banner</el-breadcrumb-item>
                </el-breadcrumb>
            </div>
            <el-button type="button" class="button-new" @click="create" icon="edit">新建</el-button>
        </el-row>
        <div class="p-layout-inner">
            <p-search
                    ref="banner_list"
                    :search-rules="bannerRules"
                    :fetch-list="fetchList"
                    page-layout="total, sizes, prev, pager, next, jumper"
                    :search-form="bannerForm">

                <template slot="form">
                    <el-row>
                        <el-form-item prop="type" style="margin-right: 0;">
                            <el-select v-model="bannerForm.type" placeholder="搜索条件" >
                                <el-option label="标题" value="title"></el-option>
                                <el-option label="创建者" value="owner"></el-option>
                            </el-select>
                        </el-form-item>
                        <el-form-item prop="keyword">
                            <el-input v-model="bannerForm.keyword" placeholder="关键字"></el-input>
                        </el-form-item>
                        <el-button type="primary" @click="handleSubmit" icon="search">查询</el-button>
                    </el-row>
                    <el-row>
                        <span class="text-small">排序方式: </span>
                        <el-form-item prop="orderby">
                            <el-radio-group v-model="bannerForm.orderby" fill="#463d34" @change="orderByChanged" size="small">
                                <el-radio-button label="create_time">创建时间</el-radio-button>
                                <el-radio-button label="weight">权重</el-radio-button>
                            </el-radio-group>
                        </el-form-item>
                    </el-row>
                </template>

                <template slot="table">
                    <el-table-column
                                     label="权重"
                                     width="70"
                                     align="center"
                    >
                        <template scope="scope">
                            <p  :title="scope.row.recommend_level">{{ scope.row.recommend_level }}</p>
                        </template>
                    </el-table-column>

                    <el-table-column align="left"
                                     label="创建信息"
                                     width="180"
                                     :show-overflow-tooltip="showOverFlowTooltip"
                    >
                        <template scope="scope" >
                            <p class="table-text">{{ scope.row.creator.username }}</p>
                            <p class="table-text time">创建于{{ scope.row.create_timestamp | formatTime}}</p>
                        </template>
                    </el-table-column>

                    <el-table-column align="left"
                                     label="标题"
                                     :show-overflow-tooltip="showOverFlowTooltip"
                    >
                        <template scope="scope" >
                            <p class="table-text">{{ scope.row.title }}</p>
                        </template>
                    </el-table-column>

                    <el-table-column
                            inline-template
                            :context="_self"
                            fixed="right"
                            width="140"
                            label="操作">
                  <span>
                    <el-button type="text" size="small">查看</el-button>
                    <el-button @click="handleEdit($index, row)" type="text" size="small">编辑</el-button>
                    <el-button @click="handleDelete($index, row)" type="text" size="small">删除</el-button>
                  </span>
                    </el-table-column>
                </template>
            </p-search>
        </div>

    </div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
    @import "../../style/mixins.less";
    span.text-small {
        font-size: 12px;
    }
    p.table-text{
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 14px;
    }
    p.table-text.time {
        color: @text-second-color;
    }

    .el-select {
        width: 80px;
    }
</style>
<script>
	import BannerApi from '../../api/Banner'
  import {setTime} from '../../utils'
  export default {
    name: 'BannerList',
    data () {
      return {
        fetchList: BannerApi.list,
        bannerRules: {
        },
        bannerForm: {
          keyword: '',
          type: 'title',
          orderby: 'create_time'
        },
        showOverFlowTooltip: true
      }
    },
    methods: {
      handleEdit (index, row) {
        console.log('index = ' + index + ' row = ' + row)
      },
      handleDelete (index, row) {
      },
      handleCheck (val) {
      },
      refresh () {
        // this.$refs.user.refresh()
      },
      create () {
         this.$router.push('/admin/banner/new')
      },
      orderByChanged (v) {
        this.bannerForm.orderby = v
        this.$refs.banner_list.refreshList()
      },
      handleSubmit () {
        this.$refs.banner_list.handleSubmit()
      }
    },
    filters: {
      formatTime: function (value) {
        return setTime(value)
      }
    }
  }
</script>

