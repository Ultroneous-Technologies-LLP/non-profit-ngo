import { Image } from "@/types";

interface Stats {
  number: string;
  label: string;
}

export interface MostTrustedProps {
  title: string;
  stats: Stats[];
  backgroundImage: Image;
}
