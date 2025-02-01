import { FieldElementProps } from "../ContactUs.config";
import { Controller, useFormContext } from "react-hook-form";
import { StyledHelperText, StyledInput, StyledLabel } from "../ContactUs.style";
import AnimatedText from "../../AnimatedText/AnimatedText";

const TextFieldElement = ({
  name,
  label,
  placeholder,
  type = "text",
}: FieldElementProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <StyledLabel>
          {label}
          <StyledInput
            {...field}
            style={{ width: "100%" }}
            placeholder={placeholder}
            type={type}
          />
          {!!error && (
            <StyledHelperText>
              <AnimatedText text={error.message!} once duration={0.02} />
            </StyledHelperText>
          )}
        </StyledLabel>
      )}
    />
  );
};

export default TextFieldElement;
