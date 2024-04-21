import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import { CustomLoading, ProtectedRoute } from "../components";
import NotFound from "./not-found/not-found";
import { protectedRoutes } from "../configs";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="/" element={<Navigate replace to={"/policy"} />} />
        {protectedRoutes.map(({ component: Component, key, path }, index) => {
          return (
            <Route key={key + index} path={path} element={<Component />} />
          );
        })}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

const Views = () => {
  return (
    <Suspense
      fallback={
        <CustomLoading
          loading={true}
          className="absolute z-50 left-0 top-0 right-0 bottom-0"
        />
      }
    >
      <AllRoutes />
    </Suspense>
  );
};

export default Views;
