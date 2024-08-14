import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-height: 13.87rem;
  padding: 2rem;

  background-color: ${({theme}) => theme.COLORS.ROSE_700};
  border-radius: 1rem;
  margin-bottom: 2rem;

  > h3 {
    color: ${({theme}) => theme.COLORS.WHITE};

    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  > p {
    color: ${({theme}) => theme.COLORS.GRAY_200};

    font-size: 1rem;
    margin: 1rem 0;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
            line-clamp: 2;
    -webkit-box-orient: vertical;
  }

  &:hover{
    background-color: ${({theme}) => theme.COLORS.ROSE_600};
  }
`