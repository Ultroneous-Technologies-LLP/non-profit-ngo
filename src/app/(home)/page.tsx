import { FC, PropsWithChildren } from "react";

import {
  AboutUs,
  GiveMonthly,
  HappyFaces,
  Hero,
  MarqueeAnimation,
  MostTrusted,
  PopularArticles,
  RaiseFund,
  SupportFundraiser,
  WeNeed,
} from "@/components";
import data from "@/content/home-page.json";

import { HomePageDataProps } from "./types";

const Home: FC<PropsWithChildren> = () => {
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
    happyFaces,
  }: HomePageDataProps = data;

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
      <HappyFaces {...happyFaces} />
    </>
  );
};

export default Home;
