<template>
  <swiper
    class="swiper"
    :modules="modules"
    :slides-per-view="1"
    :space-between="50"
    navigation
    :pagination="{ clickable: true }"
    :scrollbar="{ draggable: true }"
    :loop="true"
    :autoplay="{ delay: 3000 }"
  >
    <swiper-slide class="swiper-slide">
      <div class="card">
        <router-link to="/wallpaper/time">
          <img src="http://www.crissy.info/crissy_img/IMG_7174.jpg" />
        </router-link>
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card">
        <img src="@/assets/img/header.jpg" />
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="card">
        <img src="@/assets/img/header.jpg" />
      </div>
    </swiper-slide>

  </swiper>
</template>
  <script>
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
// import "swiper/css/scrollbar";

export default {
  name: "walpaper_swiper",
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Navigation, Pagination, Scrollbar, A11y, Autoplay],
    };
  },
};
</script>

<style scoped>
.swiper {
  width: 100%;
  height: 100%;
}
.card {
  width: 100%;
  height: 100%;
}
img {
  width: 100%;
  height: 100%;
}
</style>