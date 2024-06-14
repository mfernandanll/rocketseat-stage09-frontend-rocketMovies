import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, Container, Form, Head } from "./styles";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";

export function Profile() {
  const { user, updatedProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    };

    await updatedProfile({ user });
  }

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

        <InputField 
          placeholder="Nome" 
          type="text" 
          icon={FiUser} 
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <InputField 
          placeholder="E-mail" 
          type="text" 
          icon={FiMail} 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <InputField 
          placeholder="Senha atual" 
          type="password" 
          icon={FiLock} 
          onChange={e => setPasswordOld(e.target.value)}
        />

        <InputField 
          placeholder="Nova atual" 
          type="password" 
          icon={FiLock} 
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar"  onClick={handleUpdate}/>
      </Form>
    </Container>
  );
}
