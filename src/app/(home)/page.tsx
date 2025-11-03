import { FC, PropsWithChildren } from "react";

import { AboutUs, GiveMonthly, Hero, MostTrusted, WeNeed } from "@/components";
import data from "@/content/home-page.json";

import { HomePageDataProps } from "./types";

const Home: FC<PropsWithChildren> = () => {
  const { hero, weNeed, aboutUs, mostTrusted, giveMonthly }: HomePageDataProps = data;

  return (
    <>
      <Hero {...hero} />
      <WeNeed {...weNeed} />
      <AboutUs {...aboutUs} />
      <MostTrusted {...mostTrusted} />
      <GiveMonthly {...giveMonthly} />
    </>
  );
};

export default Home;
