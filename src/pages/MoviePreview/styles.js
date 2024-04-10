import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  margin-bottom: 85px;

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
  align-items: center;

  padding: 0 123px;

`

export const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 24px;

  > h1, .stars {
    font-size: 36px;
    margin-right: 18px;
  }

  > svg, .stars {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

  > img {
    width: 16px;
    height: 16px;
    border-radius: 35px;
  }

  > span, img, svg {
    margin-right: 8px;
  }

  .tags {
    margin: 16px 0 40px 0;
  }
`

export const Description = styled.p`
  font-size: 16px;
  margin-bottom: 14px;
  text-align: justify;
`