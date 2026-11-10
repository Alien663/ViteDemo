<template>
  <main>
    <el-container class="layout-root layout-custom" :class="{ 'aside-collapsed': isAsideCollapsed }">
      <el-aside width="100%" class="page-aside">
        <MyAside :MenuList="MenuList" @collapse-change="isAsideCollapsed = $event" />
      </el-aside>
      <el-container class="layout-content">
        <el-header class="page-header">
          <MyHeader v-model:Layout="Layout" />
        </el-header>
        <el-main class="page-main">
          <RouterView></RouterView>
        </el-main>
      </el-container>
    </el-container>
  </main>
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import { ref } from "vue";
import type { MenuModel } from "./components/MenuModel";
import { useStore } from "./store";
import { ElContainer, ElHeader, ElAside, ElMain } from "element-plus";

import MyHeader from "./components/MyHeader.vue";
import MyAside from "./components/MyAside.vue";

const store = useStore();
const Layout = ref(store.Layout || 'default');
const isAsideCollapsed = ref(false);

const MenuList = ref<MenuModel[]>([
  {
    name: "Home",
    link: "/",
    icon: "House",
  },
  {
    name: "About Us",
    link: "/about",
    icon: "InfoFilled",
  },
  {
    name: "HTTP 400",
    link: "/status/400",
    icon: "Warning",
  },
  {
    name: "HTTP 401",
    link: "/status/401",
    icon: "Lock",
  },
  {
    name: "HTTP 403",
    link: "/status/403",
    icon: "CircleClose",
  },
  {
    name: "HTTP 404",
    link: "/status/404",
    icon: "Search",
  },
]);
</script>

<style scoped>
.layout-root {
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  overflow: hidden;
}

.layout-default {
  flex-direction: column;
}

.layout-custom {
  display: grid;
  grid-template-columns: 240px minmax(0, 1fr);
  grid-template-rows: minmax(0, 1fr);
}

.layout-custom.aside-collapsed {
  grid-template-columns: 64px minmax(0, 1fr);
}

.page-header {
  background-color: #c6ffde;
  display: flex;
  flex: 0 0 clamp(30px, 10vh, 64px);
  align-items: center;
  justify-content: center;
  height: clamp(30px, 10vh, 64px);
}

.layout-body,
.layout-content {
  flex: 1;
  min-height: 0;
}

.layout-body {
  flex-direction: row;
}

.layout-content {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.page-aside {
  background-color: #b3d9ff;
  display: flex;
  flex-direction: column;
  flex: 0 0 24%;
  width: 240px;
  height: 100%;
}

.layout-custom > .page-aside {
  grid-column: 1;
  grid-row: 1;
  min-width: 0;
  width: 100%;
  flex: none;
}

.page-aside :deep(.el-menu) {
  flex: 1;
  min-height: 0;
  overflow-y: auto;
  border-right: 0;
}

.page-main {
  min-width: 0;
  align-items: center;
  justify-content: center;
}

:global(body) {
  margin: 0;
}
</style>
