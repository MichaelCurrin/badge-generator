const crypto = require("crypto");
const fs = require("fs");
const vueJest = require("@vue/vue3-jest");
const { transformSync } = require("@babel/core");
const commonJsPlugin = require("@babel/plugin-transform-modules-commonjs");

module.exports = {
  getCacheKey(source, filename, configString, options) {
    const config =
      typeof configString === "string"
        ? configString
        : configString.configString;

    return crypto
      .createHash("md5")
      .update(source)
      .update(filename)
      .update(config)
      .update(fs.readFileSync(__filename))
      .update(fs.readFileSync("tsconfig.json"))
      .update(require("@vue/vue3-jest/package.json").version)
      .update(
        require("@babel/plugin-transform-modules-commonjs/package.json").version
      )
      .update(String(Boolean(options && options.instrument)))
      .digest("hex");
  },
  process(source, filename, config) {
    const result = vueJest.process(source, filename, config);
    const inputSourceMap =
      typeof result.map === "string" ? JSON.parse(result.map) : result.map;
    const transformed = transformSync(result.code, {
      babelrc: false,
      configFile: false,
      filename,
      inputSourceMap: inputSourceMap || undefined,
      plugins: [commonJsPlugin],
      sourceMaps: true,
    });
    const code = transformed.code.includes("exports.render = render;")
      ? `${transformed.code}\nexports.default = { ...exports.default, render };`
      : transformed.code;

    return {
      ...result,
      code,
      map: transformed.map || result.map,
    };
  },
};
