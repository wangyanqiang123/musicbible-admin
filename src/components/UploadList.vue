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
                :before-upload="handleBeforeUpload"
                :default-file-list="fileList">
            <el-button size="small" icon="plus" class="p-upload-button"></el-button>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件</div>
        </el-upload>
    </div>
</template>
<style lang="less" rel="stylesheet/less">
    @import "../style/mixins";
    .p-upload-list {
        background: #fff;
        .el-upload__files {
            display: flex;
            flex-wrap: wrap;
        }

        .el-upload__file {
            position: relative;
            width: 100px;
            height: 100px;
            margin: 5px;
            background: #F3F4F6;
            &__name {
               display:none;
            }
            .el-upload__img {
                width: 100%;
            }
        }

        .p-upload-button,
        .p-upload-button:hover,
        .p-upload-button:focus,
        .p-upload-button:active {
            width: 100px;
            height: 100px;
            font-size: 32px;
            background: #F3F4F6;
            color: @text-third-color;
            border-color: @divider-dark-color;

            &:hover,
            &:focus,
            &:active{
                background: #EBECEE;
            }
        }

        .el-upload__file a [class^="el-icon"] {
            display: none;
        }

        .el-upload__btn-delete {
            display: block;
            position: absolute;
            top: 35px;
            left: 35px;
            width: 30px;
            height: 30px;
            opacity: 0;
            text-indent: -999px;
            color: @background-gray;
            &:after {
                display:block;
                position: absolute;
                top: 0;
                left: 0;
                width: 30px;
                height: 30px;
                text-align: center;
                font-size: 20px;
                line-height:30px;
                font-family: element-icons !important;
                font-weight: 400;
                content: "\E612";
                text-indent: 0;
            }
        }
        .el-upload__file:hover:before{
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.2);
        }
        .el-upload__file:hover .el-upload__btn-delete {
            opacity: 1;
        }
    }
</style>
<script>
    import OSS from '../api/OSS'
    import {revertListToName, revertListToId} from '../utils'
    export default {
        name: 'UploadList',
        props: {
            defaultImgList: {
                type: Array,
                default: []
            },
            keyPrefix: {
                type: String,
                default: 'p'
            }
        },
        data () {
            return {
                multiple: true,
                ossDataFinished: false,
                uploadData: {},
                filePathDictionary: {},
                fileList: this.defaultImgList
            }
        },
        methods: {
            getFileList () {
                return revertListToId(this.$refs.imageUpload.fileList)
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
                let imgList = this.$refs.imageUpload.$el.querySelectorAll('li.el-upload__file')
                let index = fileList.indexOf(file)
                imgList[index].appendChild(this.createImg(fileList, index))
                this.$refs.imageUpload.fileList[index].name = 0
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
                let key = this.keyPrefix + '/' + this.formatDate(new Date()) + file.name
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
        },
        mounted () {
            this.initAppendImgs()
        }
    }
</script>
