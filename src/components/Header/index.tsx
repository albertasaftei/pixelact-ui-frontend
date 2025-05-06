import { useIsMobile } from "@/hooks/use-mobile";
import { routes } from "@/utils";
import { Menu } from "lucide-react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const isMobile = useIsMobile();

  return (
    <header>
      <nav className="flex gap-12 items-center h-16 bg-gray-800 text-white px-12">
        <NavLink className="font-bold text-xs" to={routes.root}>
          PixelactUI
        </NavLink>
        {isMobile ? (
          <Menu />
        ) : (
          <ul>
            <div className="flex gap-4 text-xs">
              <NavLink to={routes.docs.introduction}>Docs</NavLink>
              <NavLink to="/contact">Contact</NavLink>
            </div>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
