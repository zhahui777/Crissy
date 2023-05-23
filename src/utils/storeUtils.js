export function isLogin() {
    if (!localStorage.getItem("userInfo") || !localStorage.getItem("token")) {
        return false
    } else {
        return true;
    }
}

export function userInfo() {
    if (localStorage.getItem("userInfo") === null) {
        return {
            id: "",
            logName: "",
            userAvatar: "",
            userName: ""
        }
    } else {
        return JSON.parse(localStorage.getItem("userInfo"));
    }
}