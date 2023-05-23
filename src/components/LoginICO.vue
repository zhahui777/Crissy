<template>
  <div class="crissy-login">
    <div class="crissy-user-avatar-box">
      <div class="crissy-user-avatar">
        <a @click="toShow" class="mouse-style" v-if="!isLogin">
          <user class="user" theme="outline" size="18" fill="#777" />
        </a>
        <router-link to="/user" v-if="isLogin" target="_blank">
          <img :src="userInfo.userAvatar || 'favicon.ico'">
        </router-link>
      </div>
      <div class="crissy-user-login-menu" v-if="isLogin">
        <div class="crissy-user-login-menu-content">
          <ul>
            <li>
              <span>昵称：</span><span>{{ userInfo.userName }}</span>
            </li>
            <li>
              <svg t="1683886135002" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4275" width="20" height="20">
                <path d="M512 509.1m-444.4 0a444.4 444.4 0 1 0 888.8 0 444.4 444.4 0 1 0-888.8 0Z" fill="#FAB001"
                  p-id="4276"></path>
                <path
                  d="M887.7 459.1c0-132.5-58-251.3-150-332.7C671.6 87.2 594.4 64.7 512 64.7c-245.4 0-444.4 199-444.4 444.4 0 132.5 58 251.3 150 332.7 66.2 39.1 143.3 61.7 225.8 61.7 245.4 0 444.3-199 444.3-444.4z"
                  fill="#F9E48A" p-id="4277"></path>
                <path
                  d="M568 102.5c-245.4 0-444.4 199-444.4 444.4 0 122.5 49.7 233.4 130 313.8 57.6 27.3 121.8 42.8 189.8 42.8 245.4 0 444.4-199 444.4-444.4 0-122.5-49.7-233.4-130-313.8-57.6-27.3-121.9-42.8-189.8-42.8z"
                  fill="#FECE0A" p-id="4278"></path>
                <path
                  d="M704.4 616.4c0 28.6-4.9 44.6-25.2 54.3-15.4 7.3-35 9.4-60.2 10-11.8 0.3-22.1-7.7-25.4-19-0.4-1.5-0.9-3.1-1.4-4.6-5.3-16.7 7.3-33.6 24.8-33.6 8 0 14.3-0.1 17.1-0.3 7.8 0 9.7-1.9 9.7-8.2V514.3c0-14.3-11.6-25.9-25.9-25.9h-36.4c-14.3 0-25.9 11.6-25.9 25.9v195.5c0 14.3-11.6 25.9-25.9 25.9H521c-14.3 0-25.9-11.6-25.9-25.9V514.3c0-14.3-11.6-25.9-25.9-25.9h-33c-14.3 0-25.9 11.6-25.9 25.9v141.6c0 14.3-11.6 25.9-25.9 25.9h-7.3c-14.3 0-25.9-11.6-25.9-25.9V458c0-14.3 11.6-25.9 25.9-25.9h92.2c14.3 0 25.9-11.6 25.9-25.9v-10.9c0-14.8-12.4-26.6-27.2-25.9-38.8 1.7-77.5 2.7-114.6 3-12.1 0.1-22.9-8.3-25.4-20.1 0-0.2-0.1-0.4-0.1-0.6-3.4-16.1 8.3-31.4 24.8-31.8 118-2.7 245.9-10.6 338.3-22.8 11.6-1.5 22.7 4.9 27.2 15.7l1.1 2.6c6.6 15.8-3.4 33.6-20.4 35.8-36.9 4.9-77.2 8.7-119.3 11.9-13.5 1-23.9 12.3-23.9 25.9v17.3c0 14.3 11.6 25.9 25.9 25.9h97c14.3 0 25.9 11.6 25.9 25.9v158.3z"
                  fill="#FFFFFF" p-id="4279"></path>
              </svg>
              <span>999+</span>
              <message fill="#7b05ec" num="45"></message>
            </li>
            <li>
              <router-link to="/user/personal-data" target="_blank">我的资料</router-link>
            </li>
            <li class="mouse-style" @click="toLogout">退出登录</li>
          </ul>
        </div>
      </div>
    </div>
    <LoginDialog v-model:show="show"></LoginDialog>
  </div>
</template>

<script setup>
import LoginDialog from "./LoginDialog.vue";
import message from "./ICO/message.vue";
import { ref } from "vue";
import Store from "@/store";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";

const { userStore } = Store();

let show = ref(false);  //绑定弹窗是否展示

const { userInfo, isLogin } = storeToRefs(userStore);

useRouter().beforeEach((to, from, next) => {
  if (to.name === "user" && !isLogin) {
    //拦截
    return false;
  } else {
    next();
  }
})

async function toLogout() {
  let result = await userStore.logout();
  if (result.flag) {
    show.value = false;
  }
}

function toShow() {
  show.value = true;
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}

/* 鼠标样式 */
.mouse-style {
  cursor: pointer;
}

.mouse-style:hover {
  color: #be53d8;
}

/* 登录样式 */
.crissy-login {
  position: relative;
}

.crissy-user-avatar {
  position: absolute;
  right: 0;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: #be53d8;
  border-style: solid;
  background: #fff;
  transition: 0.5s;
  z-index: 1;
  overflow: hidden;
}

.crissy-user-avatar img {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.crissy-user-avatar-box:hover .crissy-user-avatar {
  width: 60px;
  height: 60px;
}

.crissy-user-login-menu {
  position: absolute;
  top: 2.5rem;
  right: -4.2rem;
  width: 200px;
  height: 250px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 4px 4px 25px rgba(51, 51, 51, 0.3);
  display: none;
  transition: 0.7s;
  overflow: hidden;
}

.crissy-user-avatar-box:hover .crissy-user-login-menu {
  display: block;
}

.crissy-user-login-menu-content {
  display: flex;
  justify-content: center;
  position: relative;
}

.crissy-user-login-menu-content ul {
  position: absolute;
  top: 2rem;
  list-style: none;
}
</style>