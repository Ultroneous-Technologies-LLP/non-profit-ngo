import { Image } from "@/types";

export type Icon = "Facebook" | "Instagram" | "LinkedIn" | "Youtube";

interface Button {
  label: string;
  href: string;
}

interface NavLink {
  label: string;
  href: string;
}

interface Link {
  icon: Icon;
  href: string;
  label: string;
}

interface SocialSection {
  title: string;
  links: Link[];
}

export interface FooterProps {
  logo: Image;
  heading: string;
  description: string;
  button: Button;
  navLinks: NavLink[];
  socialSection: SocialSection;
  backgroundImage: Image;
  companyName: string;
}
