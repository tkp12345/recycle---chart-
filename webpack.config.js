const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const prod = process.env.NODE_ENV === 'development';

module.exports = {
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        inline: true,
        port: 3002,
        hot: true,
        publicPath: '/',
        openPage:'index.html'
    },
    mode: prod ? 'production' : 'development',
    devtool: prod ? 'hidden-source-map' : 'eval',

    entry: './src/index.tsx',

    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    module: {

        rules: [
            {
                test: /\.(ts|tsx)$/,
                use: [
                    'babel-loader',
                    {
                        loader: 'ts-loader',
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env", "@babel/preset-react"]
                        }
                    }
                    ]
            },
        ],
    },

    output: {
        path: path.join(__dirname, '/dist'),
        filename: './index.js',
    },

    plugins: [
        new webpack.ProvidePlugin({
            React: 'react',
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
};
/**************************************************************
 historyApiFallback : 히스토리 API를 사용하는 SPA 개발 시 설정하며 404에러가 발생하면 index.html로 리다이렉트 한다.
 inline : inline모드를 활성화 해준다.
 port : 접속 포트를 설정한다.
 hot : webpack의 HMR기능을 활성화 한다. (리로드 기능)
 publicPath : 브라우저를 통해 접근하는 기본 주소값을 설정한다.

 mode: 프로덕션 모드인지 개발 모드인지 확인하는 옵션이다.
  devtool: 프로덕션 모드인 경우엔 hidden-source-map을 권장한다. (외부에서 리액트 구조를 확인할 수 없다.)
  resolve: 확장자나 경로를 알아서 처리할 수 있도록 설정하는 옵션이다.
  module: 이 옵션에 설치한 ts-loader와 babel-loader를 설정하면 된다. loader들은 오른쪽에서 왼쪽 방향으로 적용되기 때문에 ts-loader를 babel-loader보다 오른쪽에 위치시켜야 한다.
  output: 번들화 된 파일을 export할 경로와 파일명을 설정한다.
  plugins: 설치한 플러그인을 적용하는 옵션이다.
 **************************************************************/
