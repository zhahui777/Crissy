<template>
    <div class="crissy-card">
        <div class="card-img">
            <a href="">
                <img src="@/assets/img/234031QECRj.jpg">
            </a>
        </div>
        <div class="card-info">
            <span class="card-author">
                <img src="https://i2.hdslb.com/bfs/face/140351a6a6fac57a7c0c070b59fb65ca688b95f0.jpg@120w_120h_1c.webp">
            </span>
            <span class="card-title">
                这是标题，啊咧咧咧咧
            </span>
            <span class="card-describe">
                Crissy | 2023-07-15
            </span>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    card: {
        required: true,
    },
});
</script>

<style scoped>
* {
    font-family: "Courier New", Courier, monospace, Helvetica, sans-serif;
    font-weight: 500;
}

.crissy-card {
    display: inline-block;
    width: 240px;
    height: 185px;
    padding: 10px 10px;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
}

.card-img {
    width: 100%;
    height: 135px;
    overflow: hidden;
}

.card-img a{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card-img img {
    width: 100%;
    height: 100%;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);
}

.card-info {
    width: 100%;
    height: 30px;
    margin-top: 10px;
    position: relative;
}

.card-author {
    position: absolute;
    width: 40px;
    height: 40px;
    overflow: hidden;
    border-radius: 50%;
    cursor: pointer;
    transition: .6s;
}

.card-author:hover {
    width: 50px;
    height: 50px;
}

.card-author img {
    width: 100%;
    height: 100%;
}

.card-title {
    position: absolute;
    top: 5px;
    left: 50px;
    width: 120px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 14px;
}

.card-describe {
    position: absolute;
    width: 170px;
    left: 40px;
    top: 28px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: 12px;
    color: #767688;
    transform: scale(.9);
}
</style>