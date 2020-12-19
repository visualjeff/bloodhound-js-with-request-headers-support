module.exports = {
  mode: 'development',
  entry: './index.js',
  output: {
    path: __dirname + '/dist',
    filename: 'bloodhound-js-with-request-headers-support.min.js',
    library: 'bloodhound'
  },
  devtool: 'source-map'
};
