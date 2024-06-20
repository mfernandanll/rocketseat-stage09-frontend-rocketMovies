import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 7.25rem auto;
  grid-template-areas: 
  "header"
  "content";
`

export const Head = styled.header`
  grid-area: header;

  height: 7.25rem;
  width: 100%;
  padding: 1.87rem 7.68rem;

  background-color: ${({ theme }) => theme.COLORS.ROSE_700};

  display: flex;
  align-items: center;
  gap: 4rem;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.ROSE_700};

  > a {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }
`

export const Form = styled.form`
  grid-area: content;
  width: 21.25rem;
  margin: 1.87rem auto 0;

  > div:nth-child(4), button {
    margin-top: 1.5rem;
  }

  > div:not(#avatar){
    margin-bottom: 0.5rem;
  }
`
export const Avatar = styled.div`
  position: relative;
  margin: -7.75rem auto 4rem;

  width: 11.62rem;
  height: 11.62rem;
  
  > img {
    border-radius: 50%;
    width: 11.62rem;
    height: 11.62rem;
  }

  > label {
    width: 3rem;
    height: 3rem;

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
      width: 1.25rem;
      height: 1.25rem;
      color: ${({ theme }) => theme.COLORS.GRAY_800};
    }
  }
`
