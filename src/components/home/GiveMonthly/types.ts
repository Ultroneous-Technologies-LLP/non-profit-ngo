import { Image } from "@/types";

interface ViewMore {
  label: string;
  link: string;
}

interface MissionType extends ViewMore {
  id: number;
  image: string;
  percent: number;
  status: string;
  subtitle: string;
  title: string;
}

export interface ProgressCircleProps {
  percent?: number;
}

export interface GiveMonthlyProps {
  backgroundImage: Image;
  description: string;
  missions: MissionType[];
  title: string;
  viewMore: ViewMore;
}
