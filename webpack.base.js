module.exports = {
  // Tell webpack to run babel on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',//executes babel & transpiles our code
        exclude: /node_modules/,
        options: {
          presets: [
            'react',// jsx to js func calls
            'stage-0',// handles async code written later on
            ['env', { targets: { browsers: ['last 2 versions'] } }] //
          ]
        }
      }
    ]
  }
};

/*
replace presets with plugins 
  "plugins": [
    // Stage 0
    "@babel/plugin-proposal-function-bind",
  ]
*/