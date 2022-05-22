<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <TheRank />
    <TheLike />
    <TheFloor v-for="floor in floorList" :key="floor.id" :list="floor" />
    <TheBrand />
  </div>
</template>

<script>
// 引入其他的组件
import ListContainer from "@/views/Home/ListContainer";
import TodayRecommend from "@/views/Home/TodayRecommend";
import TheRank from "@/views/Home/TheRank";
import TheLike from "@/views/Home/TheLike";
import TheFloor from "@/views/Home/TheFloor";
import TheBrand from "@/views/Home/TheBrand";

import { mapState } from "vuex";

export default {
  name: "iHome",
  components: {
    ListContainer,
    TodayRecommend,
    TheRank,
    TheLike,
    TheFloor,
    TheBrand,
  },
  mounted() {
    this.$store.dispatch("FloorList");
    this.$store.dispatch("userInfo");
  },
  computed: {
    ...mapState({
      floorList: (state) => state.home.floorList,
      userInfo: (state) => state.user.userInfo,
    }),
  },
};
</script>

<style lang="less" scoped>
</style>
