import { Image, ViewMoreButton } from "@/types";

interface FundraiserItem {
  alt: string;
  donateText: string;
  id: number;
  link: string;
  src: string;
  subtitle: string;
  title: string;
}

export interface SupportFundraiserProps {
  backgroundImage: Image;
  description: string;
  fundraisers: FundraiserItem[];
  title: string;
  viewMore: ViewMoreButton;
}
