import styled from 'styled-components'

export const Container = styled.header`
  grid-area: header;

  height: 116px;
  width: 100%;

  display: flex;
  align-items: center;
  gap: 64px;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_400};

  padding: 30px 123px;
`

export const Brand = styled.div`
  color: ${({ theme }) => theme.COLORS.ROSE};
  font-size: 16px;
  font-weight: 700;
`
export const Profile = styled.a`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    margin-right: 9px;

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
      white-space: nowrap;
    }

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`