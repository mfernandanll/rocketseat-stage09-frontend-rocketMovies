import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 2rem;

  background-color: ${({theme}) => theme.COLORS.ROSE_700};
  border-radius: 1rem;
  margin-bottom: 2rem;

  > h3 {
    color: ${({theme}) => theme.COLORS.WHITE};

    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  .stars {
    display: flex;
    color: ${({theme}) => theme.COLORS.ROSE};
    margin-bottom: 1rem;
  }

  > p {
    color: ${({theme}) => theme.COLORS.GRAY_200};

    font-size: 1rem;
    margin-bottom: 1rem;
  }

  &:hover{
    background-color: ${({theme}) => theme.COLORS.ROSE_600};
  }
`