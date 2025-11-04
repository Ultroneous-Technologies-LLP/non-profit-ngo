import { Image } from "@/types";

interface HeroButton {
  href: string;
  label: string;
}

interface HeroEvent {
  button: HeroButton;
  description: string;
  image: Image;
  playButton: Image;
  title: string;
}

export interface HeroProps {
  backgroundImage: Image;
  description: string;
  event: HeroEvent;
  heroImage: Image;
  title: string;
}
