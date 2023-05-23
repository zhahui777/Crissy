/*
    解决图片懒加载的问题
*/

export default {
    mounted(el) {
        console.log(el)
        const myEl = el
        el = ""

        const observer = new IntersectionObserver(([{ isIntersecting }]) => {
            if (isIntersecting) {
                // 加载
                el=myEl
                // 停止观察
                observer.unobserve(el)
            }
        })
        observer.observe(el)
    }
}