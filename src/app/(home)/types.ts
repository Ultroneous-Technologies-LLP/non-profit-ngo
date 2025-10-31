import {
  AboutUsProps,
  FooterProps,
  HeaderProps,
  HeroProps,
  MostTrustedProps,
  WeNeedProps,
} from "@/components";

export interface LayoutProps {
  footer: FooterProps;
  header: HeaderProps;
}

export interface HomePageDataProps {
  aboutUs: AboutUsProps;
  hero: HeroProps;
  mostTrusted: MostTrustedProps;
  weNeed: WeNeedProps;
}
