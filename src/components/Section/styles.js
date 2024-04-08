import styled from 'styled-components';

export const Container = styled.section`
  margin: 50px 123px;
  > h2 {
    font-size: 32px;
  }

  .header {
    display: flex;
    justify-content: space-between
  }

`

export const Button = styled.button`
  width: 207px;
  height: 48px;

  background-color: ${({theme}) => theme.COLORS.ROSE};
  color: ${({theme}) => theme.COLORS.GRAY_700};

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 8px;
`