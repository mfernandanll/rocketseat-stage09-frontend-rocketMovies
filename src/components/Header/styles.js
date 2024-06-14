import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
  position: relative;
`

export const Brand = styled.div`
  color: ${({ theme }) => theme.COLORS.ROSE};
  font-size: 16px;
  font-weight: 700;
`
export const Profile = styled(Link)`
  display: flex;
  align-items: center;

  > div {
    margin-right: 9px;
    font-size: 14px;
    line-height: 18px;

    height: 4px;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
      white-space: nowrap;
    }
  }

  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  font-size: 14px;
  line-height: 18px;

  position: absolute;
  bottom: 26px;
  right: 195px;
`;