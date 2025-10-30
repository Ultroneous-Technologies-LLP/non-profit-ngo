import { FC, ReactNode } from "react";

interface HomePageProps {
  children: ReactNode;
}

const Home: FC<HomePageProps> = () => {
  return (
    <div className="h-screen pt-10 text-center text-5xl xl:text-8xl">
      <h1 className="font-segoe-regular">
        <span>Welcome to Non Profit NGO</span>
      </h1>
    </div>
  );
};

export default Home;
