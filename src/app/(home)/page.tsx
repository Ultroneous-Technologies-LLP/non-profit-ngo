import data from "@/content/home-page.json";
import { AboutUs, Hero, MostTrusted, WeNeed } from "@/components";

import { HomePageProps } from "./types";

const Home = () => {
  const { hero, weNeed, aboutUs, mostTrusted }: HomePageProps = data;

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
