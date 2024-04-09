import styled from 'styled-components';

export const Container = styled.section`
  grid-area: section;
  overflow-y: auto;
  margin: 0 123px;

  &::-webkit-scrollbar{
    background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  }

  &::-webkit-scrollbar-thumb{
    background: ${({ theme }) => theme.COLORS.ROSE};;
    border-radius: 8px;
    width: 8px;
  }

`

