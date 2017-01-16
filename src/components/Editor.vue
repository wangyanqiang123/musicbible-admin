<template>
		<div>
			<textarea :id="id" ref="editor"></textarea>
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
				<el-button size="small" type="primary" id="btn-element-upload" style="display: none;">点击上传</el-button>
			</el-upload>
		</div>
</template>

<script>
  /* global tinymce */

  import OSS from '../api/OSS'
  export default {
    name: 'p-editor',
    props: {
      value: String,
      options: Object,
      id: {
        type: String,
        default: 'editor'
      }
    },
    data () {
      return {
        multiple: true,
        ossDataFinished: false,
        uploadData: {},
        filePathDictionary: {}
      }
    },
    mounted () {
      if (!window.tinymce) {
        return
      }
      let options = Object.assign({}, {
        selector: `#${this.id}`,
        setup: function (editor) {
          console.log('fucking setup')
          editor.addButton('imageButton', {text: '图片', onclick: function () { document.getElementById('btn-element-upload').click() }})
        },
        height: 500,
        language: 'zh_CN',
        plugins: [
          'advlist autolink lists link charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table contextmenu paste code'
        ],
        toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent| link imageButton'
      }, this.options)
      const editor = this.editor = tinymce.EditorManager.createEditor(this.id, options)
      editor.on('change keyup nodechange', (e) => {
        const val = editor.getContent()
        this.$emit('change', val)
        this.$emit('input', val)
        this.$parent.$emit('el.form.change', val)
      })
      editor.on('blur', (e) => {
        this.$emit('blur', e)
        this.$parent.$emit('el.form.blur', editor.getContent())
      })
      editor.on('init', (e) => {
        editor.setContent(this.value)
      })
      editor.render()
    },
    methods: {
      setContent (val) {
        this.editor.setContent(val)
      },
      getContent () {
        this.editor.getContent()
      },
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
        var img = "<img style='max-width: 100%' src='" + OSS.host + '/' + this.filePathDictionary[file.name] + "'>"
        tinymce.activeEditor.execCommand('mceInsertContent', false, img)
      },
      handleBeforeUpload (file) {
        let key = 'editor/' + this.formatDate(new Date()) + file.name
        this.filePathDictionary[file.name] = key
        this.uploadData.key = key
      },
      handleProgress (event, file, fileList) {
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
          OSSAccessKeyId: data.accessid,
          policy: data.policy,
          signature: data.signature
        }
        this.ossDataFinished = true
      }, error => {
        console.log(error)
      })
    },
    beforeDestory () {
      tinymce && tinymce.execCommand('mceRemoveEditor', false, this.id)
    }
  }
</script>