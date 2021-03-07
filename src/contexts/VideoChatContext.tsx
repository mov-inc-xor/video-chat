import React, {useContext, useState} from "react";

type User = {
  id: string,
  name: string,
}

type VideoChatContextProps = {
  joined: boolean,
  join: () => void,
  leave: () => void,
  users: User[],
}

const VideoChatContext = React.createContext<VideoChatContextProps | undefined>(undefined);

function useVideoChat() {
  const context = useContext(VideoChatContext);

  if (context === undefined) {
    throw new Error("useVideoChat must be within VideoChatProvider");
  }

  return context;
}

type VideoChatProviderProps = {
  children: React.ReactNode,
}

function VideoChatProvider({children}: VideoChatProviderProps) {
  const [joined, setJoined] = useState(true);
  const [users, setUsers] = useState([
    {
      id: '1',
      name: 'Илья'
    },
    {
      id: '2',
      name: 'Алина'
    },
  ])

  const join = () => {
    setJoined(true);
  };

  const leave = () => {
    setJoined(false);
  };

  return (
    <VideoChatContext.Provider
      value={{
        joined,
        join,
        leave,
        users,
      }}>
      {children}
    </VideoChatContext.Provider>
  );
}

export {useVideoChat, VideoChatProvider};