import crissyService from "..";

export const addPictureAPI = (data) => {
    return crissyService({
        method: "post",
        url: "/wallpaper/root/add",
        data,
    })
};

export const getPicturesAPI = (data) => {
    return crissyService({
        method: "post",
        url: "/wallpaper/init",
        data,
    })
};

export const getPictureAPI = (data) => {
    return crissyService({
        method: "post",
        url: "/wallpaper/show",
        data,
    })
};

export const getPictureByKeyWordAPI = (data) => {
    return crissyService({
        method: "post",
        url: "/wallpaper/display/search",
        data,
    })
};
