import { FiPlus, FiX } from "react-icons/fi";
import { Container } from "./styles";
import { InputHTMLAttributes } from "react";

interface NoteItemProps extends InputHTMLAttributes<HTMLInputElement>  {
  isNew?: boolean;
  value: string;
  handleTagAction: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export function NoteItem({ isNew = false, value, handleTagAction, ...rest }: NoteItemProps) {
  return (
    <Container $isNew={isNew}>
      <input type="text" value={value} readOnly={!isNew} {...rest} />

      <button
        onClick={handleTagAction}
        type="button"
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  );
}
