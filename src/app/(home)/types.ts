import {
  AboutUsProps,
  FooterProps,
  GiveMonthlyProps,
  HeaderProps,
  HeroProps,
  MostTrustedProps,
  WeNeedProps,
} from "@/components";

export interface layoutProps {
  header: HeaderProps;
  footer: FooterProps;
}

export interface HomePageProps {
  hero: HeroProps;
  weNeed: WeNeedProps;
  aboutUs: AboutUsProps;
  mostTrusted: MostTrustedProps;
  giveMonthly:GiveMonthlyProps
}
