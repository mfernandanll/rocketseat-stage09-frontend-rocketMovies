import styled from "styled-components"


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
  align-items: center;

  padding: 0 7.68rem;
`

export const Fieldset = styled.fieldset`
  display: flex;
  gap: 2.5rem;
  flex-direction: column;

  border: none;

  > legend {
    font-size: 2.25rem;
    margin-bottom: 2.5rem;
  }

  .col-2{
    display: flex;
    gap: 2.5rem;
  }
`

export const Marks = styled.section`
  font-size: 1.25rem;
  color: ${({ theme }) => theme.COLORS.GRAY_200};

  .tags {
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    margin-top: 1.5rem;
    border-radius: 8px;
    padding: 1rem;

    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`