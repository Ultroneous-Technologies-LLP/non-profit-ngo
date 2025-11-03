import { Image, ViewMoreButton } from "@/types";

interface MissionType extends ViewMoreButton {
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
  viewMore: ViewMoreButton;
}
