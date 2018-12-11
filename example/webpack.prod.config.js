let webpack = require('webpack'),
    path = require('path');

const ExtractTextPlugin = require("extract-text-webpack-plugin");
const extractSass = new ExtractTextPlugin('[name].bundle.css');

module.exports = {
    mode: "production",
    entry: {
        app: [
            './src/index.js'
        ],
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: '[name].bundle.js',
        publicPath: '/semantic-ui-grid/'
    },
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            'process.env.BASE_URL': JSON.stringify('semantic-ui-grid'),
        }),
        extractSass
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.resolve(__dirname, 'src'),
            'node_modules'
        ],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.(scss|sass)$/,
                use: extractSass.extract({
                    use: [ "css-loader", "sass-loader" ],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.css$/,
                use: extractSass.extract({
                    use: ["css-loader"],
                    // use style-loader in development
                    fallback: "style-loader"
                })
            },
            {
                test: /\.(png|woff|woff2|eot|ttf|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 10000,
                            name: "assets/[hash].[ext]"
                        }
                    }
                ]
            },
        ]
    }
};