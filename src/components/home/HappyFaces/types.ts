import { Image } from "@/types";

interface HappyFaceImage extends Image {
  height: number;
  width: number;
}

interface HappyFaceSection {
  id: number;
  images: HappyFaceImage[];
  spaceY: string;
}

export interface HappyFacesProps {
  sections: HappyFaceSection[];
  title?: string;
}
