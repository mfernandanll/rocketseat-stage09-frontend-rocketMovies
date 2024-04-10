import { Container } from './styles'

export function Tag({ title, secondaryColor = false, ...rest }) {
  return (
    <Container $secondaryColor={secondaryColor} {...rest}>
      {title}
    </Container>
  )
}