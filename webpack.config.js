const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './src/index.js',
   output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle_ready.js'
   },
   module: {
      rules: [
         {
            test: /\.(js|jsx)?$/,
            exclude: /node_modules/,
            use: {
               loader: 'babel-loader'
            }
         },
         {
            test: /\.scss$/,
            use: [
               {
                  loader: 'style-loader'
               },
               {
                  loader: 'css-loader',
                  options: {
                     sourceMap: true,
                     modules: false,
                     localIdentName: "[local]___[hash:base64]"
                  }
               },
               {
                  loader: 'sass-loader'
               }
            ]
         }
      ]
   },
   resolve: {
      extensions: ['.js', '.jsx']
   },
   plugins: [
      new HTMLWebpackPlugin({ template: './src/index.html' })
   ],
   devServer: {
      clientLogLevel: 'none',
      port: 8181
   }
};