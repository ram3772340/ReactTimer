var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'script!jquery/dist/jquery.min.js',
    'script!foundation-sites/dist/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery',
  },
  plugins: [
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery',
    })
  ],
  output: {
    path: __dirname,
    filename: './public/bundle.js'
  },
  resolve: {
    alias: {
      comp: path.resolve(process.cwd(), 'app/components'),
      Main: path.resolve(process.cwd(), 'app/components/Main.jsx'),
      applicationStyles: path.resolve(process.cwd(), 'app/styles/app.scss'),
      Navigation: path.resolve(process.cwd(), 'app/components/Navigation.jsx'),
      Countdown: path.resolve(process.cwd(), 'app/components/Countdown.jsx'),
      Timer: path.resolve(process.cwd(), 'app/components/Timer.jsx'),
      Clock: path.resolve(process.cwd(), 'app/components/Clock.jsx'),
      CountdownForm: path.resolve(process.cwd(), 'app/components/CountdownForm.jsx'),
      Controls: path.resolve(process.cwd(), 'app/components/Controls.jsx'),
    },
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
      loader: 'babel-loader',
      test: /\.jsx?$/,
      query: {
        presets: ['react', 'es2015', 'stage-0']
      },
      exclude: /(node_modules|bower_components)/
    }
  ]
},
sassLoader: {
  includePaths: [
    path.resolve(__dirname, './node_modules/foundation-sites/scss')
  ]
},
devtool: 'cheap-module-eval-source-map'
};
