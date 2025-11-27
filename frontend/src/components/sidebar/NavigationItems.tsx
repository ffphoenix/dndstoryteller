import { GridIcon, TableIcon } from "../../icons";
import React from "react";

export type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: { name: string; path: string; new?: boolean }[];
};

export const navItems: NavItem[] = [
  {
    icon: <GridIcon />,
    name: "Dashboard",
    subItems: [{ name: "Games profile", path: "/" }],
  },
  {
    name: "Game system",
    icon: <TableIcon />,
    subItems: [{ name: "Systems", path: "/systems" }],
  },
];
