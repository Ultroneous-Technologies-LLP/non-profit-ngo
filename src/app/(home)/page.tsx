import { Hero, WeNeed } from "@/components";
import data from "@/content/home-page.json";

import { HomePageProps } from "./types";

const Home = () => {
  const { hero, weNeed }: HomePageProps = data;

  return (
    <>
      <Hero {...hero} />
      <WeNeed {...weNeed} />
    </>
  );
};

export default Home;
