import { FiPlus, FiX } from "react-icons/fi";
import { Container, ErrorMessage } from "./styles";
import { forwardRef, InputHTMLAttributes, LegacyRef } from "react";

interface NoteItemProps extends InputHTMLAttributes<HTMLInputElement>  {
  isNew?: boolean;
  value: string;
  errorMessage?: string;
  handleTagAction: (event: React.MouseEvent<HTMLButtonElement>) => void;
}



export const NoteItem = forwardRef(
  function NoteItem(
    { isNew = false, value, errorMessage, handleTagAction, ...rest }: NoteItemProps,
    ref: LegacyRef<HTMLInputElement>
  ) {
    return (
      <Container $isNew={isNew}>
        <input 
          ref={ref} 
          type="text" 
          value={value} 
          readOnly={!isNew} 
          {...rest} 
        />
  
        <button
          onClick={handleTagAction}
          type="button"
        >
          {isNew ? <FiPlus /> : <FiX />}
        </button>
  
        {errorMessage ? (
            <ErrorMessage role="alert">{errorMessage}</ErrorMessage>
          ) : null}
      </Container>
    );
  }
)

