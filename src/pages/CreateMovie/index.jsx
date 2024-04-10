import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { InputField } from "../../components/InputField";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { Container, Fieldset, Marks, Title } from "./styles";

export function CreateMovie() {
  return (
    <Container>
      <Header/>
      <Title>
        <ButtonText title="Voltar"/>
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
                <NoteItem value="react" />
                <NoteItem isNew placeholder="Novo marcador" />
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