import React from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";

const Provider = new GoogleAuthProvider();

const createUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};



const signInGoogle = () => {
  return signInWithPopup(auth, Provider);
};

const userInfo = {
  createUser,
  
  signInGoogle,
};

const AuthProvider = ({ children }) => {
  return <AuthContext value={userInfo}>{children}</AuthContext>;
};

export default AuthProvider;
