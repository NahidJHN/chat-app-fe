"use client";

import useAuthUser from "@/hooks/AuthUser";
import React, { createContext, useEffect, useState } from "react";
import { Socket, io } from "socket.io-client";

export const SocketContext = createContext<any>(null);

function SocketContextProvider({ children }: React.PropsWithChildren) {
  const user = useAuthUser();
  const [socket, setSocket] = useState<Socket>();
  const [onlineUsers, setOnlineUsers] = useState<any[]>([]);

  useEffect(() => {
    if (!socket?.connected && user) {
      const socket = io("http://localhost:5050", {
        query: {
          userId: user._id,
        },
      });
      setSocket(socket);
      //then listen the event
      socket.on("onConnection", (data: any) => {
        setOnlineUsers(data);
      });

      //then listen the event
      socket.on("onDisConnection", (data: any) => {
        setOnlineUsers(data);
      });
      setSocket(socket);
    }

    return () => {
      socket?.disconnect();
    };
  }, [user]);

  return (
    <SocketContext.Provider value={{ socket, onlineUsers }}>
      {children}
    </SocketContext.Provider>
  );
}
export default SocketContextProvider;
