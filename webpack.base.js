module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',//executes babel & transpiles our code
        exclude: /node_modules/,
        options: {
          plugins: [ //presets previously
            'react',// jsx to js func calls
            //'stage-0',// handles async code written later on
            "@babel/plugin-proposal-function-bind", // with plugins
            ['env', { targets: { browsers: ['last 2 versions'] } }] //
          ]
        }
      }
    ]
  }
};

