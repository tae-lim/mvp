module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        include: /public/src/index.jsx,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
};