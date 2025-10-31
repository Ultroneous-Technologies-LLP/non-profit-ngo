import { FC, PropsWithChildren } from "react";

import { AboutUs, Hero, WeNeed } from "@/components";
import data from "@/content/home-page.json";

import { HomePageDataProps } from "./types";

const Home: FC<PropsWithChildren> = () => {
  const { hero, weNeed, aboutUs }: HomePageDataProps = data;

  return (
    <>
      <Hero {...hero} />
      <WeNeed {...weNeed} />
      <AboutUs {...aboutUs} />
    </>
  );
};

export default Home;
