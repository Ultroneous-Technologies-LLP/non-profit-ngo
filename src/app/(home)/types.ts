import {
  AboutUsProps,
  FooterProps,
  GiveMonthlyProps,
  HeaderProps,
  HeroProps,
  MarqueeAnimationProps,
  MostTrustedProps,
  PopularArticlesProps,
  RaiseFundProps,
  SupportFundraiserProps,
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
  giveMonthly: GiveMonthlyProps;
  supportFundraiser: SupportFundraiserProps;
  marqueeAnimation: MarqueeAnimationProps;
  raiseFund: RaiseFundProps
  popularArticles: PopularArticlesProps;
}
