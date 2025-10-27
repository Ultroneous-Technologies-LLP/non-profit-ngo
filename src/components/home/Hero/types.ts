import { Image } from "@/types";

interface HeroButton {
  label: string;
  href: string;
}

interface HeroEvent {
  title: string;
  description: string;
  button: HeroButton;
  image: Image;
  playButton: Image;
}

export interface HeroProps {
  heading: string;
  description: string;
  event: HeroEvent;
  heroImage: Image;
  backgroundImage: Image;
}
