<template>
  <div class="pagination">
    <button @click="previousPage" :disabled="info.pageNo <= 1">上一页</button>
    <button @click="gotoPage(1)" :class="{ active: info.pageNo == 1 }">1</button>
    <button v-if="info.totalPages > 2" disabled>•••</button>
    <button
      v-show="info.totalPages > 2"
      @click="gotoPage(page)"
      v-for="page in startPage"
      :key="page"
      :class="{ active: info.pageNo == page }"
    >
      {{ page }}
    </button>
    <button v-if="info.totalPages > 2" disabled>•••</button>
    <button
      v-if="info.totalPages > 1"
      @click="gotoPage(info.totalPages)"
      :class="{ active: info.pageNo == info.totalPages }"
    >
      {{ info.totalPages }}
    </button>
    <button @click="nextPage" :disabled="info.pageNo >= info.totalPages">下一页</button>
    <button disabled>共 {{ info.total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "ThePagination",
  props: ["info"],
  computed: {
    startPage() {
      let start = 0,
        end = 0;

      if (this.info.totalPages <= 2) {
        start = 1;
        end = 1;
      } else if (this.info.totalPages <= 5) {
        start = 2;
        end = this.info.totalPages - 1;
      } else {
        if (this.info.pageNo <= 3) {
          start = 2;
          end = 5;
        } else if (this.info.pageNo >= this.info.totalPages - 2) {
          start = this.info.totalPages - 4;
          end = this.info.totalPages - 1;
        } else {
          start = this.info.pageNo - 2;
          end = this.info.pageNo + 2;
        }
      }
      let result = [];
      for (let i = start; i <= end; i++) {
        result.push(i);
      }
      return result;
    },
  },
  methods: {
    previousPage() {
      this.$emit("previousPage");
    },
    nextPage() {
      this.$emit("nextPage");
    },
    gotoPage(pageNo) {
      this.$emit("gotoPage", pageNo);
    },
  },
};
</script>

<style lang="less" scoped>
.pagination {
  text-align: center;
  button {
    margin: 0 5px;
    background-color: #f4f4f5;
    color: #606266;
    outline: none;
    border-radius: 2px;
    padding: 0 4px;
    vertical-align: top;
    display: inline-block;
    font-size: 13px;
    min-width: 35.5px;
    height: 28px;
    line-height: 28px;
    cursor: pointer;
    box-sizing: border-box;
    text-align: center;
    border: 0;

    &[disabled] {
      color: #c0c4cc;
      cursor: not-allowed;
    }

    &.active {
      cursor: not-allowed;
      background-color: #409eff;
      color: #fff;
    }
  }
}
</style>
