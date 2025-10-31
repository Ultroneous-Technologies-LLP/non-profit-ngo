import { Image } from "@/types";

interface Stats {
  label: string;
  number: string;
}

export interface MostTrustedProps {
  backgroundImage: Image;
  stats: Stats[];
  title: string;
}
