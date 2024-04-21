import { memo, lazy, Suspense } from "react";
import { CustomLoading } from "../components";

const PrivateLayout = lazy(() => import("./main-layout"));

const Layout = memo(() => {
  return (
    <Suspense
      fallback={
        <CustomLoading
          loading={true}
          className="absolute z-50 left-0 top-0 right-0 bottom-0"
        />
      }
    >
      <PrivateLayout />
    </Suspense>
  );
});

export default Layout;
