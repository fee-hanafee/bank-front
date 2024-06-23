import { createContext, useContext, useState } from "react";

import * as authApi from "../api/auth-api";
import * as store from "../utils/local-store";
import { useEffect } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState(null);

  async function fetchMe() {
    try {
      const response = await authApi.fetchMe();
      setUser(response.data.user);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    if (store.getToken()) fetchMe();
  }, []);

  async function userLogin(input) {
    const response = await authApi.login(input);
    setUser(response.data.user);
    store.storeToken(response.data.token);
  }

  async function userLogout() {
    store.clearToken();
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, userLogin, userLogout,fetchMe }}>
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  return useContext(AuthContext);
}
