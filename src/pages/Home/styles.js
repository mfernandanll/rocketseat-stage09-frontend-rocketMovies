import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px 132px auto;
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

  padding: 0 123px;


  > h2 {
    font-size: 32px;
  }
`

export const Button = styled(Link)`
  width: 207px;
  height: 48px;

  background-color: ${({ theme }) => theme.COLORS.ROSE};
  color: ${({ theme }) => theme.COLORS.GRAY_700};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
`
