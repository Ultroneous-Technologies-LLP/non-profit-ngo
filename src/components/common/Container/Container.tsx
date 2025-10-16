import clsx from "clsx";
import { ElementType, forwardRef } from "react";

import { ContainerProps, SupportedTags } from "./types";

const combinedClass = "mx-auto w-full max-w-367";

export const Container = forwardRef(
  <T extends SupportedTags = "div">(
    { as, backgroundClassName = "", className = "", children, ...rest }: ContainerProps<T>,
    ref: React.Ref<T extends "div" ? HTMLDivElement : HTMLElement>
  ) => {
    const Component = (as || "section") as ElementType;

    if (backgroundClassName) {
      return (
        <Component className={clsx(backgroundClassName)} ref={ref} {...rest}>
          <div className={clsx(combinedClass, className)}>{children}</div>
        </Component>
      );
    }

    return (
      <Component className={clsx(combinedClass, className)} ref={ref} {...rest}>
        {children}
      </Component>
    );
  }
);

Container.displayName = "Container";
