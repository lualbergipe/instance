import React, { createContext, ReactNode, useState } from 'react';

interface UserContextType {
  auth: boolean | null;  
  username: string | null;
  login: (username: string) => void;
  logout: () => void;
}

const defaultContextValue: UserContextType = {
  auth: null, 
  username: null,
  login: () => console.log("creando el usuario en el context"),
  logout: () => console.log("eliminando el usuario del context"),
};

export const UserContext = createContext<UserContextType>(defaultContextValue);

interface UserProviderProps {
  children: ReactNode;
}

export function UserProvider({ children }: UserProviderProps) {
  const [auth, setAuth] = useState<boolean | null>(null);
  const [username, setUsername] = useState<string | null>(null);

  const login = (username: string) => {
    console.log("creando el usuario en el context");
    setAuth(true); 
    setUsername(username)
  };

  const logout = () => {
    console.log("eliminando el usuario del context");
    setAuth(null);  
    setUsername(null);
  };

  const valueContext: UserContextType = {
    auth,
    username,
    login,
    logout,
  };

  return (
    <UserContext.Provider value={valueContext}>
      {children}
    </UserContext.Provider>
  );
};
