import crissyService from "..";

export const getCardsByKeyWordAPI = (data) => {
    return crissyService({
        method: "post",
        url: "/index/cards",
        data,
    })
};