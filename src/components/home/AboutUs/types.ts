import { Image } from "@/types";

interface LongDescription {
  text: string;
}

interface AboutUsButton {
  href: string;
  label: string;
}

export interface AboutUsProps {
  backgroundImage: Image;
  button: AboutUsButton;
  description: string;
  image: Image;
  longDescription: LongDescription[];
  title: string;
}
