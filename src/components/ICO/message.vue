<template>
    <div id="crissy-ico-message">
        <svg t="1683886235860" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
            p-id="5362" width="20" height="20">
            <path
                d="M896 128H128a64 64 0 0 0-64 64v672a64 64 0 0 0 64 64h768a64 64 0 0 0 64-64V192a64 64 0 0 0-64-64z m0 64v117.664l-377.44 255.296L128 300.768V192h768zM128 864V378.048l372.64 252.032a31.968 31.968 0 0 0 35.84 0L896 386.912V864H128z"
                p-id="5363" :fill="num > 0 ? fill : '#767688'">
            </path>
        </svg>
        <span id="num" v-if="num > 0">
            <span>
                {{ num > 99 ? "99+" : num }}
            </span>
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    num: {
        type: Number,
        default: 0,
    },
    fill: {
        type: String,
        default: "#767688",
    }
});
</script>

<style scoped>
* {
    -moz-user-select: none;
    /*火狐*/
    -webkit-user-select: none;
    /*webkit浏览器*/
    -ms-user-select: none;
    /*IE10*/
    -khtml-user-select: none;
    /*早期浏览器*/
    user-select: none;
}

#crissy-ico-message {
    display: inline-flex;
    /* border-radius: 50%;
    width: 50px;
    height: 50px; */
    /* background: #222; */
    position: relative;
    cursor: pointer;
}

#crissy-ico-message #num {
    display: inline-flex;
    justify-content: center;
    justify-items: center;

    position: absolute;
    right: -7px;
    bottom: -5px;
    width: 15px;
    height: 15px;

    background: rgb(255, 0, 0);
    border-radius: 50%;
    color: #fff;
    font-size: 12px;
}

#num span {
    transform: scale(0.8);
    letter-spacing: 0;
}
</style>