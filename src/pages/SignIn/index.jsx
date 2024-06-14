import { FiLock, FiMail } from "react-icons/fi";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { Background, Container, Form } from "./styles";
import { Link } from "react-router-dom";

import { useAuth } from '../../hooks/auth';
import { useState } from "react";

export function SignIn() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <InputField 
          placeholder="E-mail" 
          type="text" 
          icon={FiMail} 
          onChange={e => setEmail(e.target.value)}
        />

        <InputField 
          placeholder="Senha atual" 
          type="password" 
          icon={FiLock} 
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />
        <Link to="register" >Criar Conta</Link>
      </Form>
      <Background/>
    </Container>
  )
}