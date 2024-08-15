import { FaArrowLeft } from "react-icons/fa6";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { InputField } from "../../components/InputField";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { TextArea } from "../../components/TextArea";
import { Container, Content, ErrorMessage, Fieldset, Marks, SubHeader } from "./styles";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useFieldArray, useForm } from "react-hook-form";

const newNote = zod.object({
  title: zod.string().min(1, 'Informe o título do filme'),
  description: zod.string().min(1, 'Informe a descrição do filme'),
  rating: zod.number({ invalid_type_error: 'Informe a nota do filme' })
    .min(0, 'Dê uma nota para o filme')
    .max(5, 'A nota máxima é 5')
    .nonnegative('A nota não pode ser negativa'),
  tags: zod.array(zod.object({
    value: zod.string()
  })).nonempty('Adicione pelo menos uma tag'),
  newTag: zod.string().optional()
})

export type NoteInfo = zod.infer<typeof newNote>

export function CreateMovie() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors }
  } = useForm<NoteInfo>({
    resolver: zodResolver(newNote),
    defaultValues: {
      tags: [],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tags',
  });

  const navigate = useNavigate();

  function handleAddTag() {
    const newTagValue = watch('newTag');

    if (newTagValue) {
      append({ value: newTagValue });
      setValue('newTag', '');
    }
  }

  function handleRemoveTag(index: number) {
    remove(index)
  }

  function handleBack() {
    navigate(-1);
  }

  async function handleNewMovieNote(data: NoteInfo) {
    const { title, description, rating, tags } = data;

    if (watch('newTag')) {
      return alert(
        "Você deixou uma tag no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    const formattedTags = tags.map((tag) => tag.value)

    await api.post("/movieNotes", {
      title,
      description,
      tags: formattedTags,
      rating,
    }).then(() => {
      alert("Nota criada com sucesso!");
      reset();
      navigate("/");
    })
      .catch((error) => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar a nota.");
        }
      });
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
          <form id="note" onSubmit={handleSubmit(handleNewMovieNote)}>
            <Fieldset>
              <legend>Novo filme</legend>

              <div className="col-2">
                <InputField
                  type="text"
                  inputTitle="title"
                  title="Título"
                  placeholder="Título"
                  errorMessage={errors.title?.message}
                  {...register('title')}
                />

                <InputField
                  type="number"
                  inputTitle="note"
                  title="Nota"
                  placeholder="Sua nota (de 0 a 5)"
                  errorMessage={errors.rating?.message}
                  {...register('rating', { valueAsNumber: true })}
                />
              </div>

              <TextArea
                placeholder="Descrição"
                errorMessage={errors.description?.message}
                {...register('description')}
              />

              <Marks>
                <h2>Marcadores</h2>

                <div className="tags">
                  {fields.map((field, index) => (
                    <NoteItem
                      key={field.id}
                      value={field.value}
                      handleTagAction={() => handleRemoveTag(index)}
                      {...register(`tags.${index}.value`)}
                    />
                  ))}

                  <NoteItem
                    isNew
                    placeholder="Novo marcador"
                    value={String(watch('newTag') || '')}
                    handleTagAction={handleAddTag}
                    {...register('newTag')}
                  />
                </div>

                {errors.tags?.message ? (
                  <ErrorMessage role="alert">{errors.tags?.message}</ErrorMessage>
                ) : null}
              </Marks>

              <div className="col-2">
                <Button
                  title="Descartar alterações"
                  iSactive={false}
                  onClick={handleDiscardMovie}
                />

                <Button
                  form="note"
                  title="Salvar alterações"
                  type="submit"
                />
              </div>
            </Fieldset>
          </form>
        </Section>
      </Content>
    </Container>
  );
}
