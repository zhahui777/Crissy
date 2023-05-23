<template>
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
        keyWord: "自然",
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
  #wp_neck{
    margin-bottom: 2rem;
  }
</style>