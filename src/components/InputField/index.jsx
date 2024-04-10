import { Container } from "./styles";

export function InputField({inputTitle, title, ...rest}) {
  return (
    <Container>
      <label htmlFor={inputTitle}>{title}</label>
      <input id={inputTitle} {...rest}/>
    </Container>
  )
}