const path = require('path');
module.exports = {
    output: {
        path: path.join(__dirname,'../dist'),
        publicPath: '/public/',
    },
    module: {
        rules: [
            {
                test: /.jsx$/,
                loader: 'babel-loader'
            },
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname,'../node_modules')
                ]
            }
        ]
    },
}