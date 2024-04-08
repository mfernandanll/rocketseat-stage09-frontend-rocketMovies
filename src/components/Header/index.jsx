import { Brand, Container, Profile, Search } from "./styles";

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>
      <Search placeholder="Pesquisar pelo título"></Search>
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
