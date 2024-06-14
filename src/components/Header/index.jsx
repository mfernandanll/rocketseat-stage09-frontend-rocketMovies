import { InputField } from "../InputField";
import { Brand, Container, Profile, Logout } from "./styles";
import { useAuth } from '../../hooks/auth';

export function Header() {
  const { signOut, user } = useAuth();

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

        <img src="https://github.com/diego3g.png" alt="Foto do usuário" />
      </Profile>

      <Logout onClick={signOut}>sair</Logout>
    </Container>
  );
}
