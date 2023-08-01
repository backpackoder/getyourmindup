"use client";

import { FC, useEffect, useReducer } from 'react';
import Cookies from 'js-cookie';
import axios from 'axios';
import { usePathname } from 'next/navigation';
import { signOut, useSession } from 'next-auth/react';
import { useWebSocket } from "next-ws/client";
import confetti from "canvas-confetti";
import { AuthContext, authReducer } from './';
import { IUser } from '@/interfaces';
import { getYourMindUpApi } from '@/api';
import { FormDataUser } from "@/app/auth/register/page";
import { FullScreenLoading } from "@/components/ui";
import Link from "next/link";
import { Alert, Box } from "@mui/material";
import { StepperCore } from '@/components/ui/stepperCore';

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

const getUserById = async (): Promise<IUser> => {
  const { data } = await getYourMindUpApi('/user');
  return data;
}


export const AuthProvider: FC<Props> = ({ children }) => {
  const { data, status } = useSession();
  const asPath = usePathname()
  const [state, dispatch] = useReducer(authReducer, AuthInitialState);
  const ws = useWebSocket();

  const onRegisterLocalStorage = async (body: string, isPrivate: boolean) => {
    localStorage.removeItem('thank')
    try {
      const { data } = await getYourMindUpApi.post("/thanks", { body, isPrivate });
      if (!isPrivate) {
        ws?.send(body);
      }

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    if (status === 'authenticated') {
      getUserById().then(({ level }) => {
        dispatch({ type: 'Auth - Login', payload: { ...data?.user, level } as IUser })
      })
      if (localStorage.getItem('thank')) {
        const thank = JSON.parse(localStorage.getItem('thank')!) as { body: string, isPrivate: boolean };
        onRegisterLocalStorage(thank.body, thank.isPrivate).then(console.log).catch(console.log);
      }
    }
  }, [status, data])

  if (status === 'loading') {
    return <FullScreenLoading />
  }



  const onLevelUp = () => {
    dispatch({ type: 'Auth - LevelUp', payload: data?.user as IUser })
    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x: 1,
        y: 0,
      },
    });
  }

  const onLoginUser = async (email: string, password: string): Promise<boolean> => {
    try {
      const { data } = await getYourMindUpApi.post('/user/login', { email, password });
      const { token, user } = data;
      Cookies.set('token', token);
      dispatch({ type: 'Auth - Login', payload: user });
      return true;
    } catch (error) {
      return false;
    }
  }

  const onRegisterUser = async (newUser: FormDataUser): Promise<{ hasError: boolean; message?: string; }> => {
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
    <AuthContext.Provider value={{ ...state, onLevelUp, onLoginUser, onRegisterUser, onLogout }}>
      {
        state.user ?
          (
            <StepperCore />
          )
          : (
            <Box sx={{
              position: { xs: 'relative', lg: 'absolute' },
              top: 100,
              width: { xs: '95vw', sm: '60vw', md: '40vw', lg: '30vw' },
              left: { xs: '2.5vw', sm: '20vw', md: '33vw', lg: '35vw' },
            }}>
              <Alert sx={{ mt: -3 }} severity="warning">You must Log In to enjoy all the features — <Link href={`/auth/login?p=${asPath}`}><strong> Log In</strong></Link> </Alert>
            </Box>
          )
      }
      {children}
    </AuthContext.Provider>
  )
};