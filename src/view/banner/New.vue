<template>
	<div>
		<el-row class="panel-top">
			<div class="p-layout-breadcrumb">
				<el-breadcrumb separator="/">
					<el-breadcrumb-item :to="{ path: '/admin/dashboard' }">首页</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/admin/banner/list' }">Banner</el-breadcrumb-item>
					<el-breadcrumb-item :to="{ path: '/admin/banner/new' }">新建</el-breadcrumb-item>
				</el-breadcrumb>
			</div>
			<el-button type="button" class="button-new" @click="create" icon="edit">新建</el-button>
		</el-row>
	</div>
</template>
<style>


</style>
<script>


</script>
