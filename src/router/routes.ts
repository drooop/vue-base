import Workbench from "@/views/workbench/index.vue";
import WorkCenter from "@/views/work-center/index.vue";
import Login from "@/views/login/index.vue";
import NotFound from "@/views/not-found/index.vue";
import Settings from "@/views/settings/index.vue";
import Layout from "@/layout/index.vue";

const routes = [
  {
    path: "/",
    name: "base",
    component: Layout,
    meta: {
      requiredAuth: true,
    },
    children: [
      {
        path: "/",
        name: "Workbench'",
        component: Workbench,
        meta: {
          title: "工作台",
          show: false,
        },
      },
      {
        path: "/workbench",
        name: "Workbench",
        component: Workbench,
        meta: {
          title: "工作台",
          show: true,
        },
      },
      {
        path: "/work-center",
        name: "WorkCenter",
        component: WorkCenter,
        meta: {
          title: "工作中心",
          show: true,
        },
      },
      {
        path: "/settings",
        name: "Settings",
        component: Settings,
        meta: {
          title: "设置",
          show: true
        }
      },
    ],
  },
  {
    path: "/login",
    component: Login,
    name: "Login",
    meta: {
      requiredAuth: false,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    component: NotFound,
    name: "NotFound",
    meta: {
      requiredAuth: false,
    },
  },
];

export default routes;
