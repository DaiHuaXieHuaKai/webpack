/**
 * Created by ZhaoYing on 2017/5/15.
 */
module.exports = {
    entry: './entry.js',//入口文件
    output: {
        path: __dirname,
        filename: 'bundle.js'//webpack
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    resolve: {
        alias: {
            jquery: "./jquery.min.js"
        }
    }
};