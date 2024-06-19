import styled from 'styled-components'
import backgroundImg from '../../assets/background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;
`

export const Form = styled.form`
  padding: 0 8.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  text-align: center;

  > h1 {
    font-size: 3rem;
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > p {
    font-size: 0.87rem;
    color: ${({ theme }) => theme.COLORS.GRAY_150};
  }

  > h2 {
    font-size: 1.5rem;
    margin: 3rem 0;
    color: ${({ theme }) => theme.COLORS.WHITE};
    font-weight: medium;
  }

  > a {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > button {
    margin: 1rem 0 2.62rem;
  }
`
export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;
  background-size: cover;
`