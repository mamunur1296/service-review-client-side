import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebade.config";
export const AuthContext = createContext();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(NaN);
  const [loder, setLoder] = useState(true);
  const regester = (email, password) => {
    setLoder(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const login = (email, password) => {
    setLoder(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoder(true);
    return signInWithPopup(auth, provider);
  };
  const logout = () => {
    localStorage.removeItem("token");
    return signOut(auth);
  };
  const updateNameOrPhoto = (userinfo) => {
    setLoder(true);
    return updateProfile(auth.currentUser, userinfo);
  };
  useEffect(() => {
    const unsuscript = onAuthStateChanged(auth, (newuser) => {
      setUser(newuser);
      setLoder(false);
    });
    return () => unsuscript();
  }, []);
  const info = {
    user,
    loder,
    regester,
    login,
    googleLogin,
    logout,
    updateNameOrPhoto,
  };
  return (
    <div>
      <AuthContext.Provider value={info}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvaider;
