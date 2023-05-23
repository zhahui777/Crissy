import crissyService from "..";

export const getPictureWallTimeAPI = (params) => {
    return crissyService({
        method: "post",
        url: "/crissy_server/display/picture_wall_time",
        params,
    })
};
