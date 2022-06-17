module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
    // https://github.com/vuejs/vue-jest/issues/367#issuecomment-880300172
    '@babel/preset-env'
  ],
  "plugins": [
    [
      "component",
      {
        "libraryName": "element-ui",
        "styleLibraryName": "theme-chalk"
      }
    ]
  ]
}
