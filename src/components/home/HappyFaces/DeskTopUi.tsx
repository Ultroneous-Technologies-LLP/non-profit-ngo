import Image from "next/image";
import { FC } from "react";

import { SLICE_END, SLICE_START } from "./constant";
import { HappyFacesProps } from "./types";

export const DeskTopUi: FC<HappyFacesProps> = ({ sections }) => (
  <div className="flex gap-4.5 px-15">
    <div className="flex gap-4.5">
      {sections.slice(SLICE_START, SLICE_END).map(({ images, spaceY, id }) => (
        <div className={spaceY} key={id}>
          {images.map(({ alt, height, src, width }) => (
            <Image alt={alt} height={height} key={src} src={src} width={width} />
          ))}
        </div>
      ))}
    </div>
  </div>
);
