import { InputField } from "../InputField";
import { Brand, Container, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header() {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <InputField placeholder="Pesquisar pelo título" type="text"/>
      
      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
        </div>

        <img src={avatarUrl} alt={user.name} />
      </Profile>

      <Logout onClick={signOut}>sair</Logout>
    </Container>
  );
}
