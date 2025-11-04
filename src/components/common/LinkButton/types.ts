import { ReactNode } from "react";

import { LinkButtonEnum } from "./enum";

type Variant =
  | LinkButtonEnum.PRIMARY_BLUE
  | LinkButtonEnum.PRIMARY_YELLOW
  | LinkButtonEnum.OUTLINE_BLUE;

export interface LinkButtonProps {
  children: ReactNode;
  href: string;
  className?: string;
  isNormalLink?: boolean;
  onClick?: () => void;
  variant?: Variant;
}
