<template>
  <div class="timeline-container" id="timeline-1">
    <div class="timeline-header">
      <h2 class="timeline-header__title">Crissy Picture Wall</h2>
      <h3 class="timeline-header__subtitle">用心为您打造属于自己的回忆！</h3>
    </div>
    <div class="timeline">
      <div class="timeline-item" data-text="那些年我们一起见证了....">
        <div class="timeline__content">
          <img
            class="timeline__img"
            src="http://www.crissy.info/crissy/crissy_img/IMG_7174.jpg"
          />
          <h2 class="timeline__content-title">Crissy</h2>
          <p class="timeline__content-desc">
            年少时轻狂,<br />
            不惜光阴、不惜年华、醉笑天公亦如此！<br />
            如今二十出头，<br />
            两袖清风、笑月老无能<br />
            而回想当年，月下畅谈、球场下、讲台边...<br />
            很遗憾！Crissy 不能让您重回青春，<br />
            但是，我们用心为您留下每一片璀璨...
          </p>
        </div>
      </div>
      <div
        class="timeline-item"
        v-for="item in items.list"
        :key="item"
        :data-text="item.dataText"
      >
        <div class="timeline__content">
          <img class="timeline__img" :src="item.imgUrl" />
          <h2 class="timeline__content-title">{{ item.contentTitle }}</h2>
          <p class="timeline__content-desc">
            {{ item.contentDesc }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onUpdated, reactive } from "vue";
import { getPictureWallTimeAPI } from "@/http/api/display";

export default {
  name: "TimeCard",
  setup() {
    $.fn.timeline = function () {
      var selectors = {
        id: $(this),
        item: $(this).find(".timeline-item"),
        activeClass: "timeline-item--active",
        img: ".timeline__img",
      };

      selectors.item.eq(0).addClass(selectors.activeClass);
      selectors.id.css(
        "background-image",
        "url(" + selectors.item.first().find(selectors.img).attr("src") + ")"
      );

      var itemLength = selectors.item.length; //获取相册数目

      $(window).scroll(function () {
        var max, min;
        var pos = $(this).scrollTop();
        selectors.item.each(function (i) {
          min = $(this).offset().top;
          max = $(this).height() + $(this).offset().top;
          var that = $(this);
          if (i == itemLength - 2 && pos > min + $(this).height() / 2) {
            selectors.item.removeClass(selectors.activeClass);
            selectors.id.css(
              "background-image",
              "url(" +
                selectors.item.last().find(selectors.img).attr("src") +
                ")"
            );
            selectors.item.last().addClass(selectors.activeClass);
          } else if (pos <= max - 200 && pos >= min) {
            selectors.id.css(
              "background-image",
              "url(" + $(this).find(selectors.img).attr("src") + ")"
            );
            selectors.item.removeClass(selectors.activeClass);
            $(this).addClass(selectors.activeClass);
          }
        });
      });
    };

    let items = reactive({
      list: [],
    });

    let data = reactive({
      pageNum: 1,
      pageSize: 12,
    });

    getPictureWallTimeAPI(data).then((res) => {
      items.list = res.data;
    });

    onMounted(() => {
      $("#timeline-1").timeline();
    });

    onUpdated(() => {
      $("#timeline-1").timeline();
    });

    return {
      items,
    };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: "宋体";
}

.timeline {
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  flex-direction: column;
  max-width: 700px;
  position: relative;
}

.timeline__content-title {
  font-weight: normal;
  font-size: 50px;
  margin: -10px 0 0 0;
  transition: 0.4s;
  padding: 0 10px;
  box-sizing: border-box;
  color: #fff;
}

.timeline__content-desc {
  margin: 0;
  font-size: 15px;
  box-sizing: border-box;
  color: rgba(255, 255, 255, 0.7);
  font-weight: normal;
  line-height: 25px;
  white-space: pre-wrap;
}

.timeline:before {
  position: absolute;
  left: 50%;
  width: 2px;
  height: 100%;
  margin-left: -1px;
  content: "";
  background: rgba(255, 255, 255, 0.07);
}

@media only screen and (max-width: 767px) {
  .timeline:before {
    left: 40px;
  }
}

.timeline-item {
  padding: 40px 0;
  padding-bottom: 200px;
  opacity: 0.3;
  filter: blur(2px);
  transition: 0.5s;
  box-sizing: border-box;
  width: calc(50% - 40px);
  display: flex;
  position: relative;
  transform: translateY(-80px);
}

.timeline-item:before {
  content: attr(data-text);
  letter-spacing: 3px;
  width: 100%;
  position: absolute;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
  font-family: "Pathway Gothic One", sans-serif;
  border-left: 2px solid rgba(255, 255, 255, 0.5);
  top: 70%;
  margin-top: -5px;
  padding-left: 15px;
  opacity: 0;
  right: calc(-100% - 56px);
}

.timeline-item:nth-child(even) {
  align-self: flex-end;
}

.timeline-item:nth-child(even):before {
  right: auto;
  text-align: right;
  left: calc(-100% - 56px);
  padding-left: 0;
  border-left: none;
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  padding-right: 15px;
}

.timeline-item--active {
  opacity: 1;
  transform: translateY(0);
  filter: blur(0px);
}

.timeline-item--active:before {
  top: 50%;
  transition: 0.3s all 0.2s;
  opacity: 1;
}

.timeline-item--active .timeline__content-title {
  margin: -50px 0 20px 0;
}

@media only screen and (max-width: 767px) {
  .timeline-item {
    align-self: baseline !important;
    width: 100%;
    padding: 0 30px 150px 80px;
  }

  .timeline-item:before {
    left: 10px !important;
    padding: 0 !important;
    top: 50px;
    text-align: center !important;
    width: 60px;
    border: none !important;
  }

  .timeline-item:last-child {
    padding-bottom: 40px;
  }
}

.timeline__img {
  max-width: 100%;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.4);
}

.timeline-container {
  width: 100%;
  position: relative;
  padding: 80px 0;
  transition: 0.3s ease 0s;
  background-attachment: fixed;
  background-size: cover;
}

.timeline-container:before {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  content: "";
}

.timeline-header {
  width: 100%;
  text-align: center;
  margin-bottom: 80px;
  position: relative;
}

.timeline-header__title {
  background: linear-gradient(120deg, #74680d, #495337, #6b7048);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-size: 58px;
  font-weight: normal;
  margin: 0;
}

.timeline-header__subtitle {
  color: rgba(255, 255, 255, 0.5);
  font-size: 16px;
  letter-spacing: 5px;
  margin: 10px 0 0 0;
  font-weight: normal;
}

.demo-footer {
  padding: 60px 0;
  text-align: center;
}

.demo-footer a {
  color: #999;
  display: inline-block;
  font-family: Cardo;
}
</style>