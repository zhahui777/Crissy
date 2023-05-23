import userStore from "./modules/user"


// 统一导出Store方法
export default function Store() {
    return {
        userStore: userStore(),
    }
}
