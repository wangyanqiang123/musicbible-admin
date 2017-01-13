<template>
  <div>
      <div class="p-layout-breadcrumb">
          <el-breadcrumb separator="/">
              <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/artist/list' }">艺术家</el-breadcrumb-item>
              <el-breadcrumb-item :to="{ path: '/artist/new' }">新建</el-breadcrumb-item>
          </el-breadcrumb>
      </div>
      <el-card class="box-card">
          <el-form ref="form" :model="form" :rules="rules"  label-width="70px" label-position="left" id="form-artist">
              <el-form-item label="中文名" prop="name_cn">
                  <el-input v-model="form.name_cn"></el-input>
              </el-form-item>
              <el-form-item label="英文名" prop="last_name_en">
                  <el-input v-model="form.last_name_en"></el-input>
              </el-form-item>
              <el-form-item label="英文姓" prop="first_name_en">
                  <el-input v-model="form.first_name_en"></el-input>
              </el-form-item>

              <el-form-item>
                  <el-button type="primary" @click="onSubmit('form')" v-loading.fullscreen.lock="fullscreenLoading">立即创建</el-button>
                  <el-button>取消</el-button>
              </el-form-item>
          </el-form>
      </el-card>

  </div>
</template>
<style lang="less" scoped>
    .el-card {
        margin-top: 1em;
    }
    #form-artist {
        width: 400px;
    }
</style>
<script>
import ArtistApi from '../../../api/Artist'
export default {
  data () {
    return {
      fullscreenLoading: false,
      form: {
        birthday: '1764-08-11',
        deathday: '1800-09-22',
        recommend_level: 0,
        country: '',
        name_cn: '',
        first_name_en: '',
        last_name_en: ''
      },
      rules: {
        name_cn: [
          {required: true, message: '请输入中文名称', trigger: 'blur'}
        ],
        last_name_en: [
            {required: true, message: '请输入英文名', trigger: 'blur'}
        ],
        first_name_en: [
            {required: true, message: '请输入英文姓', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit (formName) {
      this.fullscreenLoading = true
      this.$refs[formName].validate((valid) => {
        if (valid) {
          ArtistApi.create(this.form, response => {
            console.log(response)
            this.loadingList = false
            var data = response.data.result
            this.tableData = data.DataList
            this.totalCount = data.TotalCount
          }, error => {
            this.fullscreenLoading = false
            console.log('error: ' + JSON.stringify(error))
          })
        } else {
          this.fullscreenLoading = false
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>