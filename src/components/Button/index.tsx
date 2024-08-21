import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>{
  title: string;
  loading?: boolean;
  iSactive?: boolean;
}

export function Button({ title, loading = false, iSactive = true, ...rest }: ButtonProps) {
  return (
    <Container
      type="button"
      $iSactive= {iSactive}
      {...rest}
    >
      {loading ? "Carregando..." : title}
    </Container >
  )
}