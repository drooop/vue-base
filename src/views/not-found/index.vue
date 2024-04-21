<template>
  <div class="flex items-center justify-center min-h-screen bg-gray-100">
    <div class="text-center">
      <h1 class="text-6xl font-bold text-blue-500 mb-6">404</h1>
      <p class="text-xl text-gray-600 mb-6">抱歉,你访问的页面不存在</p>
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        @click="goBack"
      >
        返回首页
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "NotFound",
  setup() {
    const router = useRouter();

    const goBack = () => {
      router.push("/");
    };

    return {
      goBack,
    };
  },
});
</script>
