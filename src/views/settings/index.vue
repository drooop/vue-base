<script setup lang="ts">
import { authStore } from "@/store/modules/tt";

const store = authStore();
const toLogin = () => {
  store.login();
};
const toLogout = () => {
  store.logout();
};
</script>

<template>
  <div class="flex flex-row">
    <el-button type="primary" @click="toLogin">Login</el-button>
    <el-button type="warning" @click="toLogout">Logout</el-button>
    {{ store.authStatus }}
  </div>
</template>

<style scoped></style>
