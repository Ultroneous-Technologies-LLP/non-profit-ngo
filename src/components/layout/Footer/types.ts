export type Icon = "Facebook" | "Instagram" | "LinkedIn" | "Youtube";

interface Logo {
  src: string;
  alt: string;
}

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
  logo: Logo;
  heading: string;
  description: string;
  button: Button;
  navLinks: NavLink[];
  socialSection: SocialSection;
  backgroundImage: Logo;
  companyName: string;
}
