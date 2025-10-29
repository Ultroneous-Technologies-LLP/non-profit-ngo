import { Image } from "@/types";

interface FundraiserItem {
  id:number
  src: string;
  alt: string;
  title: string;
  subtitle: string;
  donateText: string;
  link: string;
}

interface ViewMoreButton {
  label: string;
  link: string;
}

export interface SupportFundraiserProps {
  title: string;
  description: string;
  fundraisers: FundraiserItem[];
  viewMore: ViewMoreButton;
  backgroundImage: Image;
}
