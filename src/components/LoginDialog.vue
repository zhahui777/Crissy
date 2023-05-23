<template>
  <div class="ld-body" v-if="show">
    <div class="ld-main">
      <div class="out mouse-style">
        <close-one @click="toHidden" theme="outline" size="26" fill="var(--my-color1)" />
      </div>

      <div class="container">
        <div class="div-description crissy-bg">
          <img src="@/assets/img/Computer.png" alt="" /><span>Crissy 欢迎每一位志同道合的朋友！</span>
        </div>
        <div class="div-form">
          <form action="" class="form-login" @keyup.enter="toLogin">
            <span class="title">login</span>
            <input v-model="login.loginName" type="text" placeholder="帐号" />
            <input v-model="login.passWord" type="password" placeholder="密码" />
            <button @click="toLogin" type="button">Login</button>
            <div class="control" ref="control">
              <span>没有帐号？<a>Register</a></span>
            </div>
          </form>
          <form action="" class="form-register disappear" @keyup.enter="toRegister">
            <span class="title">register</span>
            <input v-model="register.loginName" type="text" placeholder="帐号" />
            <input v-model="register.passWord" type="password" placeholder="密码" />
            <input v-model="register.passWord_1" type="password" placeholder="确认密码" />
            <button @click="toRegister" type="button">Register</button>
            <div class="control" ref="control">
              <span>已有帐号？<a>Login</a></span>
            </div>
          </form>
        </div>
        <div class="div-description crissy-bg">
          <img src="@/assets/img/cup_object.png" alt="" /><span>嗨，朋友！Crissy 欢迎你回来！</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Store from "@/store";
const { userStore } = Store();

import { nextTick, reactive, ref, watch } from "vue";

const emits = defineEmits(["update:show"]);
const props = defineProps({
  show: {
    type: Boolean,
    default: false,
    required: true,
  },
});

const login = reactive({
  loginName: "",
  passWord: "",
});

const register = reactive({
  loginName: "",
  passWord: "",
  passWord_1: "",
});

let errorMessage = ref("");

async function toLogin() {
  // 判断输入是否合法
  let loginNamePattern = /^[a-zA-Z0-9_-]{4,16}$/; //用户名正则，4到16位（字母，数字，下划线，减号）
  let passwordPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[(a-z)|(A-Z)]).*$/;//密码正则，最少6位，包括至少1字母，1个数字

  //标志合法状态
  let flag = true;
  if (!loginNamePattern.test(login.loginName)) {
    flag = false;
    errorMessage.value = ("用户名要求：4到16位（字母，数字，下划线，减号）");
  }
  if (!passwordPattern.test(login.passWord)) {
    flag = false;
    errorMessage.value = ("密码要求：最少6位（包括至少1字母，1个数字）");
  }

  //发送登录请求
  if (flag) {
    let result = await userStore.login(login);
    if (result.flag) {
      toHidden();
    }
  }
}

async function toRegister() {
  // 判断输入是否合法
  let loginNamePattern = /^[a-zA-Z0-9_-]{4,16}$/; //用户名正则，4到16位（字母，数字，下划线，减号）
  let passwordPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[(a-z)|(A-Z)]).*$/;//密码正则，最少6位，包括至少1字母，1个数字

  //标志合法状态
  let flag = true;
  //保存error 信息
  let errorMessage = {
    err_1: "",
    err_2: "",
    err_3: "",
    err_4: ""
  }

  if (!loginNamePattern.test(register.loginName)) {
    flag = false;
    errorMessage.err_1 = "用户名要求：4到16位（字母，数字，下划线，减号）";
  }
  if (!passwordPattern.test(register.passWord)) {
    flag = false;
    errorMessage.err_2 = "密码要求：最少6位（包括至少1字母，1个数字）";
  }
  if (!register.passWord === register.passWord_1) {
    flag = false;
    errorMessage.err_3 = "两次密码输入不匹配！";
  }

  //发送注册请求
  if (flag) {
    let result = await userStore.register(register);
    if (result.flag) {
      toHidden();
    }
  }
}

function toHidden() {
  emits("update:show", false);
}


watch(props, async () => {
  if (props.show) {
    //dom 元素更新时重新获取
    await nextTick();

    let btn = document.querySelectorAll(".control a");
    let formContainer = document.querySelector(".div-form");
    let form = document.querySelectorAll(".div-form form");
    // 切换注册
    btn[0].addEventListener("click", function (e) {
      form[0].classList.add("disappear");
      form[1].classList.remove("disappear");
      formContainer.style.transform = "rotateY(180deg)";
    });
    // 切换登录
    btn[1].addEventListener("click", function (e) {
      form[1].classList.add("disappear");
      form[0].classList.remove("disappear");
      formContainer.style.transform = "none";
    });
  }
});
</script>

<style scoped>
/* 背景 */
.ld-body {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  z-index: 999;
}

/* 主展示区 */
.ld-main {
  min-width: 700px;
  height: 400px;
  position: relative;
  top: 6rem;
}

/* 退出按钮 */
.out {
  position: absolute;
  right: -2rem;
  top: -2rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  --my-color1: #fff;
}

.out:hover {
  --my-color1: #b01cb0;
}

.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  /* 视域 */
  perspective: 1200px;
  transform-style: preserve-3d;
}

.div-description {
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: linear-gradient(#fff,#6bc75d);
  border-radius: 5px 0 0 5px;
  transform: translateZ(-1px);
  position: relative;
  overflow: hidden;
}

.div-description:nth-last-child(1) {
  border-radius: 0 5px 5px 0;
}

.div-description img {
  width: 180px;
  margin-bottom: 15px;
  position: absolute;
  top: 3rem;
}

.div-description span {
  font-size: 12px;
  color: #88128f;
  position: absolute;
  bottom: 5rem;
}

.div-form {
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0;
  transition: 1s;
  transform-origin: right;
}

.div-form .form-login {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to right, #a56bc3 0%, #c9873b 200%);
  border-radius: 5px 0 0 5px;
}

.div-form .form-register {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-image: linear-gradient(to right, #a56bc3 -100%, #b5a93e 100%);
  border-radius: 0 5px 5px 0;
  transform: rotateY(180deg);
}

.div-form form.disappear {
  display: none;
}

.div-form .title {
  margin: 50px 0 25px 0;
  /* 大写 */
  text-transform: uppercase;
  font-size: 2rem;
  color: #fff;
}

.div-form input {
  background-color: transparent;
  width: 70%;
  color: #fff;
  outline: none;
  border: none;
  border-bottom: 2px solid rgba(255, 255, 255, 0.7);
  padding: 5px 0;
  margin: 8px 0;
  text-indent: 5px;
  font-size: 14px;
  letter-spacing: 1px;
}

.div-form input::placeholder {
  color: #fff;
}

.div-form button[type="button"] {
  width: 70%;
  height: 32px;
  margin: 30px auto 10px;
  font-size: 14px;
  color: #fff;
  border: none;
  border-radius: 16px;
  background-color: rgba(255, 255, 255, 0.2);
  transition: 0.7s;
}

.div-form button[type="button"]:hover {
  letter-spacing: 3px;
  background-color: #fff;
  cursor: pointer;
  color: #b01cb0;
}

.div-form .control {
  color: #fff;
  margin: 5px;
  font-size: 13px;
}

.div-form .control a {
  color: #fff;
  margin: 0 5px;
  letter-spacing: 1px;
  text-decoration: underline;
}

.div-form .control a:hover {
  cursor: pointer;
  color: #b01cb0;
}
</style>