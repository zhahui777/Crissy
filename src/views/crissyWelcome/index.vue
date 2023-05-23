<template>
  <canvas id="crissy_bg"></canvas>
  <div id="crissy">
    <div class="crissy-header">
      <nav id="navbar">
        <ul id="menu">
          <a href="./index.html">
            <li>首页</li>
          </a>
          <a href="javascript:void(0);">
            <li>资源</li>
          </a>
          <a href="javascript:void(0);">
            <li>关于我们</li>
          </a>
          <a href="">
            <li>产品</li>
          </a>
          <a href="">
            <li>商城</li>
          </a>
          <a href="">
            <li>合作</li>
          </a>
          <a href="javascript:void(0);">
            <li>登录</li>
          </a>
        </ul>
      </nav>
      <div id="banner">
        <a href="">
          <span>CRISSY</span>
        </a>
      </div>
    </div>

    <div class="crissy-neck">
      <nav id="navbar-1">
        <ul id="menu-2">
          <li>网站导航</li>
          <li>web设计</li>
          <li>开源代码</li>
          <li>外网插画</li>
          <li>摄影作品</li>
          <li>游戏CG</li>
          <li>产品推荐</li>
        </ul>
        <ul id="menu-3">
          <li>
            <router-link to="/wallpaper">壁纸</router-link>
          </li>
          <li>电影</li>
          <li>音乐</li>
          <li>照片墙</li>
          <li>纪录片</li>
          <li>更多</li>
        </ul>
      </nav>
    </div>

    <div class="crissy-body"></div>

    <div class="crissy-tail">
      <fieldset>
        <legend>CRISSY</legend>
      </fieldset>
      <span>
        <p>
          
        </p>
        <h4>
          <a href="https://beian.miit.gov.cn/" target="_blank">
            粤ICP备2023014635号-1
          </a>
        </h4>
      </span>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
export default {
  name: "Welcome",
  setup() {
    onMounted(() => {
      var navbar = document.getElementById("navbar");
      var menu = document.getElementById("menu");

      window.onscroll = function () {
        if (window.pageYOffset > menu.offsetTop) {
          navbar.classList.add("sticky");
        } else {
          navbar.classList.remove("sticky");
        }
      };
    });
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 14px;
  font-weight: 100;
}

#crissy_bg {
  width: 100%;
  position: fixed;
  background: #000;
  z-index: -1;
}

a {
  text-decoration: none;
  outline: none;
  color: #fff;
}

.crissy {
  width: 100%;
  min-width: 600px;
  position: relative;
}

.crissy-header {
  width: 100%;
  min-width: 1000px;

  background: url(@/assets/img/header.jpg);
  background-position: center;
  background-size: cover;
  z-index: -1;
  margin-bottom: 15px;
}

.crissy-header nav {
  width: 100%;
  min-width: 1000px;

  background: rgba(0, 0, 0, 0.5);
  text-align: center;
}

.crissy-header nav ul {
  width: 100%;
  text-align: center;
}

.crissy-header nav ul li {
  margin: 10px 30px;
  display: inline-block;
  list-style: none;
  color: #f5f5f7;
}

.crissy-header #banner {
  width: 100%;
  height: 100px;
  text-align: center;
}

.crissy-header #banner span {
  margin-top: 40px;
  display: inline-block;
  background: linear-gradient(#45e7ff, #098995, #31d77e, #922ceb, #3597d3);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-family: "Courier New", Courier, monospace;
  font-size: 50px;
}

.crissy-neck nav {
  width: 100%;
  background: linear-gradient(#222, #84128c, #222);

  text-align: center;
  margin-bottom: 15px;
}

.crissy-neck nav ul {
  width: 100%;
}

.crissy-neck nav ul li {
  margin: 15px 30px;
  display: inline-block;
  list-style: none;
  color: #f5f5f7;
}

.crissy-header nav.sticky {
  position: fixed;
  top: 0;
  padding: 0 8%;
  background: #222222;
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  transition: padding 1s;
  z-index: 1;
}

.crissy-body {
  width: 85%;
  min-width: 1200px;
  height: 700px;
  margin: 0 auto;
  margin-bottom: 15px;
  background: #ddd;
}

.crissy-tail {
  width: 100%;
  background: #f5f5f7;
  padding-bottom: 50px;
  text-align: center;
}

.crissy-tail fieldset {
  border: 0;
  border-top: 1px solid #bbb;
}

.crissy-tail fieldset legend {
  text-align: center;
  padding: 5%;
  font-size: 30px;
  font-family: "Courier New", Courier, monospace;

  display: inline-block;
  background: linear-gradient(-120deg, #1d574a, #dbb458, #84ad1b);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.crissy-tail a{
  color: #000;
}
</style>