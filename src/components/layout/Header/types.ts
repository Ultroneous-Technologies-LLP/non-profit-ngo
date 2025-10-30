import { Image } from "@/types";

interface NavItem {
  ariaLabel: string;
  href: string;
  id: number;
  label: string;
}

interface Buttons {
  donateButton: NavItem;
  loginButton: NavItem;
}

export interface HeaderProps {
  buttons: Buttons;
  logo: Image;
  menu: NavItem[];
}
