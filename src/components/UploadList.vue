<template>
    <div class="p-upload-list">
        <el-upload
                ref="imageUpload"
                action="http://hifiimg.oss-cn-hangzhou.aliyuncs.com"
                :data="uploadData"
                :on-preview="handlePreview"
                :on-remove="handleRemove"
                :on-error="handleError"
                :on-success="handleSuccess"
                :on-progress="handleProgress"
                :before-upload="handleBeforeUpload"
                :default-file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
        </el-upload>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    .p-upload-list {
        .el-upload__img {
            width: 100px;
            height: 100px;
        }
    }
</style>
<script>
    import OSS from '../api/OSS'
    export default {
        name: 'UploadList',
        data () {
            return {
                multiple: true,
                ossDataFinished: false,
                uploadData: {},
                filePathDictionary: {},
                fileList: [{
                    name: 'food.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }, {
                    name: 'food2.jpeg',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }]
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
                let imgList = this.$refs.imageUpload.$el.querySelectorAll('li.el-upload__file')
                let index = fileList.indexOf(file)
                imgList[index].appendChild(this.createImg(fileList, index))
            },
            initAppendImgs () {
                let fileList = this.fileList
                let imgList = this.$refs.imageUpload.$el.querySelectorAll('li.el-upload__file')
                for (let [index, li] of imgList.entries()) {
                    li.appendChild(this.createImg(fileList, index))
                }
            },
            createImg (fileList, index) {
                let imgElement = document.createElement('img')
                imgElement.setAttribute('src', fileList[index].url)
                imgElement.setAttribute('class', 'el-upload__img')
                return imgElement
            },
            handleBeforeUpload (file) {
                let key = 'record/' + this.formatDate(new Date()) + file.name
                this.filePathDictionary[file.name] = key
                this.uploadData.key = key
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
                console.log('errorfetchpolicy:', error)
            })
        },
        mounted () {
            this.initAppendImgs()
        }
    }
</script>
