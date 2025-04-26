import { ElementType, JSX } from "react";
import { classNames } from "../../lib";

import styles from "./Typography.module.css";

type TypographyVariant = "title1" | "title2" | "text1" | "text2" | "text3";
type TypographyColor =
  | "primary"
  | "secondary"
  | "accent"
  | "error"
  | "info"
  | "hint";

type TypographyWeight = "regular" | "medium" | "semibold";
type TypographyAlign = "start" | "center" | "end";

type Props<T extends ElementType> = {
  as?: T;
  variant: TypographyVariant;
  color?: TypographyColor;
  weight?: TypographyWeight;
  align?: TypographyAlign;
};

const Typography = <T extends ElementType = "span">({
  as,
  children,
  className,
  variant,
  align = "start",
  color,
  weight = "regular",
  ...props
}: Props<T> & React.ComponentPropsWithoutRef<T>): JSX.Element => {
  const Component = as || "span";
  return (
    <Component
      className={classNames(
        styles.root,
        styles[variant],
        styles[weight],
        styles[align],
        color && styles[color],
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
};

export { Typography };

export type { TypographyVariant, TypographyColor, TypographyWeight };
