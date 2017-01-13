<template>
    <div>
        <div class="p-layout-breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/admin/dashboard' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/admin/record/list' }">唱片</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/admin/record/new' }">新建</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        This is New Record Page
    </div>
</template>