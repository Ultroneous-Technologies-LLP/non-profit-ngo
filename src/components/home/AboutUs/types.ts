import { Image } from "@/types";

interface LongDescription {
  text: string;
}

interface AboutUsButton {
  label: string;
  href: string;
}

export interface AboutUsProps {
  image: Image;
  backgroundImage: Image;
  title: string;
  description: string;
  longDescription: LongDescription[];
  button: AboutUsButton;
}
