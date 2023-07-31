"use client";
import { createContext } from "react";
import { IUser } from "@/interfaces";
import { FormDataUser } from "@/app/auth/register/page";

interface ContextProps {
  isLoggedIn: boolean;
  user?: IUser;
  onLogout: () => void;
  onLevelUp: () => void;
  onLoginUser: (email: string, password: string) => Promise<boolean>;
  onRegisterUser: (newUser:FormDataUser) => Promise<{ hasError: boolean; message?: string; }>;
}

export const AuthContext = createContext({} as ContextProps);
