import { Rating } from "../Rating";
import { Tag } from "../Tag";
import { Container } from "./styles";

export function Card({ data, ...rest }) {
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
