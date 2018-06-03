
const HtmlWebpackExternalsPlugin = require('html-webpack-externals-plugin');

module.exports = {
  lintOnSave: false,

  configureWebpack: {
	  plugins: [
      new HtmlWebpackExternalsPlugin({
        externals: [
          {
            module: 'youtube-search',
            entry: 'https://apis.google.com/js/client.js?onload=init',
            global: 'youtube',
          },
        ],
      }),
    ],
  },
};
