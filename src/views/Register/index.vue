<template>
  <!-- 注册内容 -->
  <div class="register">
    <h3>
      注册新用户
      <span class="go"
        >我有账号，去 <a href="login.html" target="_blank">登陆</a>
      </span>
    </h3>
    <div class="content">
      <label>手机号:</label>
      <input type="text" v-model="phone" placeholder="请输入你的手机号" />
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="content">
      <label>验证码:</label>
      <input type="text" v-model="code" placeholder="请输入验证码" />
      <button style="width: 100px; height: 38px" @click="sendCode">
        获取验证码
      </button>
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="content">
      <label>登录密码:</label>
      <input
        type="password"
        v-model="password"
        placeholder="请输入你的登录密码"
      />
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="content">
      <label>确认密码:</label>
      <input type="password" v-model="password1" placeholder="请输入确认密码" />
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="controls">
      <input name="m1" checked="0" type="checkbox" />
      <span>同意协议并注册《尚品汇用户协议》</span>
      <span class="error-msg">错误提示信息</span>
    </div>
    <div class="btn">
      <button @click="userRegister">完成注册</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "iRegister",
  data() {
    return {
      phone: "",
      code: "",
      password: "",
      password1: "",
      agree: "",
    };
  },
  methods: {
    async sendCode() {
      try {
        const { phone } = this;
        phone && (await this.$store.dispatch("sendCode", phone));
        this.code = this.$store.state.user.sendCode;
      } catch (e) {
        alert(e);
      }
    },
    async userRegister() {
      try {
      const { phone, code, password, password1 } = this;
      phone &&
        code &&
        password &&
        password1 &&
        await this.$store.dispatch("userRegister", {
          phone,
          code,
          password,
          password1,
        });
        this.$router.replace('/login');
      } catch (e) {
        alert(e);
      }
    },
  },
};
</script>

<style lang="less" scoped>
.register {
  width: 1200px;
  height: 445px;
  border: 1px solid rgb(223, 223, 223);
  margin: 0 auto;

  h3 {
    background: #ececec;
    margin: 0;
    padding: 6px 15px;
    color: #333;
    border-bottom: 1px solid #dfdfdf;
    font-size: 20.04px;
    line-height: 30.06px;

    span {
      font-size: 14px;
      float: right;

      a {
        color: #e1251b;
      }
    }
  }

  div:nth-of-type(1) {
    margin-top: 40px;
  }

  .content {
    padding-left: 390px;
    margin-bottom: 18px;
    position: relative;

    label {
      font-size: 14px;
      width: 96px;
      text-align: right;
      display: inline-block;
    }

    input {
      width: 270px;
      height: 38px;
      padding-left: 8px;
      box-sizing: border-box;
      margin-left: 5px;
      outline: none;
      border: 1px solid #999;
    }

    img {
      vertical-align: sub;
    }

    .error-msg {
      position: absolute;
      top: 100%;
      left: 495px;
      color: red;
    }
  }

  .controls {
    text-align: center;
    position: relative;

    input {
      vertical-align: middle;
    }

    .error-msg {
      position: absolute;
      top: 100%;
      left: 495px;
      color: red;
    }
  }

  .btn {
    text-align: center;
    line-height: 36px;
    margin: 17px 0 0 55px;

    button {
      outline: none;
      width: 270px;
      height: 36px;
      background: #e1251b;
      color: #fff !important;
      display: inline-block;
      font-size: 16px;
    }
  }
}

.copyright {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  line-height: 24px;

  ul {
    li {
      display: inline-block;
      border-right: 1px solid #e4e4e4;
      padding: 0 20px;
      margin: 15px 0;
    }
  }
}
</style>
