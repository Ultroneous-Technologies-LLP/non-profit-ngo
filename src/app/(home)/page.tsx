import { FC, PropsWithChildren } from "react";

import { AboutUs, GiveMonthly, Hero, MostTrusted, SupportFundraiser, WeNeed } from "@/components";
import data from "@/content/home-page.json";

import { HomePageDataProps } from "./types";

const Home: FC<PropsWithChildren> = () => {
  const { hero, weNeed, aboutUs, mostTrusted, giveMonthly, supportFundraiser }: HomePageDataProps =
    data;

  return (
    <>
      <Hero {...hero} />
      <WeNeed {...weNeed} />
      <AboutUs {...aboutUs} />
      <MostTrusted {...mostTrusted} />
      <GiveMonthly {...giveMonthly} />
      <SupportFundraiser {...supportFundraiser} />
    </>
  );
};

export default Home;
