<template>
    <div>
        <el-checkbox  v-model="checkAll" @change="handleCheckAllChange">艺术家</el-checkbox>
        <div style="margin: 15px 0;"></div>
        <el-checkbox-group v-model="checkedTags" @change="handleCheckedTagsChange">
            <el-checkbox v-for="tag in tags" :label="tag.id">{{tag.name}}</el-checkbox>
        </el-checkbox-group>
    </div>
</template>

<script>
   const tagsOptions= [{
        name: "tax0",
        id: 216,
    }, {
        name: "tax1",
        id: 217,
    }, {
        name: "tax2",
        id: 218
    }];
    export default {
        data() {
            return {
                checkAll: true,
                checkedTags: [],
                tags: tagsOptions,
                isIndeterminate: false
            };
        },
        methods: {
            handleCheckAllChange(event) {
                this.checkedTags = event.target.checked ? tagsOptions : [];

            },
            handleCheckedTagsChange(value) {
                let checkedCount = value.length;
                this.checkAll = checkedCount >0;
            }
        }
    };
</script>

