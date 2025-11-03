import data from "@/content/home-page.json";
import {
  AboutUs,
  GiveMonthly,
  Hero,
  MarqueeAnimation,
  MostTrusted,
  PopularArticles,
  RaiseFund,
  SupportFundraiser,
  WeNeed,
} from "@/components";

import { HomePageProps } from "./types";

const Home = () => {
  const {
    hero,
    weNeed,
    aboutUs,
    mostTrusted,
    giveMonthly,
    supportFundraiser,
    marqueeAnimation,
    raiseFund,
    popularArticles,
  }: HomePageProps = data;

  return (
    <>
      <Hero {...hero} />
      <WeNeed {...weNeed} />
      <AboutUs {...aboutUs} />
      <MostTrusted {...mostTrusted} />
      <GiveMonthly {...giveMonthly} />
      <SupportFundraiser {...supportFundraiser} />
      <MarqueeAnimation {...marqueeAnimation} />
      <RaiseFund {...raiseFund} />
      <PopularArticles {...popularArticles} />
    </>
  );
};

export default Home;
