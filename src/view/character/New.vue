<template>
    <div>
        <div class="p-layout-breadcrumb">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/admin/character/list' }">音乐家</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/admin/character/new' }">编辑</el-breadcrumb-item>
            </el-breadcrumb>
            <el-button type="text" class="right">删除</el-button>
        </div>

        <el-card class="box-card">
            <div slot="header" class="clearfix">
                <span>音乐家类型<span>(请先选择类型）</span></span>
            </div>
            <el-row>
                <el-col :span="4">
                    <el-checkbox v-model="musician.is_composer" >作曲家</el-checkbox>
                </el-col>
                <el-col :span="20">
                    <el-checkbox v-model="musician.is_artist">艺术家</el-checkbox>
                    <el-checkbox-group>
                        <el-checkbox v-for="tag in tags" :label="tag.id">{{tag.name}}
                        </el-checkbox>
                    </el-checkbox-group>
                </el-col>
                <el-col>
                    <check-all></check-all>
                </el-col>
            </el-row>
        </el-card>
        <el-form ref="form" :model="musician" :rules="rules" label-width="90px" label-position="right"
                 id="form-artist">
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>基本信息</span></span>
                </div>

                <el-form-item label="中文名称" prop="name_cn">
                    <el-input v-model="musician.name_cn" placeholder="请输入中文名称"></el-input>
                </el-form-item>
                <el-form-item label="英文名称" prop="last_name_en">
                    <el-col :span="11">
                        <el-input v-model="musician.last_name_en" placeholder="请输入英文名"></el-input>
                    </el-col>
                    <el-col class="line" :span="2">-</el-col>
                    <el-col :span="11">
                        <el-input v-model="musician.first_name_en" placeholder="请输入英文姓"></el-input>
                    </el-col>
                </el-form-item>
                <el-form-item label="出生年份" prop="birthday">
                    <el-date-picker type="date" placeholder="选择日期" v-model="musician.birthday"></el-date-picker>
                </el-form-item>
                <el-form-item label="逝世年份" prop="deathday">
                    <el-date-picker type="date" placeholder="选择日期" v-model="musician.deathday"></el-date-picker>
                </el-form-item>

                <el-form-item label="国籍" prop="country">
                    <el-input v-model="musician.country" placeholder="请输入国籍"></el-input>
                </el-form-item>
                <el-form-item label="排序权重" prop="recommend_level">
                    <el-input v-model="musician.recommend_level"></el-input>
                </el-form-item>
                <el-form-item label="流派" prop="representative_work">
                    <el-radio-group v-model="musician.representative_work">
                        <el-radio :label="1">古典</el-radio>
                        <el-radio :label="2">现代</el-radio>
                        <el-radio :label="3">民族</el-radio>
                    </el-radio-group>
                </el-form-item>


            </el-card>
            <el-card class="box-card">
                <div slot="header" class="clearfix">
                    <span>关联曲目</span>
                </div>
                <el-form-item label="添加曲目" prop="name_cn">
                    <!--<el-autocomplete-->
                    <!--popper-class="my-autocomplete"-->
                    <!--:fetch-suggestions="querySearchAsync"-->
                    <!--custom-item="my-item-zh"-->
                    <!--placeholder="请输入曲目"-->
                    <!--&gt;</el-autocomplete>-->
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="onSubmit('form')" v-loading.fullscreen.lock="fullscreenLoading">
                        确定添加
                    </el-button>
                </el-form-item>


            </el-card>

            <el-button type="primary" @click="onSubmit('form')" v-loading.fullscreen.lock="fullscreenLoading">
                确定
            </el-button>
            <el-button>取消</el-button>
        </el-form>

    </div>
</template>
<style lang="less" scoped>
    .el-card {
        margin-top: 1em;
    }

    /*#form-artist {*/
    /*width: 400px;*/
    /*}*/

    .line {
        text-align: center;
    }
</style>
<script>
    import ArtistApi from '../../api/Artist'
    import CheckAll from '../../components/CheckAll'

    export default {
        components: {CheckAll},
        data () {
            return {
                tags: [{
                    parent: null,
                    name: "tax0",
                    id: 216,
                }, {
                    parent: null,
                    name: "tax1",
                    id: 217,
                }, {
                    name: "tax2",
                    group: 56,
                    id: 218
                }
                ],
                musician: {
                    is_composer: false,
                    is_artist: true,
                    taxonomies: [213, 214, 215],
                    tagsChecked: [true, false, false],
                    name_cn: '中文名',
                    first_name_en: 'en_first_name',
                    last_name_en: 'en_last_name',
                    country: 'china',
                    deathday: '2010-10-10',
                    birthday: '2012-12-12',
                    recommend_level: 0,
                    representative_work: '1',

                    info_sections: [{
                        title: 'one',
                        text: '111'
                    }, {
                        title: 'two',
                        order: 3,
                        text: '222'
                    }],
                    good_at: 'dota',

                    images: [{
                        url: 'a/b/c',
                        is_recommend: true,
                        type: 0,
                        order: 0,
                        recommend_level: 1
                    }, {
                        url: 'a/b'
                    }],
                    career: 'good man',
                    is_draft: 0
                },
                fullscreenLoading: false,
                form: {
                    birthday: '1764-08-11',
                    deathday: '1800-09-22',
                    recommend_level: 0,
                    country: '',
                    name_cn: '',
                    first_name_en: '',
                    last_name_en: ''
                },
                rules: {
                    name_cn: [
                        {required: true, message: '请输入中文名称', trigger: 'blur'}
                    ],
                    last_name_en: [
                        {required: true, message: '请输入英文名', trigger: 'blur'}
                    ],
                    first_name_en: [
                        {required: true, message: '请输入英文姓', trigger: 'blur'}
                    ]
                }
            }
        },
        mounted(){
        },
        methods: {

            handleCheckedTag(){

            },
            onSubmit(formName)
            {
                this.fullscreenLoading = true
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        ArtistApi.create(this.form, response => {
                            console.log(response)
                            this.loadingList = false
                            var data = response.data.result
                            this.tableData = data.DataList
                            this.totalCount = data.TotalCount
                        }, error => {
                            this.fullscreenLoading = false
                            console.log('error: ' + JSON.stringify(error))
                        })
                    } else {
                        this.fullscreenLoading = false
                        console.log('error submit!!')
                        return false
                    }
                })
            }
        }
    }
</script>
