'use strict'
const path = require('path')
const defaultSettings = require('./src/settings.js')

function resolve(dir) {
    return path.join(__dirname, dir)
}

const name = defaultSettings.title // 网址标题
const port = 8088 // 端口配置

// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
    // hash 模式下可使用
    // publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    devServer: {
        port: port,
        open: true,
        overlay: {
            warnings: false,
            errors: true
        },
        proxy: {
            '/api': {
                target: process.env.VUE_APP_BASE_API,
                changeOrigin: true,
                pathRewrite: {
                    '^/api': 'api'
                }
            },
            '/auth': {
                target: process.env.VUE_APP_BASE_API,
                changeOrigin: true,
                pathRewrite: {
                    '^/auth': 'auth'
                }
            }
        }
    },
    configureWebpack: {
        // provide the app's title in webpack's name field, so that
        // it can be accessed in index.html to inject the correct title.
        name: name,
        resolve: {
            alias: {
                '@': resolve('src'),
                '@crud': resolve('src/components/Crud')
            }
        }
    },
    transpileDependencies: [
        'vue-echarts',
        'resize-detector'
    ]
}
