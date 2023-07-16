"use client";

import { SessionProvider } from "next-auth/react";
import { FC, useEffect, useMemo, useReducer } from 'react';
import { AuthContext, authReducer } from './';
import { IUser } from '@/interfaces';
import { getYourMindUpApi } from '@/api';
import Cookies from 'js-cookie';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { FormDataUser } from "@/app/auth/register/page";

export interface AuthState {
  isLoggedIn: boolean;
  user?: IUser;
}

export const AuthInitialState: AuthState = {
  isLoggedIn: false,
  user: undefined,
};

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const AuthProvider: FC<Props> = ({ children }) => {
  // const { replace, reload, query } = useRouter()
  const { data, status } = useSession()
  const [state, dispatch] = useReducer(authReducer, AuthInitialState);

  useEffect(() => {
    if (status === 'authenticated') {
      dispatch({ type: 'Auth - Login', payload: data?.user as IUser })
    }
  }, [status, data])


  // const onCheckToken = async () => {
  //   if (!Cookies.get('token')) {
  //     return;
  //   }
  //   try {
  //     const { data } = await getYourMindUpApi.get('/user/validate-token');
  //     const { token, user } = data;
  //     Cookies.set('token', token);
  //     dispatch({ type: 'Auth - Login', payload: user });
  //     // replace('/')
  //   } catch (error) {
  //     Cookies.remove('token');
  //   }
  // }

  // useEffect(() => {
  //   onCheckToken()
  // }, [])

  const onLoginUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data } = await getYourMindUpApi.post('/user/login', { email, password });
      const { token, user } = data;
      Cookies.set('token', token);
      console.log(data);
      dispatch({ type: 'Auth - Login', payload: user });
      return true;
    } catch (error) {
      return false;
    }
  }

  const onRegisterUser = async (newUser:FormDataUser): Promise<{ hasError: boolean; message?: string; }> => {
    try {
      const { data } = await getYourMindUpApi.post('/user/register', { ...newUser });
      const { token, user } = data;
      Cookies.set('token', token);
      dispatch({ type: 'Auth - Login', payload: user });
      return {
        hasError: false,
      };
    } catch (error) {
      if (axios.isAxiosError(error)) {
        return {
          hasError: true,
          message: error.response?.data.message
        }
      }
      return {
        hasError: true,
        message: 'No se pudo crear el usuario, intente de nuevo'
      }
    }
  }

  const onLogout = () => {
    signOut();

    // Cookies.remove('token');
    // reload();
  }
  return (
    <AuthContext.Provider value={{ ...state, onLoginUser, onRegisterUser, onLogout }}>
      {children}
    </AuthContext.Provider>
  )
};