<template>
	<div>
		<div class="p-layout-breadcrumb">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/admin/dashboard' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/admin/article/list' }">赏析文章</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
	</div>
</template>
