<template>
	<div>
		<div class="p-layout-breadcrumb">
			<el-breadcrumb separator="/">
				<el-breadcrumb-item :to="{ path: '/admin/dashboard' }">首页</el-breadcrumb-item>
				<el-breadcrumb-item :to="{ path: '/admin/label/list' }">厂牌</el-breadcrumb-item>
			</el-breadcrumb>
		</div>
		<div class="p-layout-inner">
			<p-search
				ref="label-list"
				:search-rules="labelRules"
				:fetch-list="fetchList"
				page-layout="total, sizes, prev, pager, next, jumper"
				:search-form="labelForm">
				<template slot="form">
						<el-form-item prop="type">
							<el-select v-model="labelForm.type" placeholder="搜索条件">
								<el-option label="标题" value="title"></el-option>
								<el-option label="创建者" value="owner"></el-option>
							</el-select>
						</el-form-item>
						<el-form-item prop="keyword">
							<el-input v-model="labelForm.keyword" placeholder="关键字"></el-input>
						</el-form-item>
						<el-form-item prop="orderby">
							<el-radio-group v-model="labelForm.orderby">
								<el-radio-button label="创建时间"></el-radio-button>
								<el-radio-button label="权重"></el-radio-button>
							</el-radio-group>
						</el-form-item>

				</template>
				<template slot="table">
					<el-table-column align="left"
					                 label="权重"
					                 width="114">
						<template scope="scope">
							<p class="table-text" :title="scope.row.recommend_level">{{ scope.row.recommend_level }}</p>
						</template>
					</el-table-column>

					<el-table-column align="left"
					                 label="创建信息"
					                 width="180"
					>
						<template scope="scope">
							<p class="table-text" :title="scope.row.creator.username">{{ scope.row.creator.username }}</p>
							<p class="table-text time" :title="scope.row.create_timestamp">创建于{{ scope.row.create_timestamp | formatTime}}</p>
						</template>
					</el-table-column>

					<el-table-column align="left"
					                 label="标题"
					>
						<template scope="scope">
							<p class="table-text" :title="scope.row.title_en">{{ scope.row.title_en }}</p>
						</template>
					</el-table-column>

					<el-table-column
									inline-template
									:context="_self"
									fixed="right"
									width="150"
									label="操作">
                  <span>
                    <el-button type="text" size="small">查看</el-button>
                    <el-button @click="handleEdit($index, row)" type="text" size="small">编辑</el-button>
                    <el-button @click="handleDelete($index, row)" type="text" size="small">删除</el-button>
                  </span>
					</el-table-column>
				</template>
			</p-search>
		</div>
	</div>
</template>
<style lang="less" rel="stylesheet/less" scoped>
	@import "../../style/app.less";
	p.table-text{
		white-space: nowrap;
		text-overflow: ellipsis;
		line-height: 14px;
	}
	p.table-text.time {
		color: @text-second-color;
	}
	label.el-radio-button.is-active {
		span {
			background: @primary-dark-color !important;
		}
	}
</style>
<script>
	import LabelApi from '../../api/Label'
  import {setTime} from '../../utils'
  export default {
    name: 'LabelList',
    data () {
      return {
        fetchList: LabelApi.list,
        labelRules: {
        },
        labelForm: {
          keyword: '',
          type: 'title',
          orderby: '创建时间'
        }
      }
    },
    methods: {
      handleEdit (index, row) {
      },
      handleDelete (index, row) {
      },
      handleCheck (val) {
      },
      refresh () {
        // this.$refs.user.refresh()
      },
      createRecord () {
        // this.$router.push('/record/new')
      }
    },
    filters: {
      formatTime: function (value) {
        return setTime(value)
      }
    }
  }
</script>
