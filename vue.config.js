const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: "warning", // 表示只是警告 -> 降低校验的严格程度
});
