import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 116px auto;
  grid-template-areas: 
  "header"
  "content";
`

export const Content = styled.div`
  grid-area: content;
  overflow-y: auto;

  &::-webkit-scrollbar{
    background-color: ${({theme}) => theme.COLORS.GRAY_700};
  }

  &::-webkit-scrollbar-thumb{
    background: ${({theme}) => theme.COLORS.ROSE};;
    border-radius: 8px;
    width: 8px;
  }
`
