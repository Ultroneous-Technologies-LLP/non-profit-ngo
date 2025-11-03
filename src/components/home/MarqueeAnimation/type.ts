export interface Donation {
  alt: string;
  amount: number;
  id: number;
  image: string;
  name: string;
}

export interface MarqueeAnimationProps {
  donations: Donation[];
}
