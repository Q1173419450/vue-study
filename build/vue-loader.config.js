// const docsLoader = require.resolve('./doc-loader')

module.exports = (isDev) => {
  return {
    preserveWhitepace: true,
    extractCSS: !isDev,
    cssModules: {
      // 只在modules
      localIdentNmae: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',
      // 更改命名
      camelCase: true
    },
    // postcss
    // 组件热重载失效
    // hotReload: false

    // 构建组件库，写说明用的
    // loader: { 'docs': docsLoader },
    
    // 指定的loader加载之后，再加载
    // preLoader: { },
    // postLoader: {  }
  }
}