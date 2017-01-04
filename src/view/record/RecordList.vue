<template>
    <p-layout>
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

                    <el-button type="button" class="button-new">新建</el-button>

            </template>
            <template slot="table">
                <el-table-column align="left"
                        label="唱片中文名"
                        width="300">
                    <template scope="scope">
                        <span style="text-overflow: ellipsis;white-space: nowrap" :title="scope.row.TitleCN">{{ scope.row.TitleCN }}</span>
                    </template>
                </el-table-column>
                <el-table-column align="left"
                        label="唱片英文名"
                        >
                    <template scope="scope">
                        <span style="text-overflow: ellipsis;white-space: nowrap" :title="scope.row.TitleCN">{{ scope.row.TitleEN }}</span>
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
    </p-layout>
</template>
<style lang="less" scoped>
    button.el-button.button-new {
        float: right;
    }
</style>
<script>
  import recordApi from '../../api/Record'

  export default {
    data () {
      return {
        fetchList: recordApi.list,
        recordRules: {
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
      }
    }
  }
</script>
