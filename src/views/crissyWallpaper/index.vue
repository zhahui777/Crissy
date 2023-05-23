<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component
        :is="Component"
        :key="$route.name"
        v-if="$route.meta.keepAlive"
      />
    </keep-alive>
    <component
      :is="Component"
      v-if="!$route.meta.keepAlive"
    />
  </router-view>
</template>

<script>
import WallpaperMain from "@/views/crissyWallpaper/wallpaperMain";
export default {
  name: "Wallpaper",
  components: {
    WallpaperMain,
  },
  setup() {},
};
</script>
