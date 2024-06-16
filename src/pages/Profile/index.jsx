import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import { Avatar, Container, Form, Head } from "./styles";
import { InputField } from "../../components/InputField";
import { Button } from "../../components/Button";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

import { useState } from "react";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Profile() {
  const { user, updatedProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const [avatar, setAvatar] = useState(avatarUrl);
  const [avatarFile, setAvatarFile] = useState(null);


  async function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    };

    await updatedProfile({ user, avatarFile });
  }

  function handleChangeAvatar(event) {
    const file = event.target.files[0];
    setAvatarFile(file);

    const imagePreview = URL.createObjectURL(file);
    setAvatar(imagePreview);
  }

  return (
    <Container>
      <Head>
        <Link to="/"> <FaArrowLeft/>  Voltar</Link>
      </Head>

      <Form>
        <Avatar>
          <img src={avatar} alt={user.name} />
          <label htmlFor="avatar">
            <FiCamera />

            <input id="avatar" type="file" onChange={handleChangeAvatar}/>
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
