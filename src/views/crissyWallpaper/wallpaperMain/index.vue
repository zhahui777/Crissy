<template>
  <div id="wp_header">
    <div class="header_menu">
      <nav id="navbar">
        <ul id="menu_1">
          <li v-for="item in menu_1" :key="item">
            <a :href="item.url">{{ item.liName }}</a>
          </li>
        </ul>
        <ul id="menu_2">
          <li v-for="item in menu_2_left" :key="item">
            <router-link :to="item.url" exact-active-class="active">{{
              item.liName
            }}</router-link>
          </li>
          <li>
            <div class="search">
              <input @keyup.enter="search" type="text" placeholder="search...." v-model="keyWord" />
              <span @click="search">
                <search class="mysearch" theme="outline" size="20" fill="var(--my-color)" />
              </span>
            </div>
          </li>
          <li v-for="item in menu_2_right" :key="item">
            <router-link :to="item.url" exact-active-class="active">{{
              item.liName
            }}</router-link>
          </li>
        </ul>
      </nav>
      <LoginICO class="crissy-login"></LoginICO>
    </div>
  </div>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.name" v-if="$route.meta.keepAlive" />
    </keep-alive>
    <component :is="Component" :key="$route.fullPath" v-if="!$route.meta.keepAlive" />
  </router-view>
</template>
  
<script>
import router from "@/router";
import LoginICO from "@/components/LoginICO.vue";
import { reactive, ref } from "vue";

export default {
  name: "WallpaperMain",
  components: {
    LoginICO,
  },

  setup() {
    const menu_1 = reactive([
      {
        liName: "首页",
        url: "/",
      },
      {
        liName: "产品",
        url: "/",
      },
      {
        liName: "商城",
        url: "/",
      },
      {
        liName: "合作",
        url: "/",
      },
      {
        liName: "关于我们",
        url: "/",
      },
    ]);
    const menu_2_left = reactive([
      {
        liName: "综合",
        url: "/wallpaper",
      },
      {
        liName: "人物",
        url: "/wallpaper/character",
      },
      {
        liName: "自然",
        url: "/wallpaper/nature",
      },
      {
        liName: "摄影",
        url: "/wallpaper/photograph",
      },
      {
        liName: "次元",
        url: "/wallpaper/cartoon",
      },
    ]);
    const menu_2_right = reactive([
      {
        liName: "概念",
        url: "/wallpaper/concept",
      },
      {
        liName: "炫酷",
        url: "/wallpaper/cool",
      },
      {
        liName: "AI画作",
        url: "/wallpaper/AI",
      },
      {
        liName: "运动",
        url: "/wallpaper/sport",
      },
    ]);

    let keyWord = ref("");

    function search() {
      keyWord.value = keyWord.value.trim();

      if (keyWord.value !== "") {
        router.replace({
          path: "/wallpaper/all",
          query: { search: keyWord.value },
        });
        keyWord.value = "";//清空搜索栏
      }
    }

    return {
      menu_1,
      menu_2_left,
      menu_2_right,
      keyWord,
      search,
    };
  },
};
</script>
  
<style scoped>
* {
  /* font-family: Arial, Helvetica, sans-serif; */
  font-family: "Courier New", Courier, monospace;
}

a {
  text-decoration: none;
  outline: none;
  color: #767688;
}

#wp_header {
  width: 100%;
  height: 100px;
  display: block;
  position: relative;
  z-index: 999;
}

.header_menu {
  width: 100%;
  height: 100px;
  position: fixed;
  background: #fff;
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
}

#navbar {
  width: 100%;
  height: 100%;
  min-width: 900px;
  position: relative;
}

.crissy-login {
  position: absolute;
  right: 7rem;
  top: 0.5rem;
}

#menu_1 {
  display: flex;
  justify-content: center;
  background: #434344;
}

#menu_1 li {
  margin: 10px 2%;
  display: inline-block;
  list-style: none;
  color: #f5f5f7;
}

#menu_2 {
  width: 100%;
  display: flex;
  position: absolute;
  justify-content: center;
  margin-top: 15px;
}

#menu_2 li {
  display: flex;
  margin: 0 2%;
  list-style: none;
  color: #f5f5f7;
}

#menu_2 li a {
  display: flex;
  align-items: center;
}

.active {
  border-bottom: 1.7px solid rgb(151, 15, 171);
}

.search {
  width: 13rem;
  height: 1.6rem;
  display: flex;
  line-height: 1.6;
  padding: 3px 10px 3px 20px;
  border-radius: 20px;
  border: 1px solid #8c8c8c;
  background-color: transparent;
}

.search input {
  outline: none;
  border: none;
  font-size: 14px;
  line-height: 20px;
  color: #767688;
}

.search span {
  height: 100%;
  overflow: hidden;
}

.search span:hover {
  cursor: pointer;
}

/* 给图标设自定义样式 */
.mysearch {
  --my-color: #767688;
}

.mysearch:hover {
  --my-color: #be53d8;
}
</style>