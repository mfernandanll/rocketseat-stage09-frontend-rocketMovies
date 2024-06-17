import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Container, Description, Row, Title } from "./styles";
import { Tag } from "../../components/Tag";
import { CiClock2 } from "react-icons/ci";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IoIosStar } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa6";
import { format } from 'date-fns';

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { ptBR } from "date-fns/locale";
import { ButtonText } from "../../components/ButtonText";

export function MoviePreview() {
  const [data, setData] = useState(null);
  const { user } = useAuth();
  const params = useParams();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;
  
  const navigate = useNavigate();

  async function handleRemove() {
    const confirm = window.confirm("Deseja realmente remover a nota?");

    if (confirm) {
      await api.delete(`/movieNotes/${params.id}`);
      navigate(-1);
    }
  }

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    async function fetchNote() {
      const response = await api.get(`/movieNotes/${params.id}`);
      setData(response.data);
    }

    fetchNote();
  }, []);

  return (
    <Container>
      <Header />
      <Title>
        <ButtonText onClick={handleBack}>
          <FaArrowLeft/> Voltar
        </ButtonText>
        <ButtonText onClick={handleRemove}>
          Excluir filme
        </ButtonText>
      </Title>
      {data && (
        <Section>
          <Row>
            <h1>{data.title}</h1>
            {
              data.rating &&
              [...Array(data.rating)].map((_, i) => <IoIosStar key={i} />)
            }
          </Row>
          <Row>
            <img src={avatarUrl} alt={user.name} />
            <span>Por {user.name}</span>
            <CiClock2 />
            <span>{format(data.created_at, "dd/MM/yyyy 'às' HH:mm", { locale: ptBR})}</span>
          </Row>
          {
              data.tags &&
              <Row>
                <div className="tags">
                  {
                    data.tags.map(tag => (
                      <Tag key={String(tag.id)} title={tag.name} secondaryColor />
                    ))
                  }
                </div>
              </Row>
          }
          
          <Description>
            {data.description}
          </Description>
        </Section>
      )}
    </Container>
  );
}
