import { useIsMobile } from "@/hooks/use-mobile";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = [
  { name: "Installation", path: "/docs/installation" },
  { name: "Fonts", path: "/docs/fonts" },
];

export function DocsLayout() {
  const [currentLink, setCurrentLink] = useState(window.location.pathname);
  const isMobile = useIsMobile();

  console.log(currentLink);

  return (
    <div className="flex flex-1 max-w-full bg-background">
      {!isMobile && (
        <aside className="min-w-72 border-r-4 border-dashed mx-12 py-12 xl:mx-24">
          <nav className="flex flex-col gap-2 pixel-font">
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

      <div className="flex flex-1 px-12 py-12 w-full xl:pr-100">
        <Outlet />
      </div>
    </div>
  );
}
