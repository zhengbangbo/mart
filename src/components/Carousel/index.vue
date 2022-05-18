<template>
  <div class="swiper" ref="mySwiper">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="carousel in list"
        :key="carousel.id"
      >
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper/bundle";
export default {
  name: "TheCarousel",
  props: ["list"],
  watch: {
    list: {
      immediate: true,
      handler() {
        this.$nextTick(() => {
          new Swiper(this.$refs.mySwiper, {
            direction: "horizontal", // 垂直切换选项
            loop: true, // 循环模式选项
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },

            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
