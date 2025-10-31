import { Image } from "@/types";

export type Icon = "Facebook" | "Instagram" | "LinkedIn" | "Youtube";

interface Button {
  href: string;
  label: string;
}

interface Link {
  href: string;
  icon: Icon;
  label: string;
}

interface SocialSection {
  links: Link[];
  title: string;
}

export interface FooterProps {
  backgroundImage: Image;
  button: Button;
  companyName: string;
  description: string;
  heading: string;
  logo: Image;
  navLinks: Button[];
  socialSection: SocialSection;
}
