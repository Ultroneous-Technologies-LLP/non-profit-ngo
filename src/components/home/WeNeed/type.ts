import { Image } from "@/types";

interface Title {
  text: string;
  color?: string;
}

interface TextImage {
  image: Image;
}

interface First extends TextImage {
  title: string;
}

interface Second extends TextImage {
  titles: Title[];
}

interface Third extends TextImage {
  title: Title;
}

export interface WeNeedProps {
  firstText: First;
  secondText: Second;
  thirdText: Third;
}
