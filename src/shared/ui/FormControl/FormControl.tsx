import { FieldError } from "react-hook-form";
import { Typography } from "../Typography/Typography";
import styles from "./FormControl.module.css";

type Props = {
  label: string;
  name?: string;
  error?: FieldError;
  children: React.ReactNode;
  description?: string;
};

const FormControl = ({ label, name, children, error, description }: Props) => {
  return (
    <div className={styles.root}>
      {label && (
        <Typography
          as="label"
          variant="text3"
          color="accent"
          htmlFor={name}
          className={styles.label}
        >
          {label}
        </Typography>
      )}
      {children}
      {description && (
        <Typography variant="text3" color={error ? "error" : "info"}>
          {description}
        </Typography>
      )}
    </div>
  );
};

export { FormControl };
