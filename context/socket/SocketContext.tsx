"use client";
import { createContext } from 'react';
import { type Socket } from 'socket.io-client';

interface Props {
  isOnline: boolean;
  socket: Socket;
}
export const SocketContext = createContext({} as Props);
