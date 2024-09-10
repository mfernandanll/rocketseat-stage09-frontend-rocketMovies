import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.header`
  grid-area: header;

  width: 100%;

  display: flex;
  align-items: center;
  gap: 4rem;
  justify-content: space-between;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_400};

  padding: 1.875rem 7.68rem;
  position: relative;
`

export const Brand = styled.div`
  color: ${({ theme }) => theme.COLORS.ROSE};
  font-size: 1rem;
  font-weight: 700;
`

export const SearchBar = styled.form`
  display: flex;
  align-items: center;
  flex-grow: 1;
  position: relative;

  button {
    background: transparent;
    border: none;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    position: absolute;
    right: 1rem;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  align-items: flex-start;

  > div {
    margin-right: 0.56rem;
    padding-top: 1rem;
    font-size: 0,87rem;
    line-height: 1.12rem;

    strong {
      color: ${({ theme }) => theme.COLORS.WHITE};
      white-space: nowrap;
    }
  }

  > img {
    width: 4rem;
    height: 4rem;
    border-radius: 50%;

    border: 1px solid;
    border-color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`

export const Logout = styled.button`
  border: none;
  background: none;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  font-size: 0.87rem;
  line-height: 1.12rem;

  position: absolute;
  bottom: 2.18rem;
  right: 12.31rem;
`;