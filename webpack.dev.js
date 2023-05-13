const path = require("path");
const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
const outputFile = "[name]";

module.exports = merge(common(outputFile), {
  devServer: {
    watchFiles: ["./src/**/*"], // htmlファイルも更新対象
    static: {
      directory: path.resolve(__dirname, "./dist"),
    },
  },
  mode: "development",
  devtool: "source-map", //  ソースマップを出力させるオプション
});
