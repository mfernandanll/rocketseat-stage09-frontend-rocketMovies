import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 7.25rem 8.25rem auto;
  grid-template-areas: 
  "header"
  "title"
  "section";
`

export const Title = styled.div`
  grid-area: title;

  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 7.68rem;


  > h2 {
    font-size: 2rem;
  }
`

export const Button = styled(Link)`
  width: 12.93rem;
  height: 3rem;

  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
`
