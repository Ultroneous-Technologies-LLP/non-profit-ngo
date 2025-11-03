import {
  AboutUsProps,
  FooterProps,
  GiveMonthlyProps,
  HappyFacesProps,
  HeaderProps,
  HeroProps,
  MarqueeAnimationProps,
  MostTrustedProps,
  PopularArticlesProps,
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
  happyFaces: HappyFacesProps;
  hero: HeroProps;
  marqueeAnimation: MarqueeAnimationProps;
  mostTrusted: MostTrustedProps;
  popularArticles: PopularArticlesProps;
  raiseFund: RaiseFundProps;
  supportFundraiser: SupportFundraiserProps;
  weNeed: WeNeedProps;
}
