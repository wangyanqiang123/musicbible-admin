<template>
  <div>
    <el-upload
            v-if="ossDataFinished"
            action="http://hifiimg.oss-cn-hangzhou.aliyuncs.com"
            :data="uploadData"
            :multiple="multiple"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-error="handleError"
            :on-success="handleSuccess"
            :on-progress="handleProgress"
            :before-upload="handleBeforeUpload"
            accept="image/*">
      <el-button size="small" type="primary">点击上传</el-button>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
    </el-upload>
  </div>
</template>
<style>

</style>
<script>
import OSS from '../../api/OSS'
export default {
  name: 'RecordEdit',
  data () {
    return {
      multiple: true,
      ossDataFinished: false,
      uploadData: {},
      filePathDictionary: {}
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePreview (file) {
      console.log('handlePreview ' + file.response)
    },
    handleError (err, response, file) {
      console.log(err)
      console.log(response)
    },
    handleSuccess (response, file, fileList) {
      console.log('file ' + this.filePathDictionary[file.name] + ' upload success')
    },
    handleBeforeUpload (file) {
      let key = 'record/' + this.formatDate(new Date()) + file.name
      this.filePathDictionary[file.name] = key
      this.uploadData.key = key
    },
    handleProgress (event, file, fileList) {
      console.log(event)
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
      return number >= 10 ? number : '0' + number
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
