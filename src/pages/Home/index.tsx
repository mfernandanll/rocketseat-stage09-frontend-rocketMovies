import { FiPlus } from "react-icons/fi";
import { Card } from "../../components/Card";
import { Header, SearchInfo } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button, Container, Content, Title } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export interface Tag {
  id: number;
  name: string;
  note_id: number;
  user_id: number;
}

export interface Note {
  id: number;
  title: string;
  description: string;
  rating: number;
  user_id: number;
  tags: Tag[];
  created_at: string;
}

export function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [search, setSearch] = useState<string>("");
  
  const navigate = useNavigate();

  function handleMoviePreview(id: number) {
    navigate(`/moviePreview/${id}`);
  }

  function handleSearch(data: SearchInfo) {
    setSearch(data.query);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/movieTags");
      setTags(response.data);
    }

    fetchTags();
  }, []);
  
  useEffect(() => {
    async function fetchNotes() {
      const response = await api.get(`/movieNotes?search=${search}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search]);

  return (
    <Container>
      <Header handleSearch={handleSearch} />

      <Content>
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
                onClick={() => handleMoviePreview(note.id)}
              />
            ))
          }
        </Section>
      </Content>
      
    </Container>
  );
}
