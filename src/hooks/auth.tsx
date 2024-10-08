import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from 'react';

import { api } from "../services/api";
import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';
import { toastOptions } from '../config/toastConfig';

interface AuthContextType {
  signIn: (name: string, password: string) => Promise<void>
  signUp: (name: string, email: string, password: string, callback: NavigateFunction) => Promise<void>
  signOut: () => void
  updatedProfile: (user: User, avatarFile: File | null) => Promise<void>,
  user: User;
}

interface AuthProviderProps {
  children: ReactNode
}

interface DataApiResponse {
  token: string;
  user: User;
}

export interface User {
  name: string;
  email: string;
  password: string;
  old_password?: string;
  avatar?: string;
}

const AuthContext = createContext({} as AuthContextType);

function AuthProvider({ children }: AuthProviderProps) {
  const [data, setData] = useState<DataApiResponse>({} as DataApiResponse);

  async function signIn(email: string, password: string) {
    try {
      const response = await api.post("sessions", { email, password });
      const { token, user } = response.data;

      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));
      localStorage.setItem("@rocketnotes:token", token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({ token, user });

    } catch (error: unknown) {
      if (error instanceof Error && 'response' in error && error.response) {
        toast.error((error.response as any).data.message, toastOptions);
      } else {
        toast.error('Não foi possível entrar.', toastOptions);
      }
    }
  }

  async function signUp(name: string, email: string, password: string, callback: NavigateFunction) {
    try {
      api.post("/users", { name, email, password })
      toast.success('Cadastro realizado com sucesso!', toastOptions);
      callback("/");
    } catch (error: unknown) {
      if (error instanceof Error && 'response' in error && error.response) {
        toast.error((error.response as any).data.message, toastOptions);
      } else {
        toast.error('Não foi possível cadastrar.', toastOptions);
      }
    }
  }

  async function updatedProfile(user: User, avatarFile?: File | null) {
    try {
      if (avatarFile) {
        const fileUploadForm = new FormData();
        fileUploadForm.append("avatar", avatarFile);

        const response = await api.patch("/users/avatar", fileUploadForm);
        user.avatar = response.data.avatar;
      }
      await api.put("/users", user);
      localStorage.setItem("@rocketnotes:user", JSON.stringify(user));

      setData({
        token: data.token,
        user,
      });

      toast.success('Perfil atualizado com sucesso!', toastOptions);

    } catch (error: unknown) {
      if (error instanceof Error && 'response' in error && error.response) {
        toast.error((error.response as any).data.message, toastOptions);
      } else {
        toast.error('Não foi possível atualizar o perfil.', toastOptions);
      }
    }
  }

  function signOut() {
    localStorage.removeItem("@rocketnotes:token");
    localStorage.removeItem("@rocketnotes:user");

    setData({} as DataApiResponse);
  }

  useEffect(() => {
    const token = localStorage.getItem("@rocketnotes:token");
    const user = localStorage.getItem("@rocketnotes:user");

    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`

      setData({
        token,
        user: JSON.parse(user)
      });
    }
  }, []);


  return (
    <AuthContext.Provider value={{
      signIn,
      signUp,
      signOut,
      updatedProfile,
      user: data.user
    }}>
      {children}
    </AuthContext.Provider>
  )
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };