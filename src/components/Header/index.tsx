import { Brand, Container, Profile, Logout, Search } from "./styles";
import { useAuth } from '../../hooks/auth';
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { ReactNode } from "react";

interface HeaderProps {
  children?: ReactNode
}

export function Header({ children }: HeaderProps) {
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

      <Search>{children}</Search>
      
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
