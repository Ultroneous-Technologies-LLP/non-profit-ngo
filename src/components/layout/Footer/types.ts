export type Icon = "Facebook" | "Instagram" | "LinkedIn" | "Youtube";

interface Logo {
  alt: string;
  src: string;
}

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
  backgroundImage: Logo;
  button: Button;
  companyName: string;
  description: string;
  heading: string;
  logo: Logo;
  navLinks: Button[];
  socialSection: SocialSection;
}
