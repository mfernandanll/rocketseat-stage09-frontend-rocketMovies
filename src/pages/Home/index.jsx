import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Container } from "./styles";

export function Home() {
  return (
    <Container>
      <Header></Header>
      <Section title="Meus filmes" buttonExist></Section>
    </Container>
  )
}