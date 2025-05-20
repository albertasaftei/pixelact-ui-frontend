// src/components/Layout.tsx
import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { name: "Installation", path: "/docs/installation" },
  { name: "Usage", path: "/docs/usage" },
];

export function DocsLayout() {
  const [currentLink, setCurrentLink] = useState(navItems[0].path);
  const isMobile = useIsMobile();

  return (
    <div className="flex w-full bg-background">
      {!isMobile && (
        <aside className="min-w-72 border-r-4 border-dashed p-12">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                onClick={() => setCurrentLink(item.path)}
                className={
                  currentLink === item.path
                    ? "w-fit text-foreground border-b-2"
                    : "w-fit text-foreground"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </aside>
      )}

      <div className="flex-1 px-12 md:px-32 xl:px-52 2xl:px-80 py-12 sm:py-12 w-full ">
        <Outlet />
      </div>
    </div>
  );
}
