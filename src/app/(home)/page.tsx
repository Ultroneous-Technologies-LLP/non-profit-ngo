import { FC, PropsWithChildren } from "react";

import { Hero } from "@/components/home";
import data from "@/content/home-page.json";

import { HomePageDataProps } from "./types";

const Home: FC<PropsWithChildren> = () => {
  const { hero }: HomePageDataProps = data;

  return <Hero {...hero} />;
};

export default Home;
