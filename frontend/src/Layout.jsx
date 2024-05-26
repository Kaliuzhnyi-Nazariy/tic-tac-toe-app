import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import BarApp from "./components/BarApp/BarApp";

export const Layout = () => {
  return (
    <div style={{ margin: "0 auto", padding: "0 16px" }}>
      <BarApp />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
