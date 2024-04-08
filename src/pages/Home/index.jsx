import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Container, Content } from "./styles";

export function Home() {
  return (
    <Container>
      <Header />
      <Content>
        <Section title="Meus filmes" buttonExist>
          <Card
            data={{
              title: "Interestellar",
              description:
                "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.",
              tags: [
                { id: "1", name: "Ficção Científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          />
           <Card
            data={{
              title: "Interestellar",
              description:
                "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.",
              tags: [
                { id: "1", name: "Ficção Científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          />
           <Card
            data={{
              title: "Interestellar",
              description:
                "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.",
              tags: [
                { id: "1", name: "Ficção Científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          />
           <Card
            data={{
              title: "Interestellar",
              description:
                "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.",
              tags: [
                { id: "1", name: "Ficção Científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          />
           <Card
            data={{
              title: "Interestellar",
              description:
                "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.",
              tags: [
                { id: "1", name: "Ficção Científica" },
                { id: "2", name: "Drama" },
                { id: "3", name: "Família" },
              ],
            }}
          />
        </Section>
      </Content>
    </Container>
  );
}
