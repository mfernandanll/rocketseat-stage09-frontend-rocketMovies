import { Button, Container } from "./styles";
import { FiPlus } from "react-icons/fi";

export function Section({ title, children, buttonExist = false }) {
  return (
    <Container>
      <div className="header">
        <h2>{title}</h2>
        {children}
        {buttonExist && <Button><FiPlus /> Adicionar filme</Button>}
      </div>
    </Container>
  );
}
