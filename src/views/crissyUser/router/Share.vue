<template>
  <div class="main">
    <div class="share-body">
      <router-view v-slot="{ Component }">
        <keep-alive>
          <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" />
        </keep-alive>
        <component :is="Component" v-if="!$route.meta.keepAlive" />
      </router-view>
    </div>
    <div class="share-nav">
      <ul>
        <li><router-link to="/user/share/picture-treasure">摄影|绘画作品</router-link></li>
        <li><router-link to="/user/share/handicraft-treasure">手工艺展</router-link></li>
        <li><router-link to="/user/share/life-treasure">动态</router-link></li>
        <li><router-link to="/user/share/story-treasure">故事会|小说</router-link></li>
        <li><router-link to="/user/share/video-treasure">精彩视频</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.main {
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
}

.share-body {
  width: 85%;
  height: 100%;
}

.share-nav {
  width: 15%;
  height: 50px;
  margin-bottom: 4px;
  /* box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2); */
}

.share-nav ul {
  
  width: 100%;
  height: 200px;
}

.share-nav ul li {
  display: inline-flex;
  list-style: none;
  width: 100%;
  height: 25%;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.2);
}

.share-nav ul li a {
  display: inline-flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
</style>