const path = require('path');
const config = require('./webpack.config.js');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleTracker = require('webpack-bundle-tracker');

const HOST = '0.0.0.0';
const PORT = 8080;

module.exports = Object.assign({}, config, {
  entry: {
    // activate HMR for React
    //[`webpack-dev-server/client?http://localhost:${PORT}`]: `webpack-dev-server/client?http://localhost:${PORT}`,
    // bundle the client for webpack-dev-server
    // and connect to the provided endpoint

    'webpack/hot/only-dev-server': 'webpack/hot/only-dev-server',
    // bundle the client for hot reloading
    // only- means to only hot reload for successful updates
    main: ['react-hot-loader/patch', './frontend/js/index.js'],
  },
  output: {
    filename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'frontend/bundles'),
    publicPath: `http://localhost:${PORT}/`,
    // ==== Necessary for HMR to know where to load the hot update chunks
  },
  devtool: 'cheap-eval-inline-source-map',
  //devtool: 'source-map',
  devServer: {
    clientLogLevel: 'info',
    // ==== Used in-tandem with `redux-devtools`
    //      When using inline mode, the console in your DevTools will show you messages:
    //      e.g. before reloading, before an error or when Hot Module Replacement is enabled.

    compress: true,
    // ==== Enables gzip compression for everything served for smaller file sizes.

    contentBase: path.resolve(__dirname, 'frontend/bundles'),
    // ==== Matches { output.path }
    //      Tell the server where to serve content from.

    historyApiFallback: true,
    // ==== HTML5 History API, `index.html` will `likely` be served in place of any 404 responses
    //      - It is possible to override this in `routes.js`
    hot: true,
    // ==== Enable webpack's Hot Module Replacement feature

    inline: true,
    // ==== Required for Hot Module Replacement

    headers: { 'Access-Control-Allow-Origin': '*' },

    host: HOST,
    port: PORT,
    // ==== Port number where the server can be accessed

    publicPath: '/',
    // ==== Note: match the { output.publicPath }

    stats: 'errors-only',
    index: 'index.html'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // ==== Enables Hot Module Replacement

    new webpack.NoEmitOnErrorsPlugin(),
    // ==== When there are errors while compiling this plugin skips the emitting phase
    //      (and recording phase), so there are no assets emitted that include errors.

    new webpack.NamedModulesPlugin(),

    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"development"',
    }),

    new BundleTracker({ filename: './webpack-stats.json' }),
    new HtmlWebpackPlugin({
      title: 'Private Packages Wizard',
      template: './frontend/templates/index.html',
      inject: false,
    }),

    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default'],
    }),

  ],
});
