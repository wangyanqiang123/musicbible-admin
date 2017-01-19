<template>
	<div >
		<el-row class="panel-top">
			<div class="p-layout-breadcrumb">
				<el-breadcrumb separator="/">
					<el-breadcrumb-item :to="{ path: '/admin/dashboard' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/admin/banner/list' }">Banner</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/admin/banner/new' }">新建</el-breadcrumb-item>
				</el-breadcrumb>
			</div>

		</el-row>
		<el-form ref="bannerForm" :rules="rules" label-position="right" label-width="60px" :model="bannerForm" v-loading="posting" element-loading-text="新建Banner中">
		<div class="edit-body">
			<span class="edit-header">基本信息</span>
			<hr />
				<el-form-item label="标题" prop="title">
					<el-input v-model="bannerForm.title"></el-input>
				</el-form-item>
				<el-form-item label="URL" prop="url">
					<el-input v-model="bannerForm.url"></el-input>
				</el-form-item>
				<el-form-item label="权重">
					<el-input-number :min="minWeight" v-model="bannerForm.weight"></el-input-number>
				</el-form-item>
		</div>
		<div class="edit-body">
			<span class="edit-header">Banner图片</span>
			<hr />
			<single-image ref="singleImage"
			              :default-img-list="imageList"
			              key-prefix="banner">

			</single-image>
		</div>
		<div class="edit-body">
			<span class="edit-header">是否立即发布</span>
			<hr />
				<el-switch v-model="bannerForm.is_draft" on-text="否" off-text="是" off-color="#13ce66" on-color="#ff4949">
				</el-switch>
		</div>
		<el-row>
			<el-button type="primary" @click="onSubmit('bannerForm')">确定</el-button>
			<el-button type="text">取消</el-button>
		</el-row>
		</el-form>
	</div>
</template>
<style>


</style>
<script>
	import SingleImage from '../../components/SingleImage'
	import BannerApi from '../../api/Banner'
	export default {
	        name: 'BannerEdit',
	        components: {SingleImage},
	        data () {
	            return {
	              imageList: [],
	              bannerForm: {
	                title: '',
	                url: '',
	                weight: 0,
	                is_draft: false
	              },
	              rules: {
	                title: [
	                  { required: true, message: '请输入标题', trigger: 'blur' }
	                ],
	                url: [
	                  { required: true, message: '请输入URL', trigger: 'blur' }
	                ]
	              },
	              minWeight: 0,
	              posting: false
	            }
	        },
	        methods: {
	            getFileList () {
	                console.log(this.$refs.singleImage.getFileList())
	            },
	            onSubmit (formName) {
	              this.posting = true
	              this.$refs[formName].validate((valid) => {
	                if (valid) {
	                  const images = {images: this.$refs.singleImage.getFileList()}
	                  const params = Object.assign(this.bannerForm, images)
	                  console.log(params)
	                  BannerApi.create(params, response => {
	                    console.log(response)
	                    this.posting = false
	                    this.$router.replace('/admin/banner/list')
	                  }, error => {
	                    this.posting = false
	                    console.log('error: ' + JSON.stringify(error))
	                  })
	                } else {
	                  this.posting = false
	                  console.log('error submit!!')
	                  return false
	                }
	              })
	            }
	        },
	        beforeMount () {
	        },
	        activated () {
	          console.log('banner new page is activated')
	          this.imageList = []
	          this.bannerForm = {
	            title: '',
	            url: '',
	            weight: 0,
	            is_draft: false
	          }
	          this.posting = false
	        }
	    }
</script>
