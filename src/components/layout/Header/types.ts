import { Image } from "@/types";

interface NavItem {
  id: number;
  label: string;
  href: string;
  ariaLabel: string;
}

interface Buttons {
  donateButton: NavItem;
  loginButton: NavItem;
}

export interface HeaderProps {
  logo: Image;
  menu: NavItem[];
  buttons: Buttons;
}
