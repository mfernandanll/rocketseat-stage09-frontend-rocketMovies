import { FiLock, FiMail } from "react-icons/fi";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { Background, Container, Form } from "./styles";
import { ButtonText } from "../../components/ButtonText";

export function SignIn() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <InputField placeholder="E-mail" type="text" icon={FiMail} />

        <InputField placeholder="Senha atual" type="password" icon={FiLock} />

        <Button title="Entrar" />
        <ButtonText title="Criar Conta"/>
      </Form>
      <Background/>
    </Container>
  )
}