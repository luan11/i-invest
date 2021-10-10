import { ReactNode, createContext, useState, useEffect } from 'react';
import {
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  GoogleAuthProvider,
  OAuthCredential,
  User,
} from 'firebase/auth';

import { auth, provider } from '../auth/config';

interface AuthContextData {
  credential: OAuthCredential | null;
  token?: string;
  user: User | null;
  error?: string;
  isLoading: boolean;
  isLoadingButton: boolean;
  isAuthenticated: boolean | null;
  login: (callback: () => void) => void;
  logout: () => void;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextData);

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [credential, setCredential] = useState<OAuthCredential | null>(null);
  const [token, setToken] = useState<string | undefined>(undefined);
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState(``);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingButton, setIsLoadingButton] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  function login(callback: () => void) {
    setIsLoadingButton(true);

    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);

        setCredential(credential);
        setToken(credential?.accessToken);
        setUser(result.user);
        setIsAuthenticated(true);
        callback();
      })
      .catch((error) => {
        setError(error.message);
        setCredential(GoogleAuthProvider.credentialFromError(error));
        setIsAuthenticated(false);
      })
      .finally(() => {
        setIsLoadingButton(false);
      });
  }

  function logout() {
    setIsLoading(true);

    signOut(auth).finally(() => {
      setIsLoading(false);
      setCredential(null);
      setToken(undefined);
      setUser(null);
      setIsAuthenticated(false);
    });
  }

  useEffect(() => {
    setIsLoading(true);

    onAuthStateChanged(
      auth,
      (loggedUser) => {
        if (loggedUser) {
          setUser(auth.currentUser);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }

        setIsLoading(false);
      },
      (receivedError) => {
        setError(receivedError.message);
        setIsLoading(false);
        setIsAuthenticated(false);
      }
    );
  }, []);

  return (
    <AuthContext.Provider
      value={{
        credential,
        token,
        user,
        error,
        isLoading,
        isLoadingButton,
        isAuthenticated,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
