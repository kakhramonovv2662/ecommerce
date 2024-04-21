import { lazy } from "react";

export const protectedRoutes = [
  {
    key: "policy",
    path: "/policy",
    component: lazy(() => import("../../modules/user-policy/index")),
  },
];
