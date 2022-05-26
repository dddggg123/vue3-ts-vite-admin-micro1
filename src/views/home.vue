<template>
  <div class="app-one-home-container">
    <h1>子应用首页界面</h1>
    <button class="btn" @click="microNavigteHandler"> 子应用内部路由跳转 </button>
    <button class="btn" @click="mainNavigteHandler"> 控制主应用跳转 </button>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'

const router = useRouter();

function microNavigteHandler() {
  router.push('/about');
}

function mainNavigteHandler() {
  window.history.pushState({
    user: {}
  }, '', '/')
  // window.history.replaceState({
  //   user: {}
  // }, '', '/')
}

onMounted(() => {
  localStorage.setItem('msg', '');
 
})
</script>

<style lang="scss">
.app-one-home-container {
  width: 500px;
  height: 300px;
  background-color: #f0f0f0;
  display: flex;
  flex-direction: column;

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
