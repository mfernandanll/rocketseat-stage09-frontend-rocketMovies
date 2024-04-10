import { Container } from "./styles";
// import { FaArrowLeft } from "react-icons/fa6";

export function ButtonText({title, icon: Icon,}) {
  return (
    <Container type="button">
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}