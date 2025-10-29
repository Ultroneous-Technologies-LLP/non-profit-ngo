export interface Donation {
  id: number;
  name: string;
  amount: number;
  image: string;
  alt: string;
}

export interface MarqueeAnimationProps {
  donations: Donation[];
}
