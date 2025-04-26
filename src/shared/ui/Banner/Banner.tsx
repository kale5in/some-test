import { Typography } from "../Typography/Typography";
import styles from "./Banner.module.css";

type Props = {
  title: string;
  description: string;
  action: React.ReactNode;
  bottom?: React.ReactNode;
};

const Banner = ({ title, description, action, bottom }: Props) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <Typography as="h1" variant="title2" weight="semibold" color="primary">
          {title}
        </Typography>
        <Typography variant="text1" color="hint" align="center">
          {description}
        </Typography>
        {action && action}
      </div>
      {bottom && <div className={styles.bottom}>{bottom}</div>}
    </div>
  );
};

export { Banner };
