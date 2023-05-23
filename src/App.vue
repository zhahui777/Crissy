<template>
  <div id="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
import CrissyDisplay from "./views/crissyDisplay/index.vue";
import Welcome from "@/views/crissyWelcome/index.vue";

export default {
  name: "App",
  components: {
    CrissyDisplay,
    Welcome,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

/* 设置不可复制 */
img,
video {
  -moz-user-select: none;
  /*火狐*/
  -webkit-user-select: none;
  /*webkit浏览器*/
  -ms-user-select: none;
  /*IE10*/
  -khtml-user-select: none;
  /*早期浏览器*/
  user-select: none;
}
</style>