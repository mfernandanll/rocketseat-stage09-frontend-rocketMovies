import styled from "styled-components"


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
  align-items: center;

  padding: 0 123px;

  > a {
    color: ${({ theme }) => theme.COLORS.ROSE};
  }

`

export const Fieldset = styled.fieldset`
  display: flex;
  gap: 40px;
  flex-direction: column;

  border: none;

  > legend {
    font-size: 36px;
    margin-bottom: 40px;
  }

  .col-2{
    display: flex;
    gap: 40px;
  }
`

export const Marks = styled.section`

  .tags {
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    margin-top: 24px;
    border-radius: 8px;
    padding: 16px;

    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`