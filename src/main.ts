import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css"; // 使用这个

// const app = createApp(App);
const app = createApp(App).use(router).use(Antd).mount("#app");
