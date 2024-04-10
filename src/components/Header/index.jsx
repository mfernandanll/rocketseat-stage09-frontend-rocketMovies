import { InputField } from "../InputField";
import { Brand, Container, Profile } from "./styles";

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>
      <InputField placeholder="Pesquisar pelo título" type="text"/>
      <Profile>
        <div>
          <strong>Rodrigo Gonçalves</strong>
          <span>sair</span>
        </div>
        <img src="https://github.com/diego3g.png" alt="Foto do usuário" />
        
      </Profile>
    </Container>
  );
}
