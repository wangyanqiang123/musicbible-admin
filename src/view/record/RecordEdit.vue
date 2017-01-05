<template>
  <p-layout>
    <el-upload
            v-if="ossDataFinished"
            action="http://hifiimg.oss-cn-hangzhou.aliyuncs.com"
            :data="uploadData"
            :multiple="multiple"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-error="handleError"
            :on-success="handleSuccess"
            :default-file-list="fileList"
            :before-upload="handleBeforeUpload">
      <el-button size="small" type="primary">点击上传</el-button>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </p-layout>
</template>
<style>

</style>
<script>
import OSS from '../../api/OSS'
export default {
  data () {
    return {
      multiple: true,
      fileList: [{name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}, {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}],
      ossDataFinished: false,
      uploadData: {}
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log(file)
    },
    handleError (err, response, file) {
      console.log(err)
      console.log(response)
    },
    handleSuccess (response, file, fileList) {
      console.log('file: ' + file.name + 'upload success')
    },
    handleBeforeUpload (file) {
      this.uploadData.key = 'record/' + this.formatDate(new Date()) + file.name
    },
    formatDate (now) {
      var year = now.getFullYear()
      var month = now.getMonth() + 1
      var date = now.getDate()
      var hour = now.getHours()
      var minute = now.getMinutes()
      var second = now.getSeconds()
      return year + '' + this.addZero(month) + '' + this.addZero(date) + '' + this.addZero(hour) + '' + this.addZero(minute) + '' + this.addZero(second)
    },
    addZero (number) {
      return number > 10 ? number : '0' + number
    }

  },
  beforeMount () {
    OSS.fetchPolicy(response => {
      console.log(response.data.result)
      var data = response.data.result
      this.uploadData = {
        OSSAccessKeyId: data.accessId,
        policy: data.policy,
        signature: data.signature
      }

      this.ossDataFinished = true
    }, error => {
      console.log(error)
    })
  }
}
</script>
