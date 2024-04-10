import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  > label {
    width: 1px;
    height: 1px;
    position: absolute;
    overflow: hidden;
    margin: -1px;
    padding: 0px;
    border: 0;
    appearance: none;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
  }

  > input{
    width: 100%;
    padding: 19px 24px;

    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    font-size: 14px;

    border-radius: 10px;
    border: none;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100} 
    }
  }
 
`