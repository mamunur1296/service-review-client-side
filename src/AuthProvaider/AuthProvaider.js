import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import app from "../Firebase/Firebade.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(NaN);
  const [loder, setLoder] = useState(true);
  const regester = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    return signInWithPopup(auth, provider);
  };
  useEffect(() => {
    const unsuscript = onAuthStateChanged(auth, (newuser) => {
      setUser(newuser);
    });
    return () => unsuscript();
  }, []);
  const info = {
    user,
    loder,
    regester,
    login,
    googleLogin,
  };
  return (
    <div>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvaider;
