import styled from 'styled-components'

export const Container = styled.button`
  background: none;
  color: ${({ theme }) => theme.COLORS.ROSE};

  border: none;
  font-size: 1rem;

  display: flex;
  align-items: center;

  > svg {
    margin-right: 0.5rem;
  }
`