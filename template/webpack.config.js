module.exports = {
  entry: './example/src/script.jsx',
  output: {
    filename: './example/dist/bundle.js'
  },
  module: {
    loaders: [
      { test: /\.jsx$/, loader: 'jsx-loader' },
      { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }
    ]
  }
};
