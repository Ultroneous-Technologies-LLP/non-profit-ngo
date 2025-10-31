import { FC, PropsWithChildren } from "react";

import { AboutUs, Hero, MostTrusted, WeNeed } from "@/components";
import data from "@/content/home-page.json";

import { HomePageDataProps } from "./types";

const Home: FC<PropsWithChildren> = () => {
  const { hero, weNeed, aboutUs, mostTrusted }: HomePageDataProps = data;

  return (
    <>
      <Hero {...hero} />
      <WeNeed {...weNeed} />
      <AboutUs {...aboutUs} />
      <MostTrusted {...mostTrusted} />
    </>
  );
};

export default Home;
