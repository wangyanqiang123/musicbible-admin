<template>
    <div>
        <div class="p-layout-breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/admin/dashboard' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/admin/record/list' }">唱片</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="p-layout-inner">
            <p-search
                    ref="record"
                    :search-rules="recordRules"
                    :fetch-list="fetchList"
                    page-layout="total, sizes, prev, pager, next, jumper"
                    :search-form="recordForm">
                <template slot="form">
                    <el-form-item prop="keyword">
                        <el-input v-model="recordForm.keyword" placeholder="唱片关键字"></el-input>
                    </el-form-item>
                    <el-form-item prop="role">
                        <el-select v-model="recordForm.searchType" placeholder="搜索条件">
                            <el-option label="唱片名称" value="0"></el-option>
                            <el-option label="唱片编号" value="1"></el-option>
                        </el-select>
                    </el-form-item>
                </template>
                <template slot="action" >
                    <el-button type="button" class="button-new" @click="createRecord" icon="edit">新建</el-button>
                </template>
                <template slot="table">
                    <el-table-column align="left"
                                     label="唱片编号"
                                     width="114">
                        <template scope="scope">
                            <p class="table-text" :title="scope.row.SerilNumber">{{ scope.row.SerilNumber }}</p>
                        </template>
                    </el-table-column>
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
                                     label="唱片名称"

                    >
                        <template scope="scope">
                            <p class="table-text" :title="scope.row.TitleCN">{{ scope.row.TitleCN }}</p>
                            <p class="table-text" :title="scope.row.TitleEN">{{ scope.row.TitleEN }}</p>
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
<style lang="less" rel="stylesheet/less" scoped>
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
  import RecordApi from '../../api/Record'
  import {setTime} from '../../utils'

  export default {
    name: 'RecordList',
    data () {
      return {
        fetchList: RecordApi.list,
        recordRules: {
          // keyword: [{required: true, trigger: 'blur', message: '请输入搜索关键字'}]
        },
        recordForm: {
          keyword: '',
          searchType: '0'
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
      createRecord () {
        this.$router.push('/record/new')
      }
    },
    filters: {
      formatTime: function (value) {
        return setTime(value)
      }
    }
  }
</script>
