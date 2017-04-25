const path = require("path");
const webpack = require("webpack");
const ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = (PORT=3000) => ({
  entry: [
      './less/freelancer.less',
      './js/freelancer.js'
    ],

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
    publicPath: "/dist/"
  },

  // For options, see http://webpack.github.io/docs/configuration.html#devtool
  devtool: "eval",

  module: {
    loaders: [
      // Load styles
      { test: /\.less$/,
        loader: "style-loader!css-loader!autoprefixer-loader!less-loader" // for debug
        //loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!less-loader")
      },
      // Load images
      { test: /\.jpg/, loader: "url-loader?limit=10000&mimetype=image/jpg" },
      { test: /\.gif/, loader: "url-loader?limit=10000&mimetype=image/gif" },
      { test: /\.png/, loader: "url-loader?limit=10000&mimetype=image/png" },
      { test: /\.svg/, loader: "url-loader?limit=10000&mimetype=image/svg" },

      // Load fonts
      { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff2" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" },
    ]
  },

  plugins : [
    //new ExtractTextPlugin("style.css"),
    //new webpack.optimize.DedupePlugin(),
    //new webpack.optimize.UglifyJsPlugin({
    //  compressor: {screw_ie8: true, keep_fnames: true, warnings: false},
    //  mangle: {screw_ie8: true, keep_fnames: true}
    //}),
    //new webpack.optimize.OccurenceOrderPlugin(),
    //new webpack.optimize.AggressiveMergingPlugin(),
  ]

});