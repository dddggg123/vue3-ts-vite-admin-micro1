<template>
  <div class="app-two-home-container">
    <h1>子应用首页界面</h1>
    <button @click="navigteHandler"> 子应用内部路由跳转 </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter();

function navigteHandler() {
  router.push('/about');
}
</script>

<style lang="scss">
.app-two-home-container {
  height: 100%;
}
</style>
