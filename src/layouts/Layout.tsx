import Header from "@/components/Header";
import Spinner from "@/components/Spinner";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Suspense fallback={<Spinner />}>
          <Outlet />
        </Suspense>
      </div>
      <footer className="py-4 px-12 bg-foreground text-background dark:bg-foreground dark:text-background text-xs">
        <p className="pixel-font">© 2025 Pixelact UI</p>
      </footer>
    </div>
  );
};

export default Layout;
