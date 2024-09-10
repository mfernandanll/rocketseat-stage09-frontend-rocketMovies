import { Brand, Container, Profile, Logout, SearchBar } from "./styles";
import { useAuth } from '../../hooks/auth';
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { api } from "../../services/api";

import avatarPlaceholder from "../../assets/avatar_placeholder.svg";
import { ReactNode, useEffect } from "react";
import { InputField } from "../InputField";
import { FiSearch } from "react-icons/fi";

import * as zod from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const search = zod.object({
  query: zod.string(),
})

export type SearchInfo = zod.infer<typeof search>

interface HeaderProps {
  children?: ReactNode;
  handleSearch: (data: SearchInfo) => void;
}

export function Header({ handleSearch }: HeaderProps) {
  const { signOut, user } = useAuth();
  const navigation = useNavigate();
  const { register, handleSubmit, watch } = useForm<SearchInfo>({
    resolver: zodResolver(search),
  })

  function handleSignOut() {
    navigation("/");
    signOut();
  }

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  const query = watch('query');

  useEffect(() => {
    if (query === '') {
      handleSubmit(handleSearch)(); 
    }
  }, [query, handleSubmit, handleSearch]);

  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <SearchBar onSubmit={handleSubmit(handleSearch)}>
        <InputField 
          placeholder="Pesquisar pelo título" 
          type="text"
          {...register('query')} 
        />
        <button type="submit">
          <FiSearch />
        </button>
      </SearchBar>
      
      <Profile to="/profile">
        <div>
          <strong>{user.name}</strong>
        </div>

        <img src={avatarUrl} alt={user.name} />
      </Profile>

      <Logout onClick={handleSignOut}>sair</Logout>
    </Container>
  );
}
