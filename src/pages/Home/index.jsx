import { FiPlus } from "react-icons/fi";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button, Container, Title } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Home() {
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [ search, setSearch] = useState("");

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/movieTags");
      setTags(response.data);
    }

    fetchTags();
  }, []);

  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movieNotes?title=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  const sendSearch = (searchData) => {
    setSearch(searchData)
  }

  return (
    <Container>
      <Header sendSearch={sendSearch}/>
      <Title>
        <h2>Meus Filmes</h2>
        <Button to="/createMovie">
          <FiPlus /> Adicionar filme
        </Button>
      </Title>

      <Section>
        {
          notes.map(note => (
            <Card
              key={String(note.id)}
              data={note}
            />
          ))
        }
      </Section>
    </Container>
  );
}
