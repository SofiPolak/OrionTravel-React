import React, { createContext, useState } from "react";

import * as usersApi from "../services/Admin";

//1er paso: crear el contexto
export const AuthContext = createContext();

//2do paso: crear el Provider
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [isSigned, setIsSigned] = useState(false);

  const signIn = async (email, password) => {
    const response = await usersApi.signInWithEmailAndPassword(email, password);
    setUser({user: response.data.user}); //Problema al momento de almacenar un json en un state
    usersApi.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    setIsSigned(true);
  }
  
  const signOut = () => {
    setUser({});
    setIsSigned(false);
  }

  return (
    <AuthContext.Provider value={{ isSigned, user, signIn, signOut }}>
      {/* 1 a N componentes que van a consumir el contexto */}
      {children}
    </AuthContext.Provider>
  );
};