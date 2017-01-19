<template>
    <div>
        <div class="p-layout-breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/admin/dashboard' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/admin/character/list' }">艺术家</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="p-layout-inner">
            <p-search
                    ref="record"
                    :search-rules="artistRules"
                    :fetch-list="fetchList"
                    page-layout="total, sizes, prev, pager, next, jumper"
                    :search-form="artistForm">
                <template slot="form">
                    <el-form-item prop="keyword">
                        <el-input v-model="artistForm.keyword" placeholder="关键字"></el-input>
                    </el-form-item>
                </template>
                <template slot="action" >
                    <el-button type="button" class="button-new" @click="createArtist" icon="edit">新建</el-button>
                </template>
                <template slot="table">
                    <el-table-column align="left"
                                     label="创建信息"
                                     width="180"
                    >
                        <template scope="scope">
                            <p class="table-text" :title="scope.row.Creator.NickName || scope.row.Creator.NickName">{{ scope.row.Creator.NickName || scope.row.Creator.UserName }}</p>
                            <p class="table-text time" :title="scope.row.PublishTime">创建于{{ scope.row.PublishTime | formatTime}}</p>
                        </template>
                    </el-table-column>
                    <el-table-column align="left"
                                     label="艺术家名称"

                    >
                        <template scope="scope">
                            <p class="table-text" :title="scope.row.TitleCN">{{ scope.row.name_cn }}</p>
                            <p class="table-text" :title="scope.row.TitleEN">{{ scope.row.last_name_en }}</p>
                            <p class="table-text" :title="scope.row.TitleEN">{{ scope.row.first_name_en }}</p>
                        </template>
                    </el-table-column>
                    <el-table-column
                            inline-template
                            :context="_self"
                            fixed="right"
                            width="150"
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
<style lang="less" rel="stylesheet/less">
    @import "../../style/mixins.less";
    button.el-button.button-new {
        float: right;
    }
    p.table-text{
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 14px;
    }
    p.table-text.time {
        color: @text-second-color;
    }
</style>
<script>
  import ArtistApi from '../../api/Artist'
  import {setTime} from '../../utils'

  export default {
    name: 'ArtistList',
    data () {
      return {
        fetchList: ArtistApi.list,
        artistRules: {
          // keyword: [{required: true, trigger: 'blur', message: '请输入搜索关键字'}]
        },
        artistForm: {
          keyword: ''
        }
      }
    },
    methods: {
      handleEdit (index, row) {
      },
      handleDelete (index, row) {
      },
      handleCheck (val) {
      },
      refresh () {
        // this.$refs.user.refresh()
      },
      createArtist () {
        this.$router.push('/admin/character/new')
      }
    },
    filters: {
      formatTime: function (value) {
        return setTime(value)
      }
    }
  }
</script>
