import { TextAreaElementProps } from "../ContactUs.config";
import { Controller, useFormContext } from "react-hook-form";
import { StyledLabel, StyledTextarea } from "../COntactUs.style";

const TextAreaElement = ({
  name,
  label,
  placeholder,
  rows = 5,
}: TextAreaElementProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <StyledLabel>
          {label}
          <StyledTextarea
            {...field}
            style={{ width: "100%", resize: "vertical" }}
            placeholder={placeholder}
            rows={rows}
          />
        </StyledLabel>
      )}
    />
  );
};

export default TextAreaElement;
