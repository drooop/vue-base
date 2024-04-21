<script setup lang="ts">
import { onMounted, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import routes from "@/router/routes";
import Logo from "@/layout/utils";
import { authStore } from "@/store/modules/tt";

interface menuItem {
  name: string;
  route: string;
}

const router = useRouter();
const _route = useRoute();
const store = authStore();
const defaultActive = ref("0");
const menuItems = ref<menuItem[]>([]);
const getNavItems = () => {
  const baseRoute = routes.find((route) => route.name === "base");
  return baseRoute?.children?.reduce((pre: any, curr) => {
    const { path, meta } = curr;
    if (meta.show && meta.title) {
      pre.push({
        name: meta.title,
        route: path,
      });
    }
    return pre;
  }, []);
};
onMounted(() => {
  menuItems.value = getNavItems();
  const indexFound = menuItems.value.findIndex(
    (route) => route.route === _route.path
  );
  defaultActive.value = indexFound > -1 ? indexFound.toString() : "0";
});

const toLogout = () => {
  store.logout();
  router.push("/login");
};
</script>

<template>
  <div class="flex flex-row">
    <!-- SideBar -->
    <div>
      <el-menu class="el-menu-vertical" :default-active="defaultActive" router>
        <img class="w-80 h-16 mb-3" :src="Logo" alt="logo" />
        <el-menu-item
          v-for="(v, index) in menuItems"
          :index="index + ''"
          :route="v.route"
        >
          <span>{{ v.name }}</span>
          <!-- {{ v.path }} -->
        </el-menu-item>
      </el-menu>
    </div>

    <!-- Right -->
    <div class="flex flex-col w-full h-full">
      <!-- Header -->
      <div class="flex justify-end border-b-2 h-16">
        <!-- <div>{{ ifAuth() }}</div> -->
        <div>{{ store.authStatus }}</div>
        <el-button @click="toLogout">Logout</el-button>
      </div>
      <!-- Content -->
      <div>
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<style scoped>
.el-menu-vertical {
  width: 200px;
  height: 100vh;
}

.header {
  height: 300px;
}
</style>
