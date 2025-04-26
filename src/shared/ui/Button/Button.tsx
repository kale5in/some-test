import React, { ElementType } from "react";
import { Typography, TypographyVariant } from "../Typography/Typography";
import { classNames } from "../../lib";

import styles from "./Button.module.css";
import { Loader } from "../Loader/Loader";

type ButtonSize = "small" | "medium";
type ButtonVariant = "filled" | "outlined" | "default";

type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  size?: ButtonSize;
  variant?: ButtonVariant;
  start?: React.ReactNode;
  end?: React.ReactNode;
  children?: React.ReactNode;
  progress?: boolean;
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  "as" | "size" | "variant" | "start" | "end" | "progress"
>;

const TYPOGRAPHY_VARIANT_BY_SIZE: Record<ButtonSize, TypographyVariant> = {
  small: "text2" as TypographyVariant,
  medium: "text1" as TypographyVariant,
};

const Button = <T extends ElementType = "button">({
  as,
  size = "medium",
  variant = "default",
  start,
  end,
  children,
  className,
  progress = false,
  ...props
}: ButtonProps<T>) => {
  const Component = as || "button";
  return (
    <Component
      as={as || "button"}
      variant={variant}
      className={classNames(
        styles.root,
        styles[variant],
        styles[size],
        className
      )}
      {...props}
    >
      {progress ? (
        <Loader />
      ) : (
        <>
          {start && start}
          {children && (
            <Typography variant={TYPOGRAPHY_VARIANT_BY_SIZE[size]}>
              {children}
            </Typography>
          )}
          {end && end}
        </>
      )}
    </Component>
  );
};

export { Button };
