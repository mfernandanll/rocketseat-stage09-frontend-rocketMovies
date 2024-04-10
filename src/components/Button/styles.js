import styled from 'styled-components'

export const Container = styled.button`
  width: 100%;
  height: 48px;

  background-color: ${({ theme, $iSactive }) => $iSactive ? theme.COLORS.ROSE : theme.COLORS.GRAY_800};
  color: ${({ theme, $iSactive }) => $iSactive ? theme.COLORS.GRAY_800 : theme.COLORS.ROSE};


  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  justify-content: center;
 
`