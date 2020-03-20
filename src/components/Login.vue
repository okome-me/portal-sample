<template>
  <div class="login">
    <el-card class="box-card login">

    <div slot="header" class="clearfix">
        <span>Login</span>
        <el-button style="float: right; padding: 3px 0" type="text">Forget password</el-button>
    </div>

    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="Name">
            <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="Password">
            <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button style="float: right" type="primary" @click="onSubmit()">Login</el-button>
        </el-form-item>
    </el-form>

    </el-card>

  </div>
</template>

<script>
/* eslint-disable */
const axios = require('axios')

export default {
  name: 'Login',
 data() {
    return{
      form: {
        name: '',
        password: ''
      }
    }
  },
  methods: {
    onSubmit() {
      this.$router.push('/')
    }
  }
}
</script>
<style scoped>
.box-card {
  width: 480px;
}

.login {
  position: relative;
  top: 100px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  margin: auto;
}
</style>