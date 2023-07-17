
"use client";
import { type FC } from 'react';
import { WebSocketProvider } from 'next-ws/client';
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
  return (
    <WebSocketProvider url="ws://localhost:3000/api/socket/io">

      {children}
    </WebSocketProvider >
  );
};
