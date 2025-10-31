import { FC, PropsWithChildren } from "react";

import { Hero, WeNeed } from "@/components";
import data from "@/content/home-page.json";

import { HomePageDataProps } from "./types";

const Home: FC<PropsWithChildren> = () => {
  const { hero, weNeed }: HomePageDataProps = data;

  return (
    <>
      <Hero {...hero} />
      <WeNeed {...weNeed} />
    </>
  );
};

export default Home;
