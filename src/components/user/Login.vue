<template>
  <el-form ref="form" :model="form" :rules="validator" label-width="80px" class="card-box">
    <h3>音乐圣经后台管理登陆</h3>
    <el-form-item label="帐号" prop="username">
      <el-input v-model="form.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="pass">
      <el-input v-model="form.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<style>
  .card-box {
    padding: 20px;
    /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
    -webkit-border-radius: 5px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    background-clip: padding-box;
    margin-bottom: 20px;
    background-color: #F9FAFC;
    margin: 120px auto;
    width: 400px;
    border: 2px solid #8492A6;
  }
</style>
<script>
export default {
  name: 'Login',
  data () {
    return {
      form: {
        username: '',
        password: ''
      },
      validator: {
        username: [
          {required: true, trigger: 'blur', message: '请输入帐号'}
        ],
        pass: [
          {required: true, trigger: 'blur', message: '请输入密码'}
        ]
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('onsumbit')
    }
  }

}
</script>
