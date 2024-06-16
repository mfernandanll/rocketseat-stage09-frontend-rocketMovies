import { FaArrowLeft } from "react-icons/fa6";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { InputField } from "../../components/InputField";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { Container, Fieldset, Marks, Title } from "./styles";
import { Link } from "react-router-dom";
import { useState } from "react";

export function CreateMovie() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleAddTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted));
  }

  return (
    <Container>
      <Header/>
      <Title>
        <Link to="/"> <FaArrowLeft/> Voltar</Link>
      </Title>
      <Section>
        <form>
          <Fieldset>
            <legend>Novo Filme</legend>

            <div className="col-2">
              <InputField type="text" inputTitle="title" title="Título" placeholder="Título"/>
              <InputField type="text" inputTitle="note" title="Nota" placeholder="Sua nota (de 0 a 5)"/>
            </div>

            <TextArea placeholder="Observações" />


            <Marks>
              <h2>Marcadores</h2>

              <div className="tags">
                {
                  tags.map((tag, index) => (
                    <NoteItem
                      key={String(index)}
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))
                }

                <NoteItem
                  isNew
                  placeholder="Novo marcador"
                  onChange={e => setNewTag(e.target.value)}
                  value={newTag}
                  onClick={handleAddTag}
                />
                
              </div>
            </Marks>


            <div className="col-2">
              <Button title="Excluir filme" iSactive={false}/>
              <Button title="Salvar alterações"/>
            </div>
          </Fieldset>
        </form>
      </Section>
    </Container>
  )
}