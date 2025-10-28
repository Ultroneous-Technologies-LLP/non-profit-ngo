import data from "@/content/home-page.json";
import { AboutUs, Hero, WeNeed } from "@/components";

import { HomePageProps } from "./types";

const Home = () => {
  const { hero, weNeed, aboutUs }: HomePageProps = data;

  return (
    <>
      <Hero {...hero} />
      <WeNeed {...weNeed} />
      <AboutUs {...aboutUs} />
    </>
  );
};

export default Home;
