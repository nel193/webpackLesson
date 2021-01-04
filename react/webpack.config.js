const path = require ('path')
const MiniCSSExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        home: path.resolve(__dirname, 'src/js/index.js')
    },
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename:'js/[name].js',
    },
    module: {
        rules : [
            {
                test: /\.js$/,
                use:'babel-loader',
                exclude:/node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: MiniCSSExtractPlugin.loader
                    },
                    'css-loader'
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Abling react',
            template: path.resolve(__dirname, 'index.html')
        }),
        new MiniCSSExtractPlugin({
            filename:'css/[name].css'
        })
    ],
    devServer: {
        hot:true,
        open: true,
        port: 9000
    }
}
//Para cuando se està en etapa de desarrollo, es preferible utilizar
//el style-loader que el MiniCSSExtractPlugin, ya que permite ser más
//eficiente la carga de los estilos sin preprocesar los archivos