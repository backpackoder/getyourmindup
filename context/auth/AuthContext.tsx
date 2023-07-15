"use client";
import { createContext } from "react";
import { IUser } from "@/interfaces";

interface ContextProps {
  isLoggedIn: boolean;
  user?: IUser;
  onLogout: () => void;
  onLoginUser: (email: string, password: string) => Promise<boolean>;
  onRegisterUser: (name: string, email: string, password: string) => Promise<{ hasError: boolean; message?: string; }>;
}

export const AuthContext = createContext({} as ContextProps);
