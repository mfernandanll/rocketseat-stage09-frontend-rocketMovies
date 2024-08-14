import styled from 'styled-components'

interface ContainerProps {
  $secondaryColor: boolean;
}

export const Container = styled.span<ContainerProps>`
  font-size: 12px;
  padding: 5px 16px;
  margin-right: 8px;
  border-radius: 8px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme, $secondaryColor }) => $secondaryColor ? theme.COLORS.ROSE_700 : theme.COLORS.GRAY_500};

`