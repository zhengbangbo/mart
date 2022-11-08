module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",  // element-ui 按需引入
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
}
