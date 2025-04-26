import { FieldError } from "react-hook-form";
import { Typography } from "../Typography/Typography";
import { FormControl } from "../FormControl/FormControl";

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  label: string;
}

const Input = ({ error, label, ...props }: Props) => {
  return (
    <FormControl label={label} name={props.name} error={error}>
      <Typography
        as="input"
        variant="text2"
        id={props.name}
        aria-invalid={Boolean(error)}
        {...props}
        color="primary"
      />
    </FormControl>
  );
};

export { Input };
