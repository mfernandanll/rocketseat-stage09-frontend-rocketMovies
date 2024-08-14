import { HTMLAttributes } from "react";
import { Note } from "../../pages/Home";
import { Rating } from "../Rating";
import { Tag } from "../Tag";
import { Container } from "./styles";

interface CardProps extends HTMLAttributes<HTMLDivElement>{
  data: Note;
}

export function Card({ data, ...rest }: CardProps) {
  return (
    <Container {...rest}>
      <h3>{data.title}</h3>
      <Rating grade={data.rating} isBigSize={false} />

      <p>{data.description}</p>
      {data.tags && (
        <footer>
          {data.tags.map((tag) => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}
