import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  padding: 32px;

  background-color: ${({theme}) => theme.COLORS.ROSE_700};
  border-radius: 16px;
  margin-bottom: 24px;

  > h3 {
    color: ${({theme}) => theme.COLORS.WHITE};

    font-size: 24px;
    margin-bottom: 8px;
  }

  .stars {
    display: flex;
    color: ${({theme}) => theme.COLORS.ROSE};
    margin-bottom: 15px;
  }

  > p {
    color: ${({theme}) => theme.COLORS.GRAY_200};

    font-size: 16px;
    margin-bottom: 15px;
  }

  &:hover{
    background-color: ${({theme}) => theme.COLORS.ROSE_600};
  }
`