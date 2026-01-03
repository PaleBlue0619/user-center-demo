<template>
  <!--  父组件的id + 子组件的类名 class -> 就可以快速定位到这个组件-->
  <div id="basicLayout">
    <a-layout>
      <!-- 顶部导航标签 -->
      <a-layout-header>
        <GlobalHeader> </GlobalHeader>
      </a-layout-header>
      <!-- 主体内容标签 -->
      <a-layout-content :style="contentStyle" class="content">
        <router-view>Content</router-view>
      </a-layout-content>
      <!-- 底部导航标签 -->
      <a-layout-footer :style="footerStyle" class="footer">
        <a href="https://github.com/PaleBlue0619" target="_blank">
          作者信息: Maxim_ZJU
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import GlobalHeader from "@/components/GlobalHeader.vue";

// 定义样式变量
const contentStyle = {
  padding: "24px",
  margin: "24px 16px 0",
  minHeight: "calc(100vh - 160px)", // 减去header和footer的高度
  background: "#fff",
  overflow: "auto",
};

const footerStyle = {
  textAlign: "center",
  background: "#f5f5f5",
  color: "#666",
};
</script>

<style scoped>
#basicLayout .footer {
  /* 设置背景颜色 */
  background: #efefef;
  /* 居中 */
  text-align: center;
  /* 固定在底部 */
  position: fixed;
  /* */
  bottom: 0;
  width: 100%;
  right: 0;
  padding: 16px;
}

#basicLayout .content {
  padding: 20px;
  margin-bottom: 20px;
  background: linear-gradient(to right, #fefefe, #ffffff);
}
</style>
