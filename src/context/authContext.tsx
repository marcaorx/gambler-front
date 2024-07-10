"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { auth } from "@/firebase/config";
import { User, onAuthStateChanged } from "firebase/auth";

interface AuthContextParams {
  currentUser: User | null;
  isUserLoggedIn: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextParams>({
  currentUser: null,
  isUserLoggedIn: false,
  isLoading: false,
});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  function initilizaUser(user: User | null) {
    if (user) {
      setCurrentUser({ ...user });
      setIsUserLoggedIn(true);
    } else {
      setCurrentUser(null);
      setIsUserLoggedIn(false);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    return onAuthStateChanged(auth, initilizaUser);
  }, []);

  const value = { currentUser, isUserLoggedIn, isLoading };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
