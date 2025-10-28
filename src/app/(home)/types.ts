import { AboutUsProps, FooterProps, HeaderProps, HeroProps, WeNeedProps } from "@/components";

export interface layoutProps {
  header: HeaderProps;
  footer: FooterProps;
}

export interface HomePageProps {
  hero: HeroProps;
  weNeed: WeNeedProps;
  aboutUs:AboutUsProps
}
