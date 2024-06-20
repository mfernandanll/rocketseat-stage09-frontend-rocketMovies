import { FaArrowLeft } from "react-icons/fa6";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { InputField } from "../../components/InputField";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { Container, Content, Fieldset, Marks, SubHeader } from "./styles";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function CreateMovie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const navigate = useNavigate();

  function handleAddTag() {
    setTags((prevState) => [...prevState, newTag]);
    setNewTag("");
  }

  function handleBack() {
    navigate(-1);
  }

  function handleRemoveTag(deleted) {
    setTags((prevState) => prevState.filter((tag) => tag !== deleted));
  }

  async function handleNewMovieNote() {
    if (!title) {
      return alert("Digite o título da nota");
    }

    if (!rating) {
      return alert("Dê uma nota para o filme");
    }

    if (newTag) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    await api.post("/movieNotes", {
      title,
      description,
      tags,
      rating,
    });

    alert("Nota criada com sucesso!");
    navigate("/");
  }

  function handleDiscardMovie() {
    const userConfirmation = confirm(
      "Todas as alterações serão perdidas... Tem certeza que deseja descartar as alterações?"
    );

    if (userConfirmation) {
      navigate(-1);
    }
  }

  return (
    <Container>
      <Header />

      <Content>
        <SubHeader>
          <ButtonText onClick={handleBack}>
            <FaArrowLeft /> Voltar
          </ButtonText>
        </SubHeader>

        <Section>
          <form>
            <Fieldset>
              <legend>Novo filme</legend>

              <div className="col-2">
                <InputField
                  type="text"
                  inputTitle="title"
                  title="Título"
                  placeholder="Título"
                  onChange={(e) => setTitle(e.target.value)}
                />

                <InputField
                  type="text"
                  inputTitle="note"
                  title="Nota"
                  placeholder="Sua nota (de 0 a 5)"
                  onChange={(e) => setRating(e.target.value)}
                />
              </div>

              <TextArea
                placeholder="Descrição"
                onChange={(e) => setDescription(e.target.value)}
              />

              <Marks>
                <h2>Marcadores</h2>

                <div className="tags">
                  {tags.map((tag, index) => (
                    <NoteItem
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))}

                  <NoteItem
                    isNew
                    placeholder="Novo marcador"
                    onChange={(e) => setNewTag(e.target.value)}
                    value={newTag}
                    onClick={handleAddTag}
                  />
                </div>
              </Marks>

              <div className="col-2">
                <Button
                  title="Descartar alterações"
                  iSactive={false}
                  onClick={handleDiscardMovie}
                />

                <Button
                  title="Salvar alterações"
                  onClick={handleNewMovieNote}
                />
              </div>
            </Fieldset>
          </form>
        </Section>
      </Content>
    </Container>
  );
}
