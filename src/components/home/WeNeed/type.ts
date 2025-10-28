import { Image } from "@/types";

interface WeNeedTitle {
  text: string;
  color: string;
}

interface First {
  title: string;
  image: Image;
}

interface Second {
  titles: WeNeedTitle[];
  image: Image;
}

interface Third {
  title: WeNeedTitle;
  image: Image;
}

export interface WeNeedProps {
  firstText: First;
  secondText: Second;
  thirdText: Third;
}
