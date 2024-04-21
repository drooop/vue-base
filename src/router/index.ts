import { createWebHashHistory, createRouter } from "vue-router";
import routes from "./routes";
import { authStore } from "@/store/modules/tt";

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

router.beforeEach(async (to, _) => {
  const store = authStore();
  if (!store.authStatus && to.name !== "Login") {
    return { name: "Login" };
  }
});

export default router;
