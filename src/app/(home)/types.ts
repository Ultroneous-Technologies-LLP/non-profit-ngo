import {
  AboutUsProps,
  FooterProps,
  GiveMonthlyProps,
  HeaderProps,
  HeroProps,
  MarqueeAnimationProps,
  MostTrustedProps,
  RaiseFundProps,
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
  marqueeAnimation: MarqueeAnimationProps;
  mostTrusted: MostTrustedProps;
  raiseFund: RaiseFundProps;
  supportFundraiser: SupportFundraiserProps;
  weNeed: WeNeedProps;
}
