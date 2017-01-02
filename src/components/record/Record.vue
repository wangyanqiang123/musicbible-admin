<template>
  <section>
    <template>
      <el-table :data="recordlist" style="width:100%" border v-loading="loadinglist" element-loading-text="拼命加载中">
        <el-table-column prop="TitleCN" label="中文名称"></el-table-column>
        <el-table-column prop="TitleEN" label="英文名称"></el-table-column>
        <el-table-column inline-template :context="_self" label="操作" width="100">
          <span>
            <el-button @click="handleEdit($index, row)" type="text" size="small">编辑</el-button>
            <el-button @click="handleDelete($index, row)" type="text" size="small">删除</el-button>
          </span>
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
    <el-dialog :title="dialogData.dialogTitle" v-model="dialogData.dialogVisible">
      <el-form ref="recordForm" :rules="dialogData.rules" :model="dialogData.record" label-width="120px">
        <el-form-item label="中文名称" prop="TitleCN">
          <el-input v-model="dialogData.record.TitleCN" size="large"></el-input>
        </el-form-item>
        <el-form-item label="英文名称" prop="TitleEN">
          <el-input v-model="dialogData.record.TitleEN" size="large"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer">
        <el-button @click="submitDialog">确定</el-button>
        <el-button @click="dialogData.dialogVisible = false">取消</el-button>
      </div>
    </el-dialog>
  </section>
</template>
<style>
</style>
<script>
  import record from '../../api/Record'
  export default {
    data () {
      return {
        recordlist: [],
        total: 0,
        page: 1,
        pageSize: 10,
        loadinglist: false,
        dialogData: {
          dialogVisible: false,
          dialogTitle: '',
          record: {
            TitleCN: '',
            TitleEN: ''
          },
          rules: {
            TitleCN: [{required: true, message: '请输入中文名称', trigger: 'blur'}],
            TitleEN: [{required: true, message: '请输入英文名称', trigger: 'blur'}]
          }
        }
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
      },
      handleEdit (index, row) {
        this.dialogData.record = row
        this.dialogData.dialogVisible = true
        this.dialogData.dialogTitle = '编辑唱片:' + row.TitleCN
        console.log(this.dialogData.dialogVisible)
      },
      handleDelete (index, row) {

      },
      submitDialog () {
        this.dialogData.dialogVisible = false
        this.dialogData.dialogTitle = ''
      }
    },
    beforeMount () {
      this.fetchRecordList()
    }

  }
</script>
