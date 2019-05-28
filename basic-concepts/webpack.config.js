const path = require('path');
// we use Node's built-in path module and prefix it with the __dirname global.
// This prevents file path issues between operating systems and allows relative paths to work as expected.

module.exports = {

  mode: "none", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly

  entry: './src/index.js', // string | object | array
  // defaults to ./src
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results
    path: path.resolve(__dirname, 'dist'),
    // the target directory for all output files
    // must be an absolute path (use the Node.js path module)

    filename: 'main.js' // to give dynamic random name replace [name] with [contenthash] or [hash]
  }

};
