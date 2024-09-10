import { ButtonHTMLAttributes } from 'react';
import { Container } from './styles'

interface ButtonProps extends ButtonHTMLAttributes<HTMLElement>{
  title: string;
  isLoading?: boolean;
  variant?: "primary" | "secondary"; 
}

export function Button({ title, isLoading = false, variant = 'primary', ...rest }: ButtonProps) {
  return (
    <Container
      type="button"
      $variant={variant}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? "Carregando..." : title}
    </Container >
  )
}