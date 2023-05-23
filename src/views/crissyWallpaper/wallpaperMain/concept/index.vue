<template>
  <!-- <div class="wp_neck">
        <div class="wp_neck_content">
          <h1>Crissy Wallpaper</h1>
          <p class="English">
            Here are the pictures we sniffer from all around the world!
          </p>
          <p class="chinese">这里是 crissy 从世界各地收集到的一些精美图片！</p>
        </div>
        <img src="@/assets/img/header.jpg" />
      </div> -->
  <div id="wp_neck"></div>

  <WallpaperGrid :pictures="pictures.list"></WallpaperGrid>
</template>
    
    <script>
import { onMounted, onUnmounted, reactive } from "vue";
import { getPicturesAPI } from "@/http/api/wallpaper";
import WallpaperGrid from "@/views/crissyWallpaper/grid";

export default {
  components: { WallpaperGrid },
  setup() {
    let pictures = reactive({
      list: [],
    });
    // 页面懒加载
    function scrollHandle() {
      const scrollHeight = document.body.scrollHeight;
      const scrollTop =
        document.body.scrollTop || document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      const distance = scrollHeight - scrollTop - clientHeight;

      if (distance <= 1000) {
        getPictures();
      }
    }

    let loading = false; //判断是否需要发送请求
    let pageNum = 1; //请求页码
    // 请求数据
    const getPictures = function () {
      if (loading) return;
      loading = true;
      let data = {
        keyWord: "概念",
        pageNum,
        pageSize: 20,
      };
      getPicturesAPI(data)
        .then((res) => {
          pictures.list = pictures.list.concat(res.data);
          pageNum++;
          loading = false;

          //  如果数据库没有数据了就不需要发送请求了
          loading = res.data.length < 20 ? true : false;
        })
        .catch((e) => {
          console.log("error:", e);
        });
    };
    onMounted(() => {
      getPictures();
      window.addEventListener("scroll", scrollHandle, false);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", scrollHandle, false);
    });

    return {
      pictures,
    };
  },
};
</script>
    
    <style scoped>
#wp_neck {
  margin-bottom: 2rem;
}
.wp_neck {
  width: 100%;
  height: 39vw;
  margin-bottom: 1rem;
  min-width: 900px;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-image: linear-gradient(
    90deg,
    rgba(139, 40, 150, 0.35),
    rgba(49, 121, 203, 0.35)
  );
  color: #fff;
  position: relative;
  overflow: hidden;
}

.wp_neck_content {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0),
    rgba(255, 255, 255, 0.35)
  );
  display: flex;
  font-family: "Courier New", Courier, monospace;
}

.wp_neck_content h1 {
  position: absolute;
  top: 30%;
  left: 6%;
  color: #fff;
  font-weight: 100;
  font-size: 60px;
}

.wp_neck_content .English {
  position: absolute;
  width: 15%;
  bottom: 40%;
  left: 10%;
}

.wp_neck_content .goto {
  position: absolute;
  width: 10%;
  height: 7%;
  top: 64%;
  left: 12%;
  background: transparent;
}

.wp_neck_content .chinese {
  position: absolute;
  bottom: 20%;
  left: 10%;
}
.wp_neck img {
  position: absolute;
  z-index: -1;
  width: 100%;
}

#wp_neck {
  width: 100%;
  display: flex;
  position: relative;
  justify-content: center;
}
</style>