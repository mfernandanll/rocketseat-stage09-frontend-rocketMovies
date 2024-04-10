import { Container } from './styles'

export function Button({ title, iSactive = true, ...rest }) {
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