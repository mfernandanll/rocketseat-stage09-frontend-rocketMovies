import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, Container, Form, Head } from "./styles";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { ChangeEvent, useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { ButtonText } from "../../components/ButtonText";

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { toastOptions } from "../../config/toastConfig";

const userProfile = zod.object({
  name:  zod.string().min(1, 'Informe o nome'),
  email: zod.string().min(1, 'Informe o email').email('E-mail inválido'),
  oldPassword: zod.string().optional(),
  newPassword: zod.string().optional(),
})

export type UserProfileInfo = zod.infer<typeof userProfile>


export function Profile() {
  const { user, updatedProfile } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState<string>(avatarUrl);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<UserProfileInfo>({
    resolver: zodResolver(userProfile),
  })


  const navigate = useNavigate();

  async function handleUpdate(data: UserProfileInfo) {
    if ((data.newPassword && !data.oldPassword) || (!data.newPassword && data.oldPassword)) {
      return toast.warn('Você precisa digitar as duas senhas para atualizar', toastOptions);
    }

    const updated = {
      name: data.name,
      email: data.email,
      password: data.newPassword,
      old_password: data.oldPassword
    };

    const userUpdated = Object.assign(user, updated);

    await updatedProfile( userUpdated, avatarFile);
    reset();
  }

  function handleChangeAvatar(event: ChangeEvent<HTMLInputElement>) {
    const file = event.target.files?.[0]; 
    
    if (file) {
      setAvatarFile(file);
      const imagePreview = URL.createObjectURL(file);
      setAvatar(imagePreview);
    }
  }

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    if(user.name) setValue('name', user.name);
    if(user.email) setValue('email', user.email);
  })

  return (
    <Container>
      <Head>
        <ButtonText onClick={handleBack}>
          <FaArrowLeft/> Voltar
        </ButtonText>
      </Head>

      <Form onSubmit={handleSubmit(handleUpdate)}>
        <Avatar id="avatarInput">
          <img src={avatar} alt={user.name} />
          
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" onChange={handleChangeAvatar}/>
          </label>
        </Avatar>

        <InputField 
          inputTitle="name"
          title="Nome"
          placeholder="Nome" 
          type="text" 
          icon={FiUser} 
          // value={name}
          // onChange={e => setName(e.target.value)}

          errorMessage={errors.name?.message}
          {...register('name')}
        />

        <InputField 
          inputTitle="email"
          title="Email"
          placeholder="E-mail" 
          type="text" 
          icon={FiMail} 
          // value={email}
          // onChange={e => setEmail(e.target.value)}

          errorMessage={errors.email?.message}
          {...register('email')}
        />

        <InputField 
          inputTitle="oldpassword"
          title="Senha"
          placeholder="Senha atual" 
          type="password" 
          icon={FiLock} 
          // onChange={e => setPasswordOld(e.target.value)}

          // errorMessage={errors.oldPassword?.message}
          {...register('oldPassword')}
        />

        <InputField 
          inputTitle="password"
          title="Nova senha"
          placeholder="Nova senha" 
          type="password" 
          icon={FiLock} 
          // onChange={e => setPasswordNew(e.target.value)}

          // errorMessage={errors.newPassword?.message}
          {...register('newPassword')}
        />

        <Button type="submit" title="Salvar" isLoading={isSubmitting}/>
      </Form>
    </Container>
  );
}
