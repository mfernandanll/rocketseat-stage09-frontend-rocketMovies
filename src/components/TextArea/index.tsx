import { TextareaHTMLAttributes } from 'react'
import { Container } from './styles'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export function TextArea({...rest}: TextAreaProps) {
  return(
    <Container {...rest}/>
  )
} 