import { FiPlus } from "react-icons/fi";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button, Container, Content, Title } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";
import { InputField } from "../../components/InputField";

export interface Tag {
  id: number;
  name: string;
  note_id: number;
  user_id: number;
}

interface Note {
  id: number;
  title: string;
  description: string;
  rating: number;
  user_id: number;
}

export function Home() {
  const [notes, setNotes] = useState<Note[]>([]);
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagSelected, setTagSelected] = useState('');
  const [search, setSearch] = useState("");
  
  const navigate = useNavigate();

  const tagsNames = tags.map(tag => tag.name)

  function handleMoviePreview(id: number) {
    navigate(`/moviePreview/${id}`);
  }

  useEffect(() => {
    async function fetchTags() {
      const response = await api.get("/movieTags");
      console.log(response.data);
      
      setTags(response.data);
    }

    fetchTags();
  }, []);
  
  useEffect(() => {
    async function fetchNotes() {
      if(tagsNames.includes(search)) {
        setTagSelected(search)
      } else {
        setTagSelected("")
      }
      const response = await api.get(`/movieNotes?title=${tagSelected ? "" : search}&tags=${tagSelected}`);
      setNotes(response.data);
    }

    fetchNotes();
  }, [search, tagSelected]);

  return (
    <Container>
      <Header>
        <InputField 
          placeholder="Pesquisar pelo título" 
          type="text"
          onChange={(e) => setSearch(e.target.value)}
        />
      </Header>

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
