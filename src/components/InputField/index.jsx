import { Container } from "./styles";

export function InputField({inputTitle, title, icon: Icon, ...rest}) {
  return (
    <Container>
      <label htmlFor={inputTitle}>{title}</label>
      {Icon && <Icon size={20} />}
      <input id={inputTitle} {...rest}/>
    </Container>
  )
}