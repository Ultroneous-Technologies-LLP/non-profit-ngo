import {
  AboutUsProps,
  FooterProps,
  GiveMonthlyProps,
  HeaderProps,
  HeroProps,
  MostTrustedProps,
  SupportFundraiserProps,
  WeNeedProps,
} from "@/components";

export interface LayoutProps {
  footer: FooterProps;
  header: HeaderProps;
}

export interface HomePageDataProps {
  aboutUs: AboutUsProps;
  giveMonthly: GiveMonthlyProps;
  hero: HeroProps;
  mostTrusted: MostTrustedProps;
  supportFundraiser: SupportFundraiserProps;
  weNeed: WeNeedProps;
}
