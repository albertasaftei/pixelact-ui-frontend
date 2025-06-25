import { useIsMobile } from "@/hooks/use-mobile";
import { routes } from "@/utils";
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const navItems = {
  "Getting started": [
    { name: "Installation", path: routes.docs.installation },
    { name: "Fonts", path: routes.docs.fonts },
    { name: "Contributing", path: routes.docs.contributing },
  ],
  Components: [],
};

export function DocsLayout() {
  const [currentLink, setCurrentLink] = useState(window.location.pathname);
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-1 max-w-full bg-background">
      {!isMobile && (
        <aside className="min-w-72 border-r-4 border-dashed border-foreground mx-12 px-12 py-12 xl:mx-12">
          <nav className="flex flex-col gap-4 pixel-font">
            {Object.entries(navItems).map(([section, items]) => (
              <div key={section} className="flex flex-col gap-2">
                <h3 className="w-fit text-lg text-foreground font-bold border-b-2">
                  {section}
                </h3>
                {items.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    onClick={() => setCurrentLink(item.path)}
                    className={
                      currentLink === item.path
                        ? "w-fit text-link border-b-2"
                        : "w-fit text-foreground"
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            ))}
          </nav>
        </aside>
      )}

      <div className="p-8 md:px-12 md:py-12 w-full xl:max-w-4xl">
        <Outlet />
      </div>
    </div>
  );
}
