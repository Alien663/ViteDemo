<template>
  <div class="aside-header" :class="{ 'is-collapsed': isCollapse }">
    <button
      type="button"
      class="aside-header-icon-wrapper"
      :aria-label="isCollapse ? 'Expand menu' : 'Collapse menu'"
      :title="isCollapse ? 'Expand menu' : 'Collapse menu'"
      :aria-expanded="!isCollapse"
      @click="toggleCollapse"
    >
      <el-icon :size="24">
        <Expand v-if="isCollapse" />
        <Fold v-else />
      </el-icon>
    </button>

    <div v-if="!isCollapse">
      Home
    </div>
  </div>
  <el-menu router :default-active="route.path" :collapse="isCollapse" class="aside-menu">
    <el-menu-item v-for="item in MenuList" :key="item.link" :index="item.link" :aria-label="item.name">
      <el-icon>
        <component :is="menuIcons[item.icon] || Document" />
      </el-icon>
      <template #title>{{ item.name }}</template>
    </el-menu-item>
  </el-menu>
</template>
<script setup lang="ts">
import { defineEmits, defineProps, ref } from "vue";
import type { MenuModel } from "./MenuModel";
import { useRoute } from "vue-router";
import { ElMenu, ElMenuItem, ElIcon } from "element-plus";
import {
  Expand, Fold, House, InfoFilled, CircleCheck,
  Warning, Lock, CircleClose, Search, Document,
} from "@element-plus/icons-vue";

// #region : Props and State
defineProps({
  MenuList: {
    type: Array as () => MenuModel[],
    required: true,
  },
});

const isCollapse = ref(false);
const emit = defineEmits(["collapse-change"]);
const route = useRoute();
const menuIcons = { House, InfoFilled, CircleCheck, Warning, Lock, CircleClose, Search };
// #endregion

// #region : Methods

const toggleCollapse = () => {
  isCollapse.value = !isCollapse.value;
  emit("collapse-change", isCollapse.value);
};
// #endregion
</script>

<style scoped>
.aside-header {
  background-color: #b3d9ff;
  height: 64px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
}

.aside-header.is-collapsed {
  justify-content: center;
}

.aside-header-icon-wrapper{
  width: 43px;
  height: 43px;
  flex-shrink: 0;
  padding: 0;
  border: 0;
  background: transparent;
  color: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.aside-header-icon-wrapper:hover {
  transform: translateY(-2px);
  background-color: rgba(255, 255, 255, 0.2);
}

.el-menu:not(.el-menu--collapse) {
  width: 240px;
}

.aside-menu{
  background-color: #b3d9ff;
}

</style>
