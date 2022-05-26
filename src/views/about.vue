<template>
  <div class="app-two-about-container">
    <h1>子应用关于界面</h1>
    <p>{{ param }}</p>
    <router-link to="/">返回</router-link>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'
const router = useRouter();
const route = useRoute();
let param = ref('主应用传递的参数:');

onMounted(() => {
  let msg: any = localStorage.getItem('msg');
  let desc: any = sessionStorage.getItem('desc');
  param.value  = param.value + msg + desc;
})
</script>

<style lang="scss">
.app-two-about-container {
  width: 480px;
  height: 300px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;
  padding-left: 20px;
}
</style>
