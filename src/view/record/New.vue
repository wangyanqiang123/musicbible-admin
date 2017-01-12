<template>
    <div>
        <div class="p-layout-breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/index' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/record/list' }">唱片</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/record/new' }">新建</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        This is New Record Page
    </div>
</template>