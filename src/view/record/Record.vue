<template>
  <p-layout>
    <section>
      <template>
        <el-table :data="recordlist" border style="width:100%" v-loading="loadinglist" element-loading-text="拼命加载中">
          <el-table-column label="中文名称" align="left" width="300px">
            <template scope="scope">
              <span style="text-overflow: ellipsis;white-space: nowrap" :title="scope.row.TitleCN">{{ scope.row.TitleCN }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="TitleEN" label="英文名称" align="left">
            <template scope="scope">
              <span style="text-overflow: ellipsis;white-space: nowrap" :title="scope.row.TitleEN">{{ scope.row.TitleEN }}</span>
            </template>
          </el-table-column>
        </el-table>
        <el-row>
          <el-col :span="24">
            <el-pagination layout="total, prev, pager, next, jumper" :total="total"
                           :current-page="page"
                           :page-size="pageSize"
                           @current-change="pageChange"
                           @size-change="sizeChange"></el-pagination>
          </el-col>
        </el-row>
      </template>
    </section>
  </p-layout>
</template>
<style scoped lang="less">
  .el-pagination {
    float: right;
    margin-top: 1em;
  }
</style>
<script>
  import record from '../../api/Record'
  export default {
    data () {
      return {
        recordlist: [],
        total: 0,
        page: 1,
        pageSize: 20,
        loadinglist: true
      }
    },
    methods: {
      sizeChange (size) {
        this.pageSize = size
      },
      pageChange (page) {
        this.page = page
        this.fetchRecordList()
      },
      fetchRecordList () {
        this.loadinglist = true
        record.list(this.page, this.pageSize, response => {
          this.loadinglist = false
          const data = response.data.result
          this.total = data.TotalCount
          this.recordlist = data.DataList
        }, error => {
          this.loadinglist = false
          console.log(error)
        })
      }
    },
    beforeMount () {
      this.fetchRecordList()
    }

  }
</script>
