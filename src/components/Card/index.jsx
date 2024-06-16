import { Tag } from "../Tag";
import { Container } from "./styles";
import { IoIosStar } from "react-icons/io";

export function Card({ data, ...rest }) {
  return (
    <Container {...rest}>
      <h3>{data.title}</h3>
      <div className="stars">
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
        <IoIosStar />
      </div>

      <p>{data.description}</p>
      {
        data.tags && (
          <footer>
            {data.tags.map((tag) => (
              <Tag key={tag.id} title={tag.name} />
            ))}
          </footer>
        )
      }
    </Container>
  );
}
