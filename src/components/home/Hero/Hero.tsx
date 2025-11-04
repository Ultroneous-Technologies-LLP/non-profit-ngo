import { FC } from "react";

import {
  Container,
  LinkButton,
  NextImageWithFallback,
  Title,
  LinkButtonVariantEnum,
} from "@/components";

import { HeroProps } from "./types";

export const Hero: FC<HeroProps> = ({ title, description, event, heroImage, backgroundImage }) => (
  <Container className="relative flex flex-col justify-between gap-6 overflow-hidden px-4 pb-25 md:flex-row md:px-6 md:pb-14 xl:gap-5 xl:px-15 xl:pt-30.5 xl:pb-40">
    <div className="w-full md:max-w-91.5 xl:max-w-165">
      <Title isMainTitle={true} text={title} />
      <p className="font-segoe-regular w-full max-w-150 pb-6 text-sm/5 xl:text-base/6">
        <span>{description}</span>
      </p>
      <div className="rounded-40px mx-auto flex w-full flex-col gap-4 bg-white/25 p-4 md:mr-auto md:ml-0 md:w-fit md:flex-row xl:gap-6.5 xl:px-5 xl:py-5.5">
        <div className="relative w-full md:w-fit">
          <NextImageWithFallback
            alt={event.image.alt}
            className="rounded-20px h-35 w-full object-cover xl:h-40.5"
            height={163}
            src={event.image.src}
            width={159}
          />
          <NextImageWithFallback
            alt={event.playButton.alt}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            height={30}
            src={event.playButton.src}
            width={30}
          />
        </div>
        <div className="w-full md:max-w-44 xl:max-w-75">
          <p className="font-segoe-regular pb-2 text-base/6 font-semibold xl:pb-4 xl:text-2xl/6.5">
            <span>{event.title}</span>
          </p>
          <p className="font-segoe-regular pb-2 text-sm/5 xl:pb-4 xl:text-base/6">
            <span>{event.description}</span>
          </p>
          <LinkButton
            className="rounded-40px px-8.5 py-2.5 xl:px-12"
            href={event.button.href}
            variant={LinkButtonVariantEnum.PRIMARY_YELLOW}
          >
            {event.button.label}
          </LinkButton>
        </div>
      </div>
    </div>
    <div className="hidden w-full md:block md:max-w-70.5 lg:max-w-170">
      <NextImageWithFallback alt={heroImage.alt} height={669} src={heroImage.src} width={686} />
    </div>
    <NextImageWithFallback
      alt={backgroundImage.alt}
      className="absolute top-0 left-0 z-0 h-138.5 w-232! xl:top-5 xl:left-11 xl:h-102! xl:w-367!"
      fill
      src={backgroundImage.src}
    />
  </Container>
);
