// vue-cli 配置
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  productionSourceMap: false,  // 生产构建源代码映射，用于调试
  // devServer: {
  //   proxy: {
  //     '/api': {
  //       target: 'http://gmall-h5-api.atguigu.cn'
  //     },
  //   },
  // },
})
