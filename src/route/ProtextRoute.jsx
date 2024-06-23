import React from "react";
import useAuth from "../context/AuthContextProvider";
import { Navigate } from "react-router-dom";

export default function ProtextRoute({ children }) {
  const { user } = useAuth();
  return user ? children : <Navigate to="/" />;
}
