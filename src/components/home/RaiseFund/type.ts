import { Image } from "@/types";

interface EnrollButton {
  href: string;
  label: string;
}

export interface RaiseFundProps {
  title: string;
  description: string;
  enrollButton: EnrollButton;
  fundForNGOButton: EnrollButton;
  image: Image;
  background: Image;
}
