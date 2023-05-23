import crissyService from "..";

export const loginAPI = (data) => {
    return crissyService({
        method: "post",
        url: "/user/login",
        data,
    })
};

export const logoutAPI = (data) => {
    return crissyService({
        method: "post",
        url: "/user/logout",
        data,
    })
};

export const registerAPI = (data) => {
    return crissyService({
        method: "post",
        url: "/user/register",
        data,
    })
};

//不需要带参数。因为已经设置带请求头携带token
export const getUserInfoAPI = () => {
    return crissyService({
        method: "post",
        url: "/user/getUserInfo",
    })
};

export const init = () => {
    return crissyService({
        method: "post",
        url: "/user/init",
    })
};
