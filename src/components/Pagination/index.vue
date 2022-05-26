<template>
  <div class="pagination">
    <button @click="previousPage" :disabled="pageNo <= 1">上一页</button>
    <button @click="gotoPage(1)" :class="{ active: pageNo == 1 }">1</button>
    <button v-if="totalPages > 2" disabled>•••</button>
    <button
      v-show="totalPages > 2"
      @click="gotoPage(page)"
      v-for="page in startPage"
      :key="page"
      :class="{ active: pageNo == page }"
    >
      {{ page }}
    </button>
    <button v-if="totalPages > 2" disabled>•••</button>
    <button
      v-if="totalPages > 1"
      @click="gotoPage(totalPages)"
      :class="{ active: pageNo == totalPages }"
    >
      {{ totalPages }}
    </button>
    <button @click="nextPage" :disabled="pageNo >= totalPages">下一页</button>
    <button disabled>共 {{ total }} 条</button>
  </div>
</template>

<script>
export default {
  name: "ThePagination",
  props: ["info", "pageNo","pageSize", "totalPages", "total"],
  computed: {
    startPage() {
      let start = 0,
        end = 0;

      if (this.totalPages <= 2) {
        start = 1;
        end = 1;
      } else if (this.totalPages <= 5) {
        start = 2;
        end = this.totalPages - 1;
      } else {
        if (this.pageNo <= 3) {
          start = 2;
          end = 5;
        } else if (this.pageNo >= this.totalPages - 2) {
          start = this.totalPages - 4;
          end = this.totalPages - 1;
        } else {
          start = this.pageNo - 2;
          end = this.pageNo + 2;
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
