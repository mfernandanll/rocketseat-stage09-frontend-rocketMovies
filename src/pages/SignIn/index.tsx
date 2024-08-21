import { FiLock, FiMail } from "react-icons/fi";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { Background, Container, Form } from "./styles";
import { Link } from "react-router-dom";

import { useAuth } from '../../hooks/auth';

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";

const user = zod.object({
  email: zod.string().min(1, 'Informe o email').email('E-mail inválido'),
  password: zod.string().min(1, 'Informe a senha'),
})

export type UserInfo = zod.infer<typeof user>

export function SignIn() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting }
  } = useForm<UserInfo>({
    resolver: zodResolver(user),
  })

  const { signIn } = useAuth();

  function handleSignIn(data: UserInfo) {
    const { email, password } = data;
    signIn( email, password );
    reset();
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(handleSignIn)}>
        <h1>RocketMovies</h1>
        <p>Aplicação para acompanhar tudo que assistir.</p>
        <h2>Faça seu login</h2>

        <InputField 
          placeholder="E-mail" 
          type="text" 
          icon={FiMail} 
          errorMessage={errors.email?.message}
          {...register('email')}
        />

        <InputField 
          placeholder="Senha atual" 
          type="password" 
          icon={FiLock} 
          errorMessage={errors.password?.message}
          {...register('password')}
        />

        <Button 
          title="Entrar" 
          type="submit"
          loading={isSubmitting}
        />

        <Link to="register" >Criar Conta</Link>
      </Form>
      
      <Background/>
    </Container>
  )
}