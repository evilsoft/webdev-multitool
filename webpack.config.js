var path = require('path')

var LessPluginAutoprefix = require('less-plugin-autoprefix')

var paths = {
  src:  path.join(__dirname, 'src/render'),
  dest: path.join(__dirname, 'build'),
  lib:  path.join(__dirname, 'src/lib')
}

module.exports = {
  context: paths.src,
  target: 'electron',
  entry:   './js',
  output: {
    filename:       'bundle.js',
    library:        'WebApp',
    libraryTarget:  'umd',
    path:           paths.dest,
    publicPath:     '/assets/'

  },
  resolve: {
    root: [ paths.lib ],
    extensions: [ '', '.js', '.less' ]
  },
  module: {
    loaders: [
      { test: /\.js$/, include: [ paths.src, paths.lib ], loader: 'babel?cacheDirectory&plugins[]=mjsx' },
      { test: /\.less$/, include: paths.src, loader: 'style!css!less' },
    ]
  },
  lessLoader: {
    lessPlugins: [
      new LessPluginAutoprefix({ browsers: [ 'last 2 versions' ] })
    ]
  }
}
