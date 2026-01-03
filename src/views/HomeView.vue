<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <template>
      <a-space warp>
        <a-button type="primary" danger>Primary</a-button>
        <a-button danger>Default</a-button>
        <a-button type="dashed" danger>Dashed</a-button>
        <a-button type="text" danger>Text</a-button>
        <a-button type="link" danger>Link</a-button>
      </a-space>
    </template>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src

export default defineComponent({
  name: "HomeView",
  components: {
    HelloWorld,
  },
});
</script>
