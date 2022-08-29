<template>
  <el-header style="text-align: right; font-size: 12px">
    <div class="toolbar">
      <span>Tom</span>
      <el-dropdown>
        <el-icon style="margin-left: 8px; margin-top: 1px"><setting /></el-icon>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Logout</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </el-header>
</template>

<script setup lang="ts">
  import { Setting } from '@element-plus/icons-vue'
</script>

<style scoped>
  .el-header {
    position: relative;
    background-color: var(--el-color-primary-light-7);
    color: var(--el-text-color-primary);
  }
</style>
