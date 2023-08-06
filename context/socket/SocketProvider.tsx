"use client";
import { type FC } from 'react';
import { SocketContext } from '.';
import { useSocket } from '../../hooks/useSocket';

// export interface SocketState {
//   prop1: boolean;
// }

// export const SocketInitialState: SocketState = {
//   prop1: false,
// };

interface Props {
  children: JSX.Element | JSX.Element[];
}

export const SocketProvider: FC<Props> = ({ children }) => {
  const { socket, isOnline } = useSocket('https://basic-socket-ffp4-dev.fl0.io/');

  return (
    <SocketContext.Provider value={{ socket, isOnline }}>
      {children}
    </SocketContext.Provider>
  );
};
