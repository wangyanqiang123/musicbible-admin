<template>
    <div>
        <upload-list ref="uploadList"
                     :default-img-list="imgList"
                     key-prefix="record"
        ></upload-list>
        <button @click="getFileList">获取数据</button>
    </div>
</template>
<style>
</style>
<script>
    import UploadList from '../../components/UploadList'

    export default {
        name: 'RecordEdit',
        components: {UploadList},
        data () {
            return {
                imgList: [{
                    id: '123',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }, {
                    id: '234',
                    url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
                }]
            }
        },
        methods: {
            getFileList () {
                console.log(this.$refs.uploadList.getFileList())
            }
        },
        beforeMount () {

        }
    }
</script>
