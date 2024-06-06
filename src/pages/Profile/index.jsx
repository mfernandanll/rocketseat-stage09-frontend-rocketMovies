import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, Container, Form, Head } from "./styles";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

export function Profile() {
  return (
    <Container>
      <Head>
        <Link to="/"> <FaArrowLeft/>  Voltar</Link>
      </Head>

      <Form>
        <Avatar>
          <img src="https://github.com/diego3g.png" alt="Foto do usuário" />
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" />
          </label>
        </Avatar>

        <InputField placeholder="Nome" type="text" icon={FiUser} />

        <InputField placeholder="E-mail" type="text" icon={FiMail} />

        <InputField placeholder="Senha atual" type="password" icon={FiLock} />

        <InputField placeholder="Nova atual" type="password" icon={FiLock} />

        <Button title="Salvar" />
      </Form>
    </Container>
  );
}
