<template>
  <div class="pagination">
    <button>上一页</button>
    <button>1</button>

    <button>•••</button>
    <button>page</button>

    <button>•••</button>
    <button>totalPage</button>

    <button>下一页</button>
    <button>共 total 条</button>
  </div>
</template>

<script>
export default {
  name: "ThePagination",
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
