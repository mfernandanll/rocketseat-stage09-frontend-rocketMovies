import styled from 'styled-components'

export const Container = styled.textarea`
  width: 100%;
  height: 17.12rem;

  font-size: 0.87rem;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border: none;
  resize: none;

  margin-bottom: 0.5rem;
  border-radius: 0.62rem;
  padding: 1rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_100} 
  }
`