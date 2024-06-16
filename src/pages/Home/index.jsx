import { FiPlus } from "react-icons/fi";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button, Container, Title } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/movieTags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  return (
    <Container>
      <Header />
      <Title>
        <h2>Meus Filmes</h2>
        <Button to="/createMovie">
          <FiPlus /> Adicionar filme
        </Button>
      </Title>

      <Section>
        <Card
          data={{
            title: "Interestellar",
            description:
              "Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.",
            tags
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
    </Container>
  );
}
