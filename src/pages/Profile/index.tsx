import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, Container, Form, Head } from "./styles";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import { ChangeEvent, useState } from "react";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { ButtonText } from "../../components/ButtonText";

export function Profile() {
  const { user, updatedProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState<string>(avatarUrl);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);

  const navigate = useNavigate();

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    };

    const userUpdated = Object.assign(user, updated);

    await updatedProfile( userUpdated, avatarFile);
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

  return (
    <Container>
      <Head>
        <ButtonText onClick={handleBack}>
          <FaArrowLeft/> Voltar
        </ButtonText>
      </Head>

      <Form>
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
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <InputField 
          inputTitle="email"
          title="Email"
          placeholder="E-mail" 
          type="text" 
          icon={FiMail} 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <InputField 
          inputTitle="oldpassword"
          title="Senha"
          placeholder="Senha atual" 
          type="password" 
          icon={FiLock} 
          onChange={e => setPasswordOld(e.target.value)}
        />

        <InputField 
          inputTitle="password"
          title="Nova senha"
          placeholder="Nova senha" 
          type="password" 
          icon={FiLock} 
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate}/>
      </Form>
    </Container>
  );
}
