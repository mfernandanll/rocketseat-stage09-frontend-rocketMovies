import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { Background, Container, Form } from "./styles";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function SignUp() {
  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <InputField placeholder="Nome" type="text" icon={FiUser} />
        <InputField placeholder="E-mail" type="text" icon={FiMail} />
        <InputField placeholder="Senha" type="password" icon={FiLock} />

        <Button title="Cadastrar" />
        <Link to="/">
          <FaArrowLeft /> Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
