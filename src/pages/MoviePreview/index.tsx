import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/auth";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Container, Content, Description, Row, SubHeader, Tags } from "./styles";
import { Tag } from "../../components/Tag";
import { CiClock2 } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { ButtonText } from "../../components/ButtonText";
import { Rating } from "../../components/Rating";
import { Note } from "../Home";

export function MoviePreview() {
  const [data, setData] = useState<Note>({} as Note);
  const { user } = useAuth();
  const params = useParams();

  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;

  const navigate = useNavigate();

  const formatDate = (date: string) => format(new Date(date), "dd/MM/yyyy 'às' HH:mm", {
    locale: ptBR,
  })

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

      <Content>
        <SubHeader>
          <ButtonText onClick={handleBack}>
            <FaArrowLeft /> Voltar
          </ButtonText>

          <ButtonText onClick={handleRemove}>Excluir filme</ButtonText>
        </SubHeader>

        {data && (
          <Section>
            <Row>
              <h1>{data.title}</h1>
              <Rating grade={data.rating} isBigSize />
            </Row>

            <Row>
              <img src={avatarUrl} alt={user.name} />
              <span>Por {user.name}</span>
              <CiClock2 />
              <span>
                {data.created_at ? formatDate(data.created_at) : 0 }
              </span>
            </Row>

            {data.tags && (
              <Tags className="tags">
                  {data.tags.map((tag) => (
                    <Tag key={String(tag.id)} title={tag.name} secondaryColor />
                  ))}
              </Tags>
            )}

            <Description>{data.description}</Description>
          </Section>
        )}
      </Content>
    </Container>
  );
}
