import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 7.25rem auto;
  grid-template-areas: 
  "header"
  "content";
`

export const Content = styled.div`
  grid-area: content;
  margin: 0 7.68rem;
`

export const SubHeader = styled.div`
  height: 8.25rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;

  > a {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`
export const Title = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  > h1 {
    font-size: 2.25rem;
    margin-right: 1.12rem;
  }
`

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  > h1 {
    font-size: 2.25rem;
    margin-right: 1.12rem;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > img {
    width: 1rem;
    height: 1rem;
    border-radius: 35px;
  }

  > span, img, svg {
    margin-right: 0.5rem;
  }

`

export const Tags = styled(Row)`
  margin: 2.5rem 0;
`

export const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 0.87rem;
  text-align: justify;
`