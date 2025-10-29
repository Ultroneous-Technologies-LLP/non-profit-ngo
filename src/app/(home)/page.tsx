import data from "@/content/home-page.json";
import {
  AboutUs,
  GiveMonthly,
  Hero,
  MostTrusted,
  SupportFundraiser,
  WeNeed,
} from "@/components";

import { HomePageProps } from "./types";

const Home = () => {
  const {
    hero,
    weNeed,
    aboutUs,
    mostTrusted,
    giveMonthly,
    supportFundraiser,
  }: HomePageProps = data;

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
