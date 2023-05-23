<template>
  <div id="wp_body">
    <div class="wp_display">
      <div class="grid">
        <div class="grid-item" v-for="picture in pictures" :key="picture">
          <img :src="picture.imgUrl" />
          <div class="picture_info">

            <div class="user_img">
              <img src="https://i2.hdslb.com/bfs/face/140351a6a6fac57a7c0c070b59fb65ca688b95f0.jpg@150w_150h.jpg" />
            </div>

            <span class="user_name"> 月下闲人罢了 </span>

            <router-link :to="`/wallpaper/show/${picture.id}`">
              <span class="go">
                <span>详情</span>
                <login theme="outline" size="24" fill="#ddd" />
              </span>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-if="pictures.length === 0 && isLoading" class="nothing">
    <img src="@/assets/img/loading.gif" />
  </div>
</template>

<script>
import Masonry from "masonry-layout";
import imagesloaded from "imagesloaded";
import { onUpdated } from "vue";
import { List } from "@icon-park/vue-next";

export default {
  name: "WallpaperGrid",
  props: {
    pictures: List,
    isLoading: {
      type: Boolean,
      default: true,
    },
  },
  setup() {
    const myMasonry = function () {
      var grid = document.querySelector(".grid");
      var msnry = new Masonry(grid, {
        itemSelector: ".grid-item",
        gutter: 7,
        fitWidth: true,
        horizontalOrder: true,
      });
      imagesloaded(".grid-item", () => {
        msnry.layout(); // 图片加载完成后重新绘制。
      });
    };

    onUpdated(() => {
      myMasonry();
    });
  },
};
</script>

<style scoped>
#wp_body {
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
}

.grid {
  width: 100%;
  margin: 0 auto;
}

@media (max-width: 720px) {
  .wp_display {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .grid-item {
    width: 45vw;
    margin-bottom: 1vw;
    background: #fff;
    position: relative;

    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.12);
  }
}

@media (min-width: 721px) {
  .wp_display {
    width: 90%;
    display: flex;
    justify-content: center;
  }

  .grid-item {
    width: 240px;
    margin-bottom: 10px;
    background: #fff;
    position: relative;

    border-radius: 6px;
    overflow: hidden;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.35);
  }
}

.grid-item img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.12);
}

.grid-item img[src=""],
img:not([src]) {
  display: block;
  width: 100%;
  height: 300px;
  object-fit: cover;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0px 5px 7px rgba(0, 0, 0, 0.12);

  background-color: var(--loading-grey);
  background: linear-gradient(100deg,
      rgba(255, 255, 255, 0) 40%,
      rgba(255, 255, 255, .5) 50%,
      rgba(255, 255, 255, 0) 60%) var(--loading-grey);
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1s loading ease-in-out infinite;
}

@keyframes loading {
  to {
    background-position-x: -20%;
  }
}

/* 鼠标悬停样式 */
.picture_info {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 100%;
  right: 0;
  background: #1f3d4738;
  backdrop-filter: blur(5px);
  transition: 1.5s;
}

.grid-item:hover .picture_info {
  top: 0;
}

.user_img {
  position: absolute;
  top: 5%;
  left: 5%;
  width: 20%;
  background-image: linear-gradient(rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0),
      rgba(255, 255, 255, 0.35));
}

.user_img img {
  width: 100%;
  height: 100%;
}

.user_name {
  position: absolute;
  top: 70px;
  left: 5%;
  color: #ddd;
}



.go {
  position: absolute;
  top: 5%;
  right: 5%;

  display: flex;
  justify-content: center;
  align-content: center;
}

.go span {
  color: #ddd;
}

.nothing {
  width: 100%;
  display: flex;
  justify-content: center;
}

.nothing img {
  width: 30%;
}
</style>