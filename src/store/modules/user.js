import { loginAPI, logoutAPI, registerAPI, getUserInfoAPI } from "@/http/api/user";
import { defineStore } from "pinia";
import { isLogin, userInfo } from "@/utils/storeUtils";

const userStore = defineStore('user', {

    /**
     * 存储全局状态
     */
    state: () => {
        return {
            token: localStorage.getItem("token"),
            userInfo: userInfo(),
            isLogin: isLogin(),
        }
    },

    /**
     * 业务逻辑
     */
    actions: {
        setToken(token) {
            this.token = token;
            localStorage.setItem("token", token);
        },
        setIsLogin(isLogin) {
            this.isLogin = isLogin;
        },
        setUserInfo(userInfo) {
            this.userInfo = userInfo;
            localStorage.setItem("userInfo", JSON.stringify(userInfo));
        },
        getUserInfo() {
            getUserInfoAPI().then(res => {
                this.setIsLogin(true);
                this.setUserInfo(res.data);
            })
        },
        //登录
        async login(userData) {
            let result = {
                flag: false,
                message: "",
            };
            await loginAPI(userData).then(res => {
                if (res.code === 200) {
                    // 存储token
                    this.setToken(res.data);
                    this.getUserInfo();

                    //获取信息
                    result.flag = true;
                }
                result.message = res.message;
            }).catch(e => {
                result.message = "error:" + e;
            });
            return result;
        },
        //注册
        async register(userData) {
            let result = {
                flag: false,
                message: "",
            };
            await registerAPI(userData).then(res => {
                if (res.code === 200) {
                    // 存储token
                    this.setToken(res.data);
                    this.getUserInfo();

                    //获取信息
                    result.flag = true;
                }
                result.message = res.message;
            }).catch(e => {
                result.message = "error:" + e;
            });
            return result;
        },
        //退出登录
        async logout() {
            let result = {
                flag: false,
                message: "",
            };
            await logoutAPI().then(res => {
                if (res.code === 200) {
                    localStorage.clear();
                    this.setIsLogin(false);

                    //获取信息
                    result.flag = true;
                }
                result.message = res.message;
            }).catch(e => {
                result.message = "error:" + e;
            });
            return result;
        }
    },

    /**
     * 计算属性
     */
    getters: {

    }
})

export default userStore;