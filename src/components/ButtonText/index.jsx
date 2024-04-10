import { Container } from "./styles";
import { FaArrowLeft } from "react-icons/fa6";

export function ButtonText({title}) {
  return (
    <Container type="button">
      <FaArrowLeft />
      {title}
    </Container>
  )
}