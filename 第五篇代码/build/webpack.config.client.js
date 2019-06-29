const path = require('path');
const HTMlPlugin = require('html-webpack-plugin');
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')
const webpackBase = require('./webpack.base')
// 判断是否是开发环境
const isDev = process.env.NODE_ENV === 'development'


const config = webpackMerge(webpackBase,{
    entry: {
        app: path.join(__dirname,'../client/app.js')
    },
    output: {
        filename: '[name].[hash].js',
    },
    plugins:[
        new HTMlPlugin({
            template:path.join(__dirname,'../client/template.html')
        })
    ]
})


if(isDev){
    config.entry ={
        app:[
            "react-hot-loader/patch",
            path.join(__dirname,'../client/app.js')
        ]
    }
    // 开发环境
    config.devServer = {
        host: '0.0.0.0',//可以使用ip访问
        port:'7777',
        contentBase: path.join(__dirname,'../dist'),//打包后的文件
        hot:true,//启动热加载
        overlay:{
            errors:true //直接在网页上显示错误
        },
        publicPath:'/public',
        historyApiFallback:{
            index:'/public/index.html'
        }
    }

    config.plugins.push(new webpack.HotModuleReplacementPlugin())
}
module.exports = config;