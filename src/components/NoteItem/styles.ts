import styled from 'styled-components'

interface ContainerProps {
  $isNew: boolean;
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;

  background-color: ${({ theme, $isNew }) => $isNew ? "transparent" : theme.COLORS.GRAY_600};
  color: ${({ theme, $isNew }) => $isNew ? theme.COLORS.GRAY_100 : theme.COLORS.WHITE};

  border: ${({ theme, $isNew }) => $isNew ? `1px dashed ${theme.COLORS.GRAY_100}` : "none"};

  border-radius: 0.62rem;
  padding: 0 1rem;
  margin-right: 1.5rem;

  > button { 
    border: none;
    background: none;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > input {
    height: 3.5rem;
    width: 100%;

    padding: 1rem;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`

export const ErrorMessage = styled.p`
  padding-top: 0.5rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: red;
  font-weight: 700;
`