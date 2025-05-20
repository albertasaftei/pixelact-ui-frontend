import Header from "@/components/Header";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex w-screen flex-col">
      <Header />
      <main>
        <Outlet />
      </main>
      <footer className="py-4 px-12 bg-foreground text-background dark:bg-foreground dark:text-background text-xs">
        <p>© 2025 Pixelact UI</p>
      </footer>
    </div>
  );
};

export default Layout;
