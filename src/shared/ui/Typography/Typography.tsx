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

type Props<T extends ElementType> = {
  as?: T;
  variant: TypographyVariant;
  color?: TypographyColor;
  weigh?: TypographyWeight;
  align?: "start" | "center" | "end";
} & Omit<
  React.ComponentPropsWithoutRef<T>,
  "color" | "weigh" | "variant" | "as" | "align"
>;

const Typography = <T extends ElementType = "span">({
  as,
  children,
  className,
  variant,
  align,
  color,
  weigh = "regular",
  ...props
}: Props<T>): JSX.Element => {
  const Component = as || "span";
  return (
    <Component
      className={classNames(
        styles.root,
        variant && styles[variant],
        color && styles[color],
        weigh && styles[weigh],
        align && styles[align],
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
