import { Hero } from "@/components";
import data from "@/content/home-page.json";

import { HomePageProps } from "./types";

const Home = () => {
  const { hero }: HomePageProps = data;

  return <Hero {...hero} />;
};

export default Home;
