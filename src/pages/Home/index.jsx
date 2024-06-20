import { FiPlus } from "react-icons/fi";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Button, Container, Title } from "./styles";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function Home() {
  const [notes, setNotes] = useState([]);
  const [tags, setTags] = useState([]);
  const [tagSelected, setTagSelected] = useState([]);
  const [search, setSearch] = useState("");
  
  const navigate = useNavigate();

  const tagsNames = tags.map(tag => tag.name)

  const sendSearch = (searchData) => {
    setSearch(searchData)
  }

  function handleMoviePreview(id) {
    navigate(`/moviePreview/${id}`);
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
              onClick={() => handleMoviePreview(note.id)}
            />
          ))
        }
      </Section>
    </Container>
  );
}
