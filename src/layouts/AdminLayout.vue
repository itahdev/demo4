<template>
  <el-container class="layout-container-demo" style="height: 500px">
    <the-sidebar></the-sidebar>

    <el-container class="is-vertical">
      <the-header></the-header>

      <el-main>
        <router-view></router-view>
      </el-main>

      <the-footer></the-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
  import TheSidebar from './partials/TheSidebar.vue'
  import TheHeader from './partials/TheHeader.vue'
  import TheFooter from './partials/TheFooter.vue'
</script>

<style>
  .layout-container-demo .el-main {
    padding: 0;
  }
  .layout-container-demo .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }
  .layout-container-demo .toolbar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    right: 20px;
  }
</style>
