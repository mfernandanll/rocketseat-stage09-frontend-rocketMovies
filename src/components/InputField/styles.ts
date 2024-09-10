import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
`

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border: solid 2px transparent;
  border-radius: 10px;

  > label {
    width: 1px;
    height: 1px;
    position: absolute;
    overflow: hidden;
    margin: -1px;
    padding: 0px;
    border: 0;
    appearance: none;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }

  > input{
    width: 100%;
    height: 3.5rem;
    padding: 1rem;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-size: 1rem;

    border-radius: 10px;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100} 
    }

    &:-webkit-autofill{
      background-color: transparent !important;
      box-shadow: 0 0 0 30px ${({ theme }) => theme.COLORS.GRAY_600} inset !important;
      -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.COLORS.GRAY_600} inset !important;
      -webkit-text-fill-color: ${({ theme }) => theme.COLORS.WHITE} !important;
      color: ${({ theme }) => theme.COLORS.WHITE} !important;
      transition: background-color 5000s ease-in-out 0s;
    }
  }

  > svg {
    margin-left: 1rem;
  }

  &:focus-within {
    border: ${({ theme }) =>  `2px solid ${theme.COLORS.WHITE}`};
    background-color: none;
  }
`

export const ErrorMessage = styled.p`
  padding-top: 0.5rem;
  font-size: 0.75rem;
  font-weight: 400;
  color: red;
  font-weight: 700;
`