import { IconType } from "react-icons";
import { Container, Content, ErrorMessage } from "./styles";
import { forwardRef, InputHTMLAttributes, LegacyRef } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement>{
  inputTitle?: string;
  title?: string;
  icon?: IconType;
  errorMessage?: string;
}

export const InputField = forwardRef(
  function InputField(
    {inputTitle, title, icon: Icon, errorMessage, ...rest}: InputFieldProps,
    ref: LegacyRef<HTMLInputElement>
  ) {
    return (
      <Container>
        <Content>
          <label htmlFor={inputTitle}>{title}</label>
          {Icon && <Icon size={20} />}
          <input id={inputTitle} ref={ref} {...rest}/>
        </Content>

        {errorMessage ? (
          <ErrorMessage role="alert">{errorMessage}</ErrorMessage>
        ) : null}
      </Container>
    )
  }
)


