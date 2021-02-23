/**
 * @file: file
 * @author: zhaojianpeng
 */

const path =require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
module.exports = {
    // mode: 'production',
    mode: 'development',
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        environment: {
            // 告诉webpack不适用箭头函数
            // arrowFunction: false,
            // // 不适用const, IE10不支持const
            // const: false
        },
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    // 配置babel
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                [
                                    // 指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的浏览器
                                        targets: {
                                            "chrome": "80",
                                            "ie": "11"
                                        },
                                        // core-js版本
                                        "corejs": "3",
                                        // 使用core-js方法，usage,按需加载
                                        "useBuiltIns": "usage"
                                    }

                                ]
                            ]
                        }
                    },
                    'ts-loader',
                ],
                exclude: /node_modules/
            },
            // 配置less文件处理, loader加载顺序，从下到上
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    // 引入postcss
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    'less-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            // title: 'ts-code'
            template: './src/index.html'
        }),
    ],
    resolve: {
        extensions: ['.ts', '.js']
    }
}
