<template>
    <div class="crissy-tail">
        <fieldset>
            <legend>CRISSY</legend>
        </fieldset>
        <span>
            <p></p>
            <h4>
                <a href="https://beian.miit.gov.cn/" target="_blank">
                    粤ICP备2023014635号-1
                </a>
            </h4>
        </span>
    </div>
</template>

<script setup>

</script>

<style scoped>
* {
    padding: 0;
    margin: 0;
}

.crissy-tail {
    padding-bottom: 50px;
    text-align: center;
    margin-top: 3rem;
    box-shadow: 0 -3px 3px rgba(0, 0, 0, 0.3);
}

.crissy-tail fieldset {
    border: 0;
    border-top: 1px solid #bbb;
}

.crissy-tail fieldset legend {
    text-align: center;
    padding: 5%;
    font-size: 30px;
    font-family: "Courier New", Courier, monospace;

    display: inline-block;
    background: linear-gradient(-120deg, #1d574a, #dbb458, #84ad1b);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.crissy-tail p {
    white-space: pre-wrap;
}

.crissy-tail a {
    color: #aaa;
}
</style>