var path = require('path')

var LessPluginAutoprefix = require('less-plugin-autoprefix')

var paths = {
  src: path.join(__dirname, 'src/render'),
  dest: path.join(__dirname, 'build')
}

module.exports = {
  context: paths.src,
  entry:   './js',
  output: {
    filename:       'bundle.js',
    library:        'WebApp',
    libraryTarget:  'umd',
    path:           paths.dest,
    publicPath:     '/assets/'

  },
  resolve: {
    extensions: [ '', '.js', '.less' ]
  },
  module: {
    loaders: [
      { test: /\.js$/, include: paths.src, loader: 'babel?cacheDirectory' },
      { test: /\.less$/, include: paths.src, loader: 'style!css!less' },
    ]
  },
  lessLoader: {
    lessPlugins: [
      new LessPluginAutoprefix({ browsers: [ 'last 2 versions' ] })
    ]
  },
  devServer: {
    noInfo: true
  }
}
