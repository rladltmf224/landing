const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  // productionSourceMap: false,
  // configureWebpack: {
  //   mode: "production",
  //   devtool: "eval",115,007 5781 	109,226
  // },
  transpileDependencies: ["vuetify"],
  lintOnSave: false,
  devServer: {
    proxy: {
      "/api/": {
        target: "http://192.168.0.144:8080", // 민수님
        changeOrigin: true,
      },
    },
  },
 /*  outputDir:
    "C:/Users/TWIM/Desktop/Server/SmartFarm_BE/SmartFarm_BE/tsmartfarm/src/main/resources/static", */
  runtimeCompiler: true,
});
