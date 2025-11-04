import { ReactNode } from "react";

import { LinkButtonVariantEnum } from "./enum";

type Variant =
  | LinkButtonVariantEnum.PRIMARY_BLUE
  | LinkButtonVariantEnum.PRIMARY_YELLOW
  | LinkButtonVariantEnum.OUTLINE_BLUE;

export interface LinkButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
  isNormalLink?: boolean;
  onClick?: () => void;
  variant?: Variant;
}
