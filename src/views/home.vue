<template>
  <div class="app-two-home-container">
    <h1>子应用首页界面</h1>
    <button class="btn" @click="microNavigteHandler"> 子应用内部路由跳转 </button>
    <button class="btn" @click="mainNavigteHandler"> 控制主应用跳转 </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter();

function microNavigteHandler() {
  router.push('/about');
}

function mainNavigteHandler() {
  // window.history.pushState({
  //   user: {}
  // }, '', '/home')
}
</script>

<style lang="scss">
.app-two-home-container {
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 20px;

  .btn {
    width: 180px;
    line-height: 40px;
    height: 40px;
    margin-top: 20px;
    border: none;
    border-radius: 10px;
    background-color: cornflowerblue;
    color: #fff;
  }
}
</style>
