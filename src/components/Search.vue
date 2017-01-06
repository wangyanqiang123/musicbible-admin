<template>
    <div class="p-search">
        <el-form :inline="true" :rules="searchRules" ref="searchForm" :model="searchForm" class="search-form">
            <slot name="form">
                <el-form-item prop="keywords">
                    <el-input v-model="searchForm.keywords" placeholder="关键字"></el-input>
                </el-form-item>
            </slot>
            <el-form-item>
                <el-button type="primary" @click="handleSubmit" icon="search">查询</el-button>
            </el-form-item>
        </el-form>

        <slot name="action"></slot>

        <el-table :data="tableData" v-loading="loadingList" element-loading-text="拼命加载中" style="width: 100%">
            <slot name="table"></slot>
        </el-table>

        <el-row>
            <el-pagination
                    :current-page="currentPage"
                    :page-size="pageSize"
                    :page-sizes="pageSizes"
                    :total="totalCount"
                    :layout="pageLayout"
                    @current-change="handleCurrentChange"
                    @size-change="handleSizeChange">
            </el-pagination>
        </el-row>
    </div>
</template>
<style lang="less" scoped>
    .search-form {
        float: left;
    }
</style>
<script>
  export default {
    name: 'p-search',
    props: {
      searchRules: Object,
      searchForm: Object,
      params: {
        type: Object,
        default () {
          return {
            page: 1,
            pageSize: 10
          }
        }
      },
      pageSizes: {
        type: Array,
        default () {
          return [10, 20, 30, 40]
        }
      },
      pageLayout: {
        type: String,
        default: 'total, prev, pager, next, jumper'
      },
      fetchList: {
        type: Function,
        required: true
      }
    },
    data () {
      return {
        tableData: [],
        totalCount: 0,
        pageSize: null,
        currentPage: 1,
        loadingList: true
      }
    },
    beforeCreated () {
      this.pageSize = this.params.pageSize
    },
    mounted () {
      this.fetch()
    },
    methods: {
      fetch (data = {}) {
        this.loadingList = true
        const params = Object.assign(this.params, this.searchForm, data)
        this.fetchList(params, response => {
          console.log(JSON.stringify(params))
          this.loadingList = false
          var data = response.data.result
          this.tableData = data.DataList
          this.totalCount = data.TotalCount
        }, error => {
          this.loadingList = false
          console.log('error: ' + JSON.stringify(error))
        })
      },
      refresh () {
        const page = this.currentPage = 1
        this.fetch({page})
      },
      handleSizeChange (pageSize) {
        this.pageSize = pageSize
        this.fetch({pageSize})
      },
      handleCurrentChange (page) {
        this.currentPage = page
        this.fetch({page})
      },
      handleSubmit () {
        this.$refs.searchForm.validate(valid => {
          if (valid) {
            this.currentPage = 1
            this.fetch()
          } else {
            return false
          }
        })
      }
    }
  }
</script>
<style lang="less">
    .p-search {
        .el-pagination {
            float: right;
            margin-top: 10px;
        }
        &-action {
            padding: 16px 0;
            float: right;
        }
    }
</style>
