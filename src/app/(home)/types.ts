import { AboutUsProps, FooterProps, HeaderProps, HeroProps, WeNeedProps } from "@/components";

export interface LayoutProps {
  footer: FooterProps;
  header: HeaderProps;
}

export interface HomePageDataProps {
  aboutUs: AboutUsProps;
  hero: HeroProps;
  weNeed: WeNeedProps;
}
