const vueJest = require("@vue/vue3-jest");
const { transformSync } = require("@babel/core");

module.exports = {
  process(source, filename, config) {
    const result = vueJest.process(source, filename, config);
    const transformed = transformSync(result.code, {
      babelrc: false,
      configFile: false,
      filename,
      inputSourceMap:
        typeof result.map === "string" ? JSON.parse(result.map) : result.map,
      plugins: ["@babel/plugin-transform-modules-commonjs"],
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
