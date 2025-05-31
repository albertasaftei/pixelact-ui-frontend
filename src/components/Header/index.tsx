import { useIsMobile } from "@/hooks/use-mobile";
import { routes } from "@/utils";
import { NavLink } from "react-router-dom";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { useState } from "react";
import { DarkMode, Github, LightMode, Logo, Menu } from "@/assets/icons";
import { cn } from "@/lib/utils";

const navigationItems = [{ name: "Docs", path: routes.docs.installation }];
const mobileNavigationItems = [
  {
    name: "Documentation",
    items: [
      { name: "Installation", path: routes.docs.installation },
      { name: "Fonts", path: routes.docs.fonts },
    ],
  },
  {
    name: "Components",
    items: [
      { name: "Button", path: "/docs/button" },
      { name: "Input", path: "/docs/input" },
      { name: "Select", path: "/docs/select" },
      { name: "Checkbox", path: "/docs/checkbox" },
      { name: "Radio", path: "/docs/radio" },
    ],
  },
];

const iconsClassName = "hover:opacity-80 active:scale-90";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useIsMobile();
  const [isDarkMode, setIsDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  return (
    <header>
      <nav className="flex gap-12 justify-between items-center h-16 bg-foreground px-12 pixel-font xl:px-24">
        <div className="flex items-center justify-between md:justify-normal w-full gap-12">
          <NavLink to={routes.root} className=" text-xs text-background">
            <Logo width={30} />
          </NavLink>

          {isMobile ? (
            <Drawer open={isOpen} onOpenChange={setIsOpen}>
              <DrawerTrigger>
                <Menu
                  className={cn(iconsClassName)}
                  style={{ color: "var(--background)" }}
                />
              </DrawerTrigger>
              <DrawerContent className="p-4 gap-6 overflow-auto">
                {mobileNavigationItems.map((section) => (
                  <div key={section.name}>
                    <div className="mb-2 text-lg text-foreground">
                      {section.name}
                    </div>
                    <ul className="flex flex-col space-y-3 ">
                      {section.items.map((subItem) => (
                        <li key={subItem.path} onClick={() => setIsOpen(false)}>
                          <a href={subItem.path} className="text-foreground/40">
                            {subItem.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </DrawerContent>
            </Drawer>
          ) : (
            <ul>
              <div className="flex items-center gap-4 text-xs">
                {navigationItems.map((item) => (
                  <li key={item.path} className="relative">
                    <NavLink to={item.path} className="text-background">
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </div>
            </ul>
          )}
        </div>
        {!isMobile && (
          <div className="flex items-center gap-4 cursor-pointer">
            <Github
              className={cn(iconsClassName, "fill-background")}
              onClick={() =>
                window.open(
                  "https://github.com/pixelact-ui/pixelact-ui",
                  "__blank"
                )
              }
            />
            {isDarkMode ? (
              <DarkMode
                className={cn(iconsClassName, "fill-background")}
                onClick={() => {
                  setIsDarkMode(false);
                  document.body.classList.remove("dark");
                  document.body.classList.add("light");
                  localStorage.setItem("theme", "light");
                }}
              />
            ) : (
              <LightMode
                className={cn(iconsClassName)}
                color="background"
                onClick={() => {
                  setIsDarkMode(true);
                  document.body.classList.remove("light");
                  document.body.classList.add("dark");
                  localStorage.setItem("theme", "dark");
                }}
              />
            )}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
