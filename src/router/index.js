import { createRouter, createWebHashHistory } from "vue-router";

import Wallpaper from "@/views/crissyWallpaper"

import WallpaperMain from "@/views/crissyWallpaper/wallpaperMain"
const router = createRouter({
    history: createWebHashHistory(),
    linkActiveClass: "active",
    routes: [
        {
            path: "/:error*",
            name: "404",
            component: () => import(/*webpackChunName:"404" */"@/views/404")
        },
        {
            path: "/",
            name: "index",
            component: () => import(/*webpackChunName:"index" */"@/views/index")
        },
        {
            path: "/wallpaper",
            component: Wallpaper,
            children: [
                {
                    path: "",
                    component: WallpaperMain,
                    meta: {
                        keepAlive: true
                    },
                    children: [
                        {
                            path: "",
                            component: () => import(/*webpackChunName:"zhonghe" */"@/views/crissyWallpaper/wallpaperMain/zhonghe"),
                            meta: {
                                keepAlive: true
                            }
                        },
                        {
                            path: "all",
                            component: () => import(/*webpackChunName:"search" */"@/views/crissyWallpaper/search"),
                            meta: {
                                keepAlive: false
                            }
                        },
                        {
                            path: "character",
                            component: () => import(/*webpackChunName:"character" */"@/views/crissyWallpaper/wallpaperMain/character"),
                            meta: {
                                keepAlive: true
                            }
                        }, {
                            path: "nature",
                            component: () => import(/*webpackChunName:"nature" */"@/views/crissyWallpaper/wallpaperMain/nature"),
                            meta: {
                                keepAlive: true
                            }
                        }, {
                            path: "photograph",
                            component: () => import(/*webpackChunName:"photograph" */"@/views/crissyWallpaper/wallpaperMain/photograph"),
                            meta: {
                                keepAlive: true
                            }
                        }, {
                            path: "cartoon",
                            component: () => import(/*webpackChunName:"cartoon" */"@/views/crissyWallpaper/wallpaperMain/cartoon"),
                            meta: {
                                keepAlive: true
                            }
                        },
                        {
                            path: "concept",
                            component: () => import(/*webpackChunName:"concept" */"@/views/crissyWallpaper/wallpaperMain/concept"),
                            meta: {
                                keepAlive: true
                            }
                        }, {
                            path: "cool",
                            component: () => import(/*webpackChunName:"cool" */"@/views/crissyWallpaper/wallpaperMain/cool"),
                            meta: {
                                keepAlive: true
                            }
                        }, {
                            path: "AI",
                            component: () => import(/*webpackChunName:"AI" */"@/views/crissyWallpaper/wallpaperMain/AI"),
                            meta: {
                                keepAlive: true
                            }
                        }, {
                            path: "sport",
                            component: () => import(/*webpackChunName:"sport" */"@/views/crissyWallpaper/wallpaperMain/sport"),
                            meta: {
                                keepAlive: true
                            }
                        },
                        {
                            path: "show/:id",
                            component: () => import(/*webpackChunName:"wallpaperShow" */"@/views/crissyWallpaper/show"),
                            meta: {
                                keepAlive: false
                            }
                        },
                    ]
                },
            ]
        },
        {
            path: "/web-design",
            component: () => import("@/views/webDesign")
        },
        {
            name: "user",
            path: "/user",
            component: () => import(/*webpackChunName:"crissyUser" */"@/views/crissyUser"),
            children: [
                {
                    path: "",
                    component: () => import("@/views/crissyUser/router/UserIndex.vue"),
                    meta: {
                        keepAlive: false
                    },
                },
                {
                    path: "share",
                    component: () => import("@/views/crissyUser/router/Share.vue"),
                    meta: {
                        keepAlive: false
                    },
                    children: [
                        {
                            path: "",
                            component: () => import("@/views/crissyUser/router/upload/picture.vue"),
                            meta: {
                                keepAlive: true
                            }
                        },
                        {
                            path: "picture-treasure",
                            component: () => import("@/views/crissyUser/router/upload/picture.vue"),
                            meta: {
                                keepAlive: true
                            }
                        },
                        {
                            path: "handicraft-treasure",
                            component: () => import("@/views/crissyUser/router/upload/handicraft.vue"),
                            meta: {
                                keepAlive: true
                            }
                        },
                        {
                            path: "life-treasure",
                            component: () => import("@/views/crissyUser/router/upload/life.vue"),
                            meta: {
                                keepAlive: true
                            }
                        },
                        {
                            path: "story-treasure",
                            component: () => import("@/views/crissyUser/router/upload/story.vue"),
                            meta: {
                                keepAlive: true
                            }
                        },
                        {
                            path: "video-treasure",
                            component: () => import("@/views/crissyUser/router/upload/video.vue"),
                            meta: {
                                keepAlive: true
                            }
                        }
                    ]
                },
                {
                    path: "works-manager",
                    component: () => import("@/views/crissyUser/router/WorksManager.vue"),
                    meta: {
                        keepAlive: false
                    }
                },
                {
                    path: "personal-data",
                    component: () => import("@/views/crissyUser/router/PersonalData.vue"),
                    meta: {
                        keepAlive: false
                    }
                },
                {
                    path: "test",
                    component: () => import("@/views/crissyUser/router/Share.vue"),
                    meta: {
                        keepAlive: false
                    }

                }
            ]
        },
    ]
});

export default router;