import { FiLock, FiMail, FiUser } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";

import { Background, Container, Form } from "./styles";

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/auth";

const newUser = zod.object({
  name:  zod.string().min(1, 'Informe o nome'),
  email: zod.string().min(1, 'Informe o email').email('E-mail inválido'),
  password: zod.string().min(1, 'Informe a senha'),
})

export type NewUserInfo = zod.infer<typeof newUser>

export function SignUp() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValid }
  } = useForm<NewUserInfo>({
    resolver: zodResolver(newUser),
  })

  const { signUp } = useAuth();

  const navigate = useNavigate();

  async function handleSignUp(data: NewUserInfo) {
    const { name, email, password } = data;
    await signUp(name, email, password, navigate)
    reset();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignUp)}>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Crie sua conta</h2>

        <InputField
          placeholder="Nome"
          type="text"
          icon={FiUser}
          errorMessage={errors.name?.message}
          {...register('name')}
        />

        <InputField
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          errorMessage={errors.email?.message}
          {...register('email')}
        />

        <InputField
          placeholder="Senha"
          type="password"
          icon={FiLock}
          errorMessage={errors.password?.message}
          {...register('password')}
        />

        <Button 
          type="submit"
          isLoading={isSubmitting}
          title="Cadastrar" 
        />

        <Link to="/">
          <FaArrowLeft /> Voltar para o login
        </Link>
      </Form>
      
      <Background />
    </Container>
  );
}
