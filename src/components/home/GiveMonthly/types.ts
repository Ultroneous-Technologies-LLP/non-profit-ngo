import { Image } from "@/types";

interface MissionType {
  id:number
  title: string;
  subtitle: string;
  image: string;
  percent: number;
  status: string;
  link: string;
  label: string;
}

interface ViewMore {
  label: string;
  link: string;
}

export interface GiveMonthlyProps {
  title: string;
  description: string;
  missions: MissionType[];
  viewMore: ViewMore;
  backgroundImage:Image
}
