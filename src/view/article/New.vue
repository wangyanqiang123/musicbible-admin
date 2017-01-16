<template>
	<div>
		<div class="p-layout-breadcrumb">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/admin/dashboard' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/admin/article/list' }">赏析文章</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/admin/article/new' }">新建</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<el-card class="box-card">
			<p-editor v-model="ruleForm.content"></p-editor>
		</el-card>
		<button @click="getContent">test</button>
	</div>
</template>
<style lang="less" scoped>
	.el-card {
		margin-top: 1em;
	}

</style>
<script>
export default {
  data () {
    return {
      ruleForm: {
        content: '<p>this is fake content</p>'
      }
    }
  },
  methods: {
    getContent () {
      console.log(this.ruleForm.content)
    }
  }
}

</script>
