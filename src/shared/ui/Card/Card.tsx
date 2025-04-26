import { classNames } from "../../lib";
import { Typography } from "../Typography/Typography";
import styles from "./Card.module.css";

type Props = {
  type?: "small" | "full";
  text: string;
  loading?: boolean;
  actions?: {
    start?: React.ReactNode;
    end?: React.ReactNode;
  };
  className?: string;
};

const Card = ({ actions, text, loading, type = "small", className }: Props) => {
  const paragraphs = text.split("\n").filter(Boolean);

  const renderActions = () => {
    if (!actions || (!actions.start && !actions.end)) return;

    return (
      <div className={styles.actions}>
        {actions.start && <div className={styles.start}>{actions.start}</div>}
        {actions.end && <div className={styles.end}>{actions.end}</div>}
      </div>
    );
  };

  return (
    <div className={classNames(styles.root, type && styles[type], className)}>
      {loading ? (
        <div className={styles.bounce} />
      ) : (
        <>
          <div className={styles.container}>
            {paragraphs.map((paragraph, index) => (
              <Typography
                as="p"
                key={index}
                variant="text1"
                color="hint"
                className={classNames(styles.text, styles.paragraph)}
              >
                {paragraph}
              </Typography>
            ))}
          </div>
          {renderActions()}
        </>
      )}
    </div>
  );
};

export { Card };

export type { Props as CardPropsType };
