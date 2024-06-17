import { InputField } from "../InputField";
import { Brand, Container, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";

export function Header({sendSearch}) {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <InputField 
        placeholder="Pesquisar pelo título" 
        type="text"
        onChange={(e) => sendSearch(e.target.value)}
      />
      
      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
        </div>

        <img src={avatarUrl} alt={user.name} />
      </Profile>

      <Logout onClick={handleSignOut}>sair</Logout>
    </Container>
  );
}
