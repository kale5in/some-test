import { classNames } from "../../lib";
import { Typography } from "../Typography/Typography";
import CheckSvg from "../../icons/check-full-filled.svg?react";
import styles from "./Progress.module.css";

type Props = {
  total: number;
  current: number;
  label: React.ReactNode;
  className?: string;
  rootOrientation?: "vertical" | "horizontal";
  indicator?: "line" | "dot";
};

const Progress = ({
  total,
  current,
  label,
  className,
  rootOrientation = "horizontal",
  indicator = "dot",
}: Props) => {
  return (
    <div
      className={classNames(styles.root, styles[rootOrientation], className)}
    >
      {label && (
        <Typography variant="text1" color="hint" className={styles.label}>
          {label}
        </Typography>
      )}
      {total !== current && (
        <div className={styles.indicators}>
          {Array.from({ length: total }, (_, index) => (
            <span
              key={index}
              className={classNames(
                styles.indicator,
                styles[indicator],
                index < current && styles.active
              )}
            />
          ))}
        </div>
      )}
      {total === current && <CheckSvg />}
    </div>
  );
};

export { Progress };
