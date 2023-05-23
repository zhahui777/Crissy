<template>
    <div class="crissy-index-main">
        <div class="crissy-index-cards">
            <Card v-for=" i in 10" :key="i"></Card>
        </div>
        <div class="crissy-index-crissyInfo">
            首页数据展示还得要一段时间完成，壁纸部分可以使用了，没办法工作量有点大，而且现在忙着找实习（^_^）
        </div>
    </div>
</template>

<script setup>
import 'swiper/swiper.css';
import Card from '@/components/Card.vue';
import { onMounted, reactive } from 'vue';


</script>

<style scoped>
.crissy-index-main {
    width: 100%;
    height: 100%;
    display: flex;
    position: relative;
}

.crissy-index-cards {
    width: 62%;
    display: inline-grid;
    border-right: solid 1.5px;
    border-image: linear-gradient(#b88e23, #8e33b0, #42ec5c) 2 2 2 2;
    justify-content: center;
    grid-template-columns: repeat(auto-fill, 260px);
    grid-gap: 30px 15px;
}

.crissy-index-crissyInfo {
    display: inline-block;
    width: 35%;
    min-width: 200px;
    height: 100vh;
    box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.3);
    padding: 15px 15px;
}
</style>