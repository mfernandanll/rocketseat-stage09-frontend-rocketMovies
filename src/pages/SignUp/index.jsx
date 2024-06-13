import { useState } from "react";
import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";

import { Background, Container, Form } from "./styles";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api
      .post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });
  }

  return (
    <Container>
      <Form>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <InputField 
          placeholder="Nome" 
          type="text" 
          icon={FiUser} 
          onChange={e => setName(e.target.value)}
        />
        <InputField 
          placeholder="E-mail" 
          type="text" 
          icon={FiMail} 
          onChange={e => setEmail(e.target.value)}
        />
        <InputField 
          placeholder="Senha" 
          type="password" 
          icon={FiLock} 
          onChange={e => setPassword(e.target.value)}
        />

        <Button title="Cadastrar" onClick={handleSignUp}/>
        
        <Link to="/">
          <FaArrowLeft /> Voltar para o login
        </Link>
      </Form>
      <Background />
    </Container>
  );
}
