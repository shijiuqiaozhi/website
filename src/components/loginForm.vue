<template>
<div class="cont">
  <div class="form sign-in">
    <h2>欢迎回来,</h2>
    <!-- <label>
      <span>账号</span>
      <input type="password" />
    </label>
    <label>
      <span>密码</span>
      <input type="password" />
    </label>
    <label>
      <span>验证码</span>
      <input type="password" />
    </label> -->
    <el-form :model="loginForm">
      <el-form-item>
        <span>用户名</span>
        <el-input v-model="loginForm.account" />
      </el-form-item>
      <el-form-item>
        <span 
          style="display: block; width: 100%"
        >
          密码
        </span>
        <el-input 
          v-model="loginForm.password"
          style="width: 218px;"
          show-password
        >
        </el-input>
      </el-form-item>
      <el-form-item prop="authCode">
        <span 
          style="
            padding-right: 10px;
          "
        >
          验证码:
        </span>
        <el-input 
          v-model="loginForm.authCode"
          style="width: 76px;"  
        />
        <div 
          class="get-code" 
          @click="refreshCode()"
        >
          <s-identify :identifyCode="identifyCode" />
        </div>
      </el-form-item>
    </el-form>
    <p class="forgot-pass">
      <span class="pass-content">忘记密码?</span>
    </p>
    <button type="button" class="submit" @click="login">登录</button>
    <div class="relevance-icons">
      <img 
        class="wechat" 
        src="@/assets/weixin.svg" 
      />
      <img 
        class="wechat" 
        src="@/assets/qq.svg" 
      />
      <img 
        class="wechat" 
        src="@/assets/weibo.svg" 
      />
    </div>
  </div>
  <div class="sub-cont">
    <div class="img">
      <div class="img__text m--up">
        <h2>尚未注册?</h2>
        <p>点击注册按钮加入我们吧!</p>
      </div>
      <div class="img__text m--in">
        <h2>已有账号?</h2>
        <p>点击登录输入信息登录系统吧!</p>
      </div>
      <div class="img__btn">
        <span class="m--up">注册</span>
        <span class="m--in">登录</span>
      </div>
    </div>
    <div class="form sign-up">
      <h2>欢迎加入</h2>
      <label>
        <span>用户名</span>
        <el-input v-model="registerForm.account" />
      </label>
      <label>
        <span>邮箱</span>
        <el-input v-model="registerForm.email" />
      </label>
      <label>
        <span>密码</span>
        <el-input v-model="registerForm.password" />
      </label>
      <button type="button" class="submit">注册</button>
    </div>
  </div>
</div>
</template>

<script>
import SIdentify from "@/components/sIdentify.vue";
export default {
  components: { SIdentify },
  data() {
    return {
      identifyCode: "",
      ifHideChange: false,
      identifyCodes: "0123456789abcdwerwshdjeJKDHRJHKOOPLMKQ",//绘制的随机数
      loginForm: {
        account: '',
        password: '',
        authCode: '',
      },
      registerForm: {
        account: '',
        email: '',
        password: '',
      },
    };
  },
  created() {
    this.refreshCode()
  },
  mounted() {
    document.querySelector('.img__btn').addEventListener('click', () => {
    document.querySelector('.cont').classList.toggle('s--signup');
  });
  },
  methods: {
    login() {
      console.log('this', this);
    },
    // 刷新验证码
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes,4);
    },
    randomNum (min, max) {
      max = max + 1
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 随机生成验证码字符串
    makeCode (data, len) {
      for (let i = 0; i < len; i++) {
      this.identifyCode += data[this.randomNum(0, data.length - 1)]
    }
  }
}
}
</script>

<style lang="scss" scoped>
*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  background: #ededed;
}

input, button {
  border: none;
  outline: none;
  background: none;
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
}

$contW: 900px;
$imgW: 260px;
$formW: $contW - $imgW;
$switchAT: 1.2s;

$inputW: 260px;
$btnH: 36px;

$diffRatio: ($contW - $imgW, $contW);

@mixin signUpActive {
  .cont.s--signup & {
    @content;
  }
}

.tip {
  font-size: 20px;
  margin: 40px auto 50px;
  text-align: center;
}

.cont {
  border-radius: 20px;
  overflow: hidden;
  position: relative;
  width: $contW;
  height: 550px;
  margin: 0 auto 100px;
  background: #fff;
}

.form {
  position: relative;
  width: $formW;
  height: 100%;
  transition: transform $switchAT ease-in-out;
  padding: 50px 30px 0;
}

.sub-cont {
  overflow: hidden;
  position: absolute;
  left: $formW;
  top: 0;
  width: $contW;
  height: 100%;
  padding-left: $imgW;
  background: #fff;
  transition: transform $switchAT ease-in-out;

  @include signUpActive {
    transform: translate3d($formW * -1,0,0);
  }
}

button {
  display: block;
  margin: 0 auto;
  width: $inputW;
  height: $btnH;
  border-radius: 30px;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
}

.img {
  overflow: hidden;
  z-index: 2;
  position: absolute;
  left: 0;
  top: 0;
  width: $imgW;
  height: 100%;
  padding-top: 360px;

  &:before {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    width: $contW;
    height: 100%;
    background-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/142996/sections-3.jpg');
    background-size: cover;
    transition: transform $switchAT ease-in-out;
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
  }

  @include signUpActive {
    &:before {
      transform: translate3d($formW,0,0);
    }
  }

  &__text {
    z-index: 2;
    position: absolute;
    left: 0;
    top: 50px;
    width: 100%;
    padding: 0 20px;
    text-align: center;
    color: #fff;
    transition: transform $switchAT ease-in-out;

    h2 {
      margin-bottom: 10px;
      font-weight: normal;
    }

    p {
      font-size: 14px;
      line-height: 1.5;
    }

    &.m--up {

      @include signUpActive {
        transform: translateX($imgW*2);
      }
    }

    &.m--in {
      transform: translateX($imgW * -2);

      @include signUpActive {
        transform: translateX(0);
      }
    }
  }

  &__btn {
    overflow: hidden;
    z-index: 2;
    position: relative;
    width: 100px;
    height: $btnH;
    margin: 0 auto;
    background: transparent;
    color: #fff;
    text-transform: uppercase;
    font-size: 15px;
    cursor: pointer;
    
    &:after {
      content: '';
      z-index: 2;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      border: 2px solid #fff;
      border-radius: 30px;
    }

    span {
      position: absolute;
      left: 0;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      transition: transform $switchAT;
      
      &.m--in {
        transform: translateY($btnH*-2);
        
        @include signUpActive {
          transform: translateY(0);
        }
      }
      
      &.m--up {
        @include signUpActive {
          transform: translateY($btnH*2);
        }
      }
    }
  }
}

h2 {
  width: 100%;
  font-size: 26px;
  text-align: center;
}

label {
  display: block;
  width: $inputW;
  margin: 25px auto 0;
  text-align: center;
}

span {
  font-size: 12px;
  color: #cfcfcf;
  text-transform: uppercase;
}

input {
  display: block;
  width: 100%;
  margin-top: 5px;
  padding-bottom: 5px;
  font-size: 16px;
  border-bottom: 1px solid rgba(0,0,0,0.4);
  text-align: center;
}

.forgot-pass {
  margin-top: 15px;
  text-align: center;
  font-size: 12px;
  color: #cfcfcf;
}

.pass-content:hover {
  color:  #a0cfff;
  cursor: pointer;
}

.submit {
  margin-top: 40px;
  margin-bottom: 20px;
  background: #409EFF;
  text-transform: uppercase;
}

.fb-btn {
  border: 2px solid #d3dae9;
  color: darken(#d3dae9, 20%);

  span {
    font-weight: bold;
    color: darken(#768cb6, 20%);
  }
}

.sign-in {
  transition-timing-function: ease-out;

  @include signUpActive {
    transition-timing-function: ease-in-out;
    transition-duration: $switchAT;
    transform: translate3d($formW,0,0);
  }
}

.sign-up {
  transform: translate3d($contW * -1,0,0);

  @include signUpActive {
    transform: translate3d(0,0,0);
  }
}
//新加的css
  :deep(.el-form-item__content) {
    justify-content: center;
  }

  .el-input {
    display: block;
    width: 100%;
    margin-top: 5px;
    padding-bottom: 5px;
    font-size: 16px;
    text-align: center;
  }

  .get-code {
    cursor: pointer;
  }

  .wechat {
    cursor: pointer;
  }
  .relevance-icons {
    display: flex;
    flex: 1;
    margin: 0 auto;
    justify-content: space-around;
    width: 260px;
  }
</style>