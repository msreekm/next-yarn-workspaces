const withTM = require("next-transpile-modules");
const withTypescript = require("@zeit/next-typescript");

// Tell webpack to compile the "bar" package
// https://www.npmjs.com/package/next-transpile-modules
module.exports = withTypescript(
  withTM({
    transpileModules: ["bar"]
  })
);
