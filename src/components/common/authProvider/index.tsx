import React, { createContext, ReactNode, useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { USER_STORAGE_KEY } from '../../../constants/user';

export type TAuthContextData = {
  isSignedIn: boolean;
  isLoading: boolean;
  signIn: () => void;
};

type TAuthContextProvider = {
  children: ReactNode;
};

export const AuthContext = createContext<TAuthContextData>({} as TAuthContextData);

export const AuthContextProvider = ({ children }: TAuthContextProvider) => {
  const [isSignedIn, setSignedIn] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const checkIsSignedIn = async () => {
      setLoading(true);
      const hasAuth = await AsyncStorage.getItem(USER_STORAGE_KEY);
      setSignedIn(Boolean(hasAuth));
      setLoading(false);
    };

    checkIsSignedIn();
  }, []);

  const signIn = useCallback(async () => {
    await AsyncStorage.setItem(USER_STORAGE_KEY, 'true');
    setSignedIn(true);
  }, []);

  return <AuthContext.Provider value={{ isSignedIn, isLoading, signIn }}>{children}</AuthContext.Provider>;
};
