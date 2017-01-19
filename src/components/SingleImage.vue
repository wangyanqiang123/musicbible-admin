<template>
    <div class="single-image">
        <el-upload
                ref="singleImage"
                type="drag"
                :action="action"
                :data="uploadData"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-error="handleError"
                :on-success="handleSuccess"
                :before-upload="handleBeforeUpload"
                :default-file-list="fileList"
                :thumbnail-mode="true"
                :mutiple="false"
                v-if="ossDataFinished">
            <i class="el-icon-upload"></i>
            <div class="el-dragger__text"><em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
        </el-upload>
    </div>
</template>
<style>

</style>
<script>
    import OSS from '../api/OSS'
    import {revertListToName, revertListToId, formatDate} from '../utils'
    import Config from '../config'
    export default {
        name: 'SingleImage',
        props: {
            defaultImgList: {
                type: Array,
                default: []
            },
            keyPrefix: {
                type: String,
                default: 'key'
            }
        },
        data () {
            return {
                ossDataFinished: false,
                uploadData: {},
                filePathDictionary: {},
                fileList: this.defaultImgList,
                action: Config.uploadServerUrl
            }
        },
        methods: {
            getFileList () {
                return revertListToId(this.$refs.singleImage.fileList)
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
                console.log('file: ' + this.filePathDictionary[file.name] + ' upload success')
                let index = fileList.indexOf(file)
                this.$refs.singleImage.fileList[index].url = Config.uploadServerUrl + '/' + this.filePathDictionary[file.name]
                this.$refs.singleImage.fileList[index].name = null
            },
            handleBeforeUpload (file) {
                let key = this.keyPrefix + '/' + formatDate(new Date()) + file.name
                this.filePathDictionary[file.name] = key
                this.uploadData.key = key
            }
        },
        beforeMount () {
            this.fileList = revertListToName(this.defaultImgList)
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
                console.log('errorfetchpolicy:', error)
            })
        }
    }
</script>
