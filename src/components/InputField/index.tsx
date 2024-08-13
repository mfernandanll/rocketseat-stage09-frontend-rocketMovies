import { IconType } from "react-icons";
import { Container } from "./styles";
import { InputHTMLAttributes } from "react";

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement>{
  inputTitle?: string;
  title?: string;
  icon?: IconType;
}

export function InputField({inputTitle, title, icon: Icon, ...rest}: InputFieldProps) {
  return (
    <Container>
      <label htmlFor={inputTitle}>{title}</label>
      {Icon && <Icon size={20} />}
      <input id={inputTitle} {...rest}/>
    </Container>
  )
}