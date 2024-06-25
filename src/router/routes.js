const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/IndexPage.vue") },
      {
        path: "setup-guide",
        component: () => import("src/pages/SetupGuideQ.vue"),
      },
      {
        path: "typography",
        component: () => import("src/pages/Typography.vue"),
      },
      { path: "colors", component: () => import("src/pages/Colors.vue") },
      { path: "spacing", component: () => import("src/pages/Spacing.vue") },
      {
        path: "breakpoints",
        component: () => import("src/pages/Breakpoints.vue"),
      },
      {
        path: "classes-variables",
        component: () => import("src/pages/ClassesVariables.vue"),
      },
      {
        path: "flex-grid-1",
        component: () => import("src/pages/FlexGrid1.vue"),
      },
      {
        path: "profile",
        component: () => import("src/pages/profile/ProfilePage.vue"),
        children: [
          {
            path: "",
            component: () => import("src/pages/profile/ProfilePostsPosts.vue"),
          },
          {
            path: "taged",
            component: () => import("src/pages/profile/ProfilePostsTaged.vue"),
          },
          {
            path: "saved",
            component: () => import("src/pages/profile/ProfilePostsSaved.vue"),
          },
        ],
      },
      {
        path: "form-handling",
        component: () => import("src/pages/FormHandling.vue"),
      },
      {
        path: "quasar-utils",
        component: () => import("src/pages/QuasarUtils.vue"),
      },
      {
        path: "quasar-language-packs",
        component: () => import("src/pages/QuasarLanguagePacks.vue"),
      },
    ],
  },
  {
    path: "/sub",
    component: () => import("layouts/SubLayout.vue"),
    children: [
      { path: "", component: () => import("src/pages/sub/IndexPage.vue") },
      {
        path: "sub-page-1",
        component: () => import("src/pages/sub/SubPage1.vue"),
      },
      {
        path: "sub-page-2",
        component: () => import("src/pages/sub/SubPage2.vue"),
      },
      {
        path: "profile",
        component: () => import("src/pages/profile/ProfilePage.vue"),
        children: [
          {
            path: "",
            component: () => import("src/pages/profile/ProfilePostsPosts.vue"),
          },
          {
            path: "taged",
            component: () => import("src/pages/profile/ProfilePostsTaged.vue"),
          },
          {
            path: "saved",
            component: () => import("src/pages/profile/ProfilePostsSaved.vue"),
          },
        ],
      },
    ],
  },
  {
    path: "/auth",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      { path: "sign-in", component: () => import("src/pages/auth/SignIn.vue") },
      { path: "sign-up", component: () => import("src/pages/auth/SignUp.vue") },
    ],
  },
  {
    path: "/youtube",
    component: () => import("layouts/youtube/index.vue"),
    children: [
      {
        path: "",
        component: () => import("src/layouts/youtube/YoutubeContent.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
