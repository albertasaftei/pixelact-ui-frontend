import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { routes } from "@/utils";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const items = [
  {
    title: "Introduction",
    url: routes.docs.introduction,
  },
  {
    title: "Installation",
    url: routes.docs.installation,
  },
];

export function AppSidebar() {
  const { setOpenMobile } = useSidebar();
  const [currentLink, setCurrentLink] = useState<string>();
  return (
    <Sidebar className="absolute">
      <SidebarContent className="h-full">
        <SidebarGroup>
          <SidebarGroupLabel>Getting started</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={currentLink === item.url}
                    onClick={() => {
                      setCurrentLink(item.url);
                      setOpenMobile(false);
                    }}
                  >
                    <NavLink key={item.url} to={item.url}>
                      {item.title}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
