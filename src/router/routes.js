const routes = [
  {
    path: "/",
    name: "AppLayout",
    component: () => import("../layouts/AppLayout.vue"),
    children: [
      {
        path: "/",
        name: "Beranda",
        component: () => import("../views/Beranda.vue"),
      },
      {
        path: "/forum",
        name: "Forum",
        component: () => import("../views/Forum.vue"),
      },
      {
        path: "/laporan",
        name: "Laporan",
        component: () => import("../views/Laporan.vue"),
      },
      {
        path: "/pelaporan",
        name: "Pelaporan",
        component: () => import("../views/Pelaporan.vue"),
      },
      {
        path: "/profil",
        name: "Profil",
        component: () => import("../views/Profil.vue"),
      },
      {
        path: "/tentang",
        name: "Tentang",
        component: () => import("../views/Tentang.vue"),
      },
      {
        path: "/forum/:id",
        name: "ForumDetail",
        component: () => import("../views/ForumDetail.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/auth/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/auth/Register.vue"),
  },
];

export default routes;
