import { HTMLAttributes } from 'react';
import { Container } from './styles'

interface TagProps extends HTMLAttributes<HTMLSpanElement> {
  title: string;
  secondaryColor?: boolean;
}

export function Tag({ title, secondaryColor = false, ...rest }: TagProps) {
  return (
    <Container $secondaryColor={secondaryColor} {...rest}>
      {title}
    </Container>
  )
}