
const CompressionPlugin = require("compression-webpack-plugin")
module.exports = {
    productionSourceMap: false,
    chainWebpack: (config)=>{
        if (process.env.NODE_ENV === 'production') {
          config.plugin('compressionPlugin')
            .use(new CompressionPlugin({
              test:/\.js$|\.html$|\.css/, // 匹配文件名
              threshold: 10240, // 对超过10k的数据压缩
              deleteOriginalAssets: false // 不删除源文件
            }))
        }
        config.plugins.delete("prefetch");
        config.plugins.delete("preload");
      }
}