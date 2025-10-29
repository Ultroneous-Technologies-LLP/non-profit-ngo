import { FC } from "react";
import Link from "next/link";
import Image from "next/image";

import { Container, SupportFundraiserProps, UpRightArrow } from "@/components";

export const SupportFundraiser: FC<SupportFundraiserProps> = ({
  title,
  description,
  fundraisers,
  viewMore,
  backgroundImage,
}) => {
  return (
    <Container
      backgroundClassName="relative overflow-hidden"
      className="pb-25 xl:pb-40 px-4 md:px-6 xl:px-15"
    >
      <div className="z-10 md:pt-3 xl:pt-11">
        <h2 className="font-segoe-regular font-semibold text-[32px]/10 xl:text-6xl/23.5 text-primary-blue text-center pb-2 xl:pb-2.5">
          <span>{title}</span>
        </h2>
        <p className="font-segoe-regular text-xs/4.5 xl:text-base/6 text-center pb-8 xl:pb-15 max-w-205 w-full mx-auto">
          <span>{description}</span>
        </p>
      </div>
      <div className="text-center flex flex-col md:flex-row gap-8 justify-between">
        {fundraisers.map(
          ({ alt, donateText, src, link, subtitle, title, id }) => (
            <div className="md:max-w-75 xl:max-w-99 mx-auto w-full" key={id}>
              <Image
                src={src}
                alt={alt}
                width={397}
                height={305}
                className="w-81.5 h-60 md:w-75.5 md:h-45 xl:w-99 xl:h-76 mx-auto rounded-3xl xl:rounded-[20px]"
              />
              <h3 className="font-segoe-regular font-semibold text-base/6 xl:text-2xl/8 text-primary-blue pb-1 xl:pb-2.5 pt-4 xl:pt-5 md:max-w-81.5 xl:max-w-fit w-full mx-auto">
                <span>{title}</span>
              </h3>
              <h4 className="font-segoe-regular font-semibold text-xs/4 xl:text-2xl/8 text-[#8999AA] pb-4 xl:pb-5">
                <span>{subtitle}</span>
              </h4>
              <Link
                href={link}
                className="py-2.5 px-6.5 xl:px-5.5 border font-segoe-regular font-semibold inline-block rounded-full text-sm/5 xl:text-lg/6.5 bg-primary-yellow text-primary-blue border-transparent
              hover:bg-transparent hover:text-primary-blue hover:border-primary-blue duration-500 transition-colors ease-in-out"
              >
                {donateText}
              </Link>
            </div>
          )
        )}
      </div>
      <div className="z-10 flex justify-center mt-8 xl:mt-15">
        <Link
          href={viewMore.link}
          className="flex justify-center gap-3.5 items-end md:items-center bg-primary-blue w-full md:w-fit py-2.5 px-8.5 border font-segoe-regular font-semibold rounded-full text-sm/5 xl:text-lg/6 text-primary-yellow border-transparent
                  hover:bg-transparent hover:text-primary-blue hover:border-primary-blue duration-500 transition-colors ease-in-out group"
        >
          <span>{viewMore.label}</span>
          <UpRightArrow className="text-primary-yellow group-hover:text-primary-blue duration-500 transition-colors ease-in-out" />
        </Link>
      </div>
      <Image
        src={backgroundImage.src}
        alt={backgroundImage.alt}
        fill
        className="absolute xl:!w-[1440px] xl:!h-[374px] z-0 !top-12 xl:!top-2.5 xl:!left-11"
      />
    </Container>
  );
};
