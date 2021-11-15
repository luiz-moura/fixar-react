import React, { createContext, useCallback, useState } from 'react';
import api from '../services/api';

interface AuthState {
  token: string;
  user: {
    [key: string]: string;
  };
}

interface SignInCredentials {
  email: string;
  password: string;
}

interface AuthContextData {
  user: {
    [key: string]: string;
  };
  signIn(credentials: SignInCredentials): Promise<void>;
}

export const AuthContext = createContext<AuthContextData>(
  {} as AuthContextData,
);

export const AuthProvider: React.FC = ({ children }) => {
  const [data, setData] = useState<AuthState>(() => {
    const token = localStorage.getItem('@GoBarber:Token');
    const user = localStorage.getItem('@GoBarber:User');

    if (token && user) {
      return { token, user: JSON.parse(user) };
    }

    return {} as AuthState;
  });

  const signIn = useCallback(async ({ email, password }) => {
    const response = await api.post('sessions', {
      email,
      password,
    });

    const { token, user } = response.data;

    localStorage.setItem('@GoBarber:Token', token);
    localStorage.setItem('@GoBarber:User', JSON.stringify(user));

    setData({ token, user });
  }, []);

  return (
    <AuthContext.Provider value={{ user: data.user, signIn }}>
      {children}
    </AuthContext.Provider>
  );
};
