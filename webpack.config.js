var html = require("html-webpack-plugin");
var webpack = require("webpack");
var path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin")
module.exports ={
    entry:{
        app:"./src/main.js"
    },
    mode:"development",
    //就是生成 sourcemap 的不同方式，eval 不支持 IE8，推荐用 source-map 吧
    devtool:"eval-source-map",
    //用其他模块或路径替换模块  通用
    resolve:{
      alias:{
          'vue$':'vue/dist/vue.common.js'
      },
      extensions:['.vue','.js']
    },
    output:{
      path:path.resolve(__dirname,"./dist"),
      filename:"./static/js/[name].[hash].js"
    },
    module:{
        rules:[
            {
            test:/\.js$/,
            loader:"babel-loader",
            include:/src/
           },{
              //匹配vue 
              test:/\.vue$/,
              loader:"vue-loader", 
              include:/src/  
           },{
               test:/\.css$/,
               use:[
                "vue-style-loader",   
                "style-loader",
                "css-loader",
               
              ],
              include:/src/
           },{
               test:/\.scss$/,
               use:["style-loader","css-loader","sass-loader"],
               include:/src/
           },{
               test:/\.(png|jpg|gif|jpeg)$/,
               use:[
                  {
                      loader:"url-loader",
                      //参数
                      options:{
                          //多少1000字节
                          limit:1000,
                          //超过这个放在文件夹下
                          name:'./static/image/[name].[hash].[ext]'
                      }
                  }  
               ],
               include:/src/
           }
        ]
    },
    devServer:{
        port:9898,
        hot:true,
        open:true,
      
    },
    plugins:[
        new html({
            template:"index.html"
        }),
        new webpack.HotModuleReplacementPlugin(),
        new VueLoaderPlugin()
    ]
}