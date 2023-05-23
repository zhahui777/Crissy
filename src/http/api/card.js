import crissyService from "..";

export const addCardAPI = (data) => {
    return crissyService({
        method: "post",
        url: "/card/add",
        data,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}