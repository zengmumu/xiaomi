let path = require("path")  // node 自带的插件，访问指定路径
let HtmlWabpackPlugin= require("html-webpack-plugin") ;
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//引入插件mini-css-extract-plugin
module.exports={
    devServer:{  // 配置运行服务，如果不配置则默认为 8080 端口
        port:8020, // 定义自定义的端口
        progress:true,  // 打开进度条显示
        contentBase:"./dist" // 运行此文件夹静态资源的所有文件
    },
    mode:"development",  //production development
    entry:"./src/index.js",
    output:{
       filename:"index.js",
        path:path.resolve(__dirname,"dist")
    },
    plugins:[  // 插件可以包括多个插件，所以这里是一个数组
        new HtmlWabpackPlugin({  // 实例化插件
           template:'./public/index.html',  // 实际上就是把 index.html 作为一个模板，这里配置要添加到打包文件中的模版
           filename:"index.html",  // 把整个模板添加过去，打包后名称
           minify:{  // 配置压缩 html
               removeAttributeQuotes:true,  // 去除双引号
               collapseWhitespace:true // 变成一行，折叠空行
           },
            hash:true //如果需要添加哈希，就会在打包后添加哈希戳
        }),
        new MiniCssExtractPlugin({//实例MiniCssExtractPlugin
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: "[name].css",
            chunkFilename: "[id].css"
          })

    ],
    module:{
        rules:[
            {
                test:/\.less$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader','less-loader']
            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader'],
                 
            },
            { test: /\.(js|jsx)$/, use:['babel-loader'], exclude: /node_modules/ },
            { test: /\.(png|jpg|gif|svg)$/,
                use:[ 
                    {
                        loader:'url-loader',
                        options: {
                            limit: 1024,
                            name: 'images/[hash].[ext]',//所有图片在一个目录
                        }
                    }
                ],
            },
            
           
        ]
    }
}
//npm i -g webpack webpack-cli webpack-dev-server