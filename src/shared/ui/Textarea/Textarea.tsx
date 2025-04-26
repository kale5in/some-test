import { FieldError } from "react-hook-form";
import styles from "./Textarea.module.css";
import { classNames } from "../../lib";
import { Typography } from "../Typography/Typography";
import { FormControl } from "../FormControl/FormControl";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: FieldError;
  label: string;
  description?: string;
}

const Textarea = ({
  error,
  className,
  label,
  description,
  ...props
}: Props) => {
  return (
    <FormControl
      label={label}
      name={props.name}
      error={error}
      description={description}
    >
      <Typography
        as="textarea"
        variant="text2"
        id={props.name}
        aria-invalid={Boolean(error)}
        className={classNames(styles.root, className)}
        {...props}
        color="primary"
      />
    </FormControl>
  );
};

export { Textarea };
