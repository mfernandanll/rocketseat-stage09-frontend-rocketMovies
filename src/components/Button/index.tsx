import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>{
  title: string;
  iSactive?: boolean;
}

export function Button({ title, iSactive = true, ...rest }: ButtonProps) {
  return (
    <Container
      type="button"
      $iSactive= {iSactive}
      {...rest}
    >
      {title}
    </Container >
  )
}