<template>
  <div>
    <div class="outer_label">
      <img
        class="inner_label login_logo"
        src="../assets/logo.png"
      >
    </div>
    <div class="login_form">
      <input
        type="text"
        class="qxs-ic_user qxs-icon"
        placeholder="用户名"
        v-model="userName"
      >
      <input
        type="text"
        class="qxs-ic_password qxs-icon"
        placeholder="密码"
        v-model="password"
      >
      <el-button
        class="login_btn"
        @click.native="login"
        type="primary"
        round
        :loading="isBtnLoading"
      ><span>{{btnText}}</span></el-button>
      <div style="margin-top: 10px">
        <span style="float: left;color: #A9A9AB">注册？</span>
        <span style="float: right;color: #A9A9AB">忘记密码？</span>
      </div>
    </div>
     
  </div>
</template>

<script>
//  import { userLogin } from '../../api/api';

export default {
  name: 'login',
  data() {
    return {
      userName: '',
      password: '',
      isBtnLoading: false
    }
  },
  created() {
   
  },
  computed: {
    btnText() {
      if (this.isBtnLoading) return '登录中...'
      return '登录'
    }
  },
  methods: {
    login() {
      if(this.isBtnLoading){
        return
      }
      if (!this.userName) {
        this.$message.error('请输入用户名')
        return
      }
      if (!this.password) {
        this.$message.error('请输入密码')
        return
      }
    this.isBtnLoading = true
    this.$http.post('/lk/user/login/store/login',this.$config.realmName,
    (data)=>{
      if(data.code == 10000){
        this.$message.success('登录成功')
        this.$storage.set(this.$config.userInfoName,data.data)
        this.$router.push({ path:'/'})
      }else{
        this.$message.error(data.msg)
      }
        this.isBtnLoading = false
    },
    {phone: this.userName, password: this.password})
    }
  }
}
</script>
<style scoped>
.login_form {
  padding-top: 10%;
  padding-left: 10%;
  padding-right: 10%;
}
.qxs-ic_user {
  background: url("../assets/login/ic_user.png") no-repeat;
  background-size: 13px 15px;
  background-position: 3%;
}
.qxs-ic_password {
  background: url("../assets/login/ic_password.png") no-repeat;
  background-size: 13px 15px;
  background-position: 3%;
  margin-bottom: 20px;
}
.login_logo {
  height: 100%;
}
.login_btn {
  width: 100%;
  font-size: 16px;
  background: -webkit-linear-gradient(
    left,
    #000099,
    #2154fa
  ); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(
    right,
    #000099,
    #2154fa
  ); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(
    right,
    #000099,
    #2154fa
  ); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #000099, #2154fa); /* 标准的语法 */
  filter: brightness(1.4);
}
</style>
