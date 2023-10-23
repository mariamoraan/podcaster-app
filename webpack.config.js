const path = require('path');
var webpack = require('webpack');

// Plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');

const Modes = {
    DEVELOPMENT: 'development',
    PRODUCTION: 'production',
};

// Rules

const typescriptRule = {
    test: /\.(ts|tsx)?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
}

const jsRule = {
    test: /\.?js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            presets: [
                ['@babel/preset-env', {targets: {node: 'current'}}],
                '@babel/preset-typescript',
            ]
        }
    },
}

const cssRule = {
    test: /\.css$/i,
    use: ['style-loader', 'css-loader'],
}

const filesRule = {
    test: /\.(png|jp(e*)g|gif|webp|avif)$/,
    use: [
        'file-loader',
        {
            loader: 'image-webpack-loader',
            options: {
                bypassOnNotFound: true,
                outputPath: path.join(__dirname, 'dist', 'images.bundle.js'),
                minimize: true,
            }
        }
    ],
}

const svgRule = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
}

const htmlWebpackPlugin  = new HtmlWebpackPlugin({
    template: path.join(__dirname, 'src', 'index.html'),
    favicon: path.join(__dirname, 'src', 'assets/images/favicon.ico'),
})

module.exports = (env, {mode}) => {
    const isProduction = mode === Modes.PRODUCTION;
    return {
        mode,
        entry: path.join(__dirname, 'src', 'index.tsx'),
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist'),
            publicPath: '/',
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js', '.jsx'],
            alias: {
                "common": path.resolve(__dirname, 'src/common'),
                "routes": path.resolve(__dirname, 'src/routes'),
                "top_podcasts": path.resolve(__dirname, 'src/top_podcasts'),
                "podcast_detail": path.resolve(__dirname, 'src/podcast_detail'),
                "episode_detail": path.resolve(__dirname, 'src/episode_detail'),
            },
        },
        module: {
            rules: [
                typescriptRule,
                jsRule,
                cssRule,
                filesRule,
                svgRule
            ],
        },
        plugins: [
            htmlWebpackPlugin,
            new webpack.ProvidePlugin({
                "React":     "react"
            }),
        ],
        devServer: {
            host: 'localhost',
            port: 3001,
            open: true,
            historyApiFallback: true,
        },
    }
}