import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  margin-bottom: 85px;

  display: grid;
  grid-template-rows: 116px 132px auto;
  grid-template-areas: 
  "header"
  "section";
`

export const Head = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;
  padding: 30px 123px;

  background-color: ${({ theme }) => theme.COLORS.ROSE_700};

  display: flex;
  align-items: center;
  gap: 64px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.ROSE_700};

`

export const Form = styled.form`
  max-width: 340px;
  margin: 30px auto 0;

  > div:nth-child(4) {
    margin-top: 24px;
  }
`
export const Avatar = styled.div`
  position: relative;
  margin: -124px auto 32px;

  width: 186px;
  height: 186px;
  
  > img {
    border-radius: 50%;
    width: 186px;
    height: 186px;
  }

  > label {
    width: 48px;
    height: 48px;

    background-color: ${({ theme }) => theme.COLORS.ROSE};
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    bottom: 7px;
    right: 7px;

    cursor: pointer;

    input {
      display: none;
    }

    svg {
      width: 20px;
      height: 20px;
      color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    }
  }
`
