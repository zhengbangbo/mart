<template>
  <div>
    <TypeNav />
    <ListContainer />
    <TodayRecommend />
    <TheRank />
    <TheLike />
    <TheFloor />
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
};
</script>

<style lang="less" scoped>
</style>
