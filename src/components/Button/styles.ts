import styled from 'styled-components'

interface ContainerProps {
  $iSactive: boolean;
}

export const Container = styled.button<ContainerProps>`
  width: 100%;
  min-height: 3.5rem;

  background-color: ${({ theme, $iSactive }) => $iSactive ? theme.COLORS.ROSE : theme.COLORS.GRAY_800};
  color: ${({ theme, $iSactive }) => $iSactive ? theme.COLORS.GRAY_800 : theme.COLORS.ROSE};

  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
 
`