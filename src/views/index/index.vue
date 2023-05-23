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
            <router-link :to="item.url">{{ item.liName }}</router-link>
          </li>
          <li>
            <div class="search">
              <input type="text" placeholder="search...." v-model="keyWord" />
              <span @click="search">
                <svg t="1683727199785" class="icon" viewBox="0 0 1024 1024" version="1.1"
                  xmlns="http://www.w3.org/2000/svg" p-id="2474" width="24" height="24">
                  <path
                    d="M912.072815 946.738335c-4.78498 0-9.56996-1.824555-13.220093-5.475711L650.662083 693.076078c-0.285502-0.285502-0.561795-0.579191-0.827855-0.883113l-6.979972-7.948019c-6.671956-7.594979-6.096858-19.11843 1.297552-26.012444 32.130791-29.958312 57.424874-65.413825 75.181283-105.379049 18.374486-41.35692 27.691689-85.472674 27.691689-131.122363 0-86.355787-33.628912-167.542854-94.691639-228.604558-61.062727-61.062727-142.249795-94.691639-228.604558-94.691639s-167.541831 33.628912-228.604558 94.691639c-61.062727 61.062727-94.691639 142.249795-94.691639 228.604558s33.628912 167.542854 94.691639 228.604558c61.062727 61.062727 142.249795 94.691639 228.604558 94.691639 26.15059 0 52.16508-3.130294 77.326133-9.301853 5.090948-1.353834 73.4038-19.189038 120.842229-14.809287 10.282181 0.948605 17.847483 10.05296 16.899902 20.335141s-10.047844 17.853623-20.335141 16.899902c-41.659819-3.845585-107.272165 13.571087-107.930151 13.747095-0.125867 0.033769-0.251733 0.065492-0.3776 0.097214-28.132734 6.91755-57.20998 10.425444-86.425372 10.425444-48.684816 0-95.922676-9.538237-140.402727-28.352745-42.953278-18.166755-81.523735-44.172035-114.644063-77.290317-33.119305-33.119305-59.123562-71.691809-77.29134-114.644063-18.813484-44.479027-28.352745-91.716888-28.352745-140.401704s9.53926-95.922676 28.352745-140.402727c18.167778-42.953278 44.172035-81.524758 77.29134-114.644063 33.119305-33.119305 71.690786-59.123562 114.644063-77.29134 44.480051-18.813484 91.717911-28.352745 140.402727-28.352745s95.922676 9.53926 140.401704 28.352745c42.953278 18.167778 81.524758 44.173059 114.644063 77.29134 33.118282 33.119305 59.123562 71.690786 77.29134 114.644063 18.813484 44.480051 28.351722 91.717911 28.351722 140.402727 0 50.912553-10.399861 100.136651-30.91101 146.305157-17.285688 38.906102-40.96704 73.973782-70.526263 104.47547l242.313791 242.310721c7.302313 7.30129 7.302313 19.138896 0.001023 26.440186C921.642774 944.912757 916.857794 946.738335 912.072815 946.738335z"
                    fill="#767688" p-id="2475"></path>
                  <path
                    d="M165.576059 421.887656c-0.696872 0-1.400906-0.038886-2.110057-0.118704-10.260691-1.152243-17.645892-10.404977-16.493649-20.666692 4.838192-43.080168 17.974373-83.934644 39.046295-121.429607 5.058203-9.002025 16.457834-12.19781 25.458835-7.139607 9.002025 5.058203 12.19781 16.45681 7.139607 25.458835-18.605753 33.108049-30.207999 69.202105-34.484396 107.282399C183.060269 414.827867 174.967964 421.887656 165.576059 421.887656z"
                    fill="#767688" p-id="2476"></path>
                </svg>
              </span>
            </div>
          </li>
          <li v-for="item in menu_2_right" :key="item">
            <router-link :to="item.url">{{ item.liName }}</router-link>
          </li>
        </ul>
      </nav>
      <LoginICO class="crissy-login"></LoginICO>
    </div>
  </div>
  <IndexBody class="crissy-body-margin"> </IndexBody>
  <IndexTail></IndexTail>
</template>
  
<script>
import { reactive, ref } from "vue";
import CrissyDisplay from "@/views/crissyDisplay";
import LoginICO from "@/components/LoginICO.vue";
import IndexTail from "./IndexTail.vue";
import IndexBody from './IndexBody.vue';

export default {
  name: "Index",
  components: {
    CrissyDisplay,
    LoginICO,
    IndexTail,
    IndexBody,
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
        liName: "壁纸",
        url: "/wallpaper",
      },
      {
        liName: "摄影作品",
        url: "/a",
      },
      {
        liName: "艺术画作",
        url: "/a",
      },
      {
        liName: "插画",
        url: "/a",
      },
    ]);
    const menu_2_right = reactive([
      {
        liName: "小说",
        url: "/a",
      },
      {
        liName: "游戏",
        url: "/a",
      },
      {
        liName: "CG",
        url: "/a",
      },
      {
        liName: "web设计",
        url: "/web-design",
      },
    ]);

    let cardInfos = reactive({
      list: [
        {
          title: "壁纸部分测试",
          crissyContent: "",
          author: "月下闲人罢了",
          goUrl: "/#/wallpaper",
        },
        {
          title: "Crissy-站主的简历",
          crissyContent: "",
          author: "月下闲人罢了",
          goUrl: "http://www.crissy.info/crissy/team/",
        },

        {
          title: "时间线类型的相册样式",
          crissyContent: "",
          author: "月下闲人罢了",
          goUrl: "/#/time",
        },

        {
          title: "MyBrothers",
          crissyContent: "",
          author: "月下闲人罢了",
          goUrl: "http://www.crissy.info/crissy/mybro/",
        },

        {
          title: "游戏记录",
          crissyContent: "",
          author: "月下闲人罢了",
          goUrl: "http://www.crissy.info/crissy/game/",
        },
      ],
    });

    let keyWord = ref(undefined);
    const search = function () {

    };


    return {
      menu_1,
      menu_2_left,
      menu_2_right,
      cardInfos,
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

.crissy-body-margin {
  margin-top: 3rem;
}

a {
  text-decoration: none;
  outline: none;
  color: #767688;
}

#wp_header {
  width: 100%;
  height: 100px;
  z-index: 999;
  position: relative;
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
  margin: 10px 30px;
  display: inline-block;
  list-style: none;
  color: #f5f5f7;
}

#menu_2 {
  display: flex;
  width: 100%;
  position: absolute;
  margin-top: 15px;
  justify-content: center;
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

.search svg:hover {
  cursor: pointer;
  width: 26px;
  height: 26px;
}

.search span:hover svg path {
  fill: #5b107e;
}
</style>