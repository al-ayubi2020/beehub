import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { ContextProviderProps, UserContextValue } from "./interface";
import nookies from "nookies";
import { useSnackbar } from "notistack";
import React from "react";
import { useRouter } from "next/router";
export const UserContext = createContext({} as UserContextValue);

export const useUserContext = () => useContext(UserContext);

export const UserContextProvider: React.FC<ContextProviderProps> = ({
  children,
}) => {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { enqueueSnackbar } = useSnackbar();

  const login = async (identifier: any, password: any) => {
    setLoading(true);
    const login = await axios
      .post("http://localhost:1337/api/auth/local", {
        identifier: `${identifier}`,
        password: `${password}`,
      })
      .then((res) => {
        console.log("res", res);
        if (res.data.jwt) {
          setUser(res.data.user);
          setToken(res.data.jwt);
          console.log("jwt", token);
          nookies.set(null, "token", res.data.jwt);
          setLoading(false);
          enqueueSnackbar("Berhasil login, selamat datang di BeeHub!", {
            variant: "info",
          });
          router.replace("/");
        }
      })
      .catch((err) => {
        console.log("error", err);
        setError(err);
        setLoading(false);
        enqueueSnackbar(`Terjadi error saat login [${err}]`, {
          variant: "error",
        });
      });
  };

  const register = async (
    username: any,
    email: any,
    password: any,
    customRole: any,
    fullname: any
  ) => {
    setLoading(true);
    const register = await axios
      .post("http://localhost:1337/api/auth/local/register", {
        username: `${username}`,
        email: `${email}`,
        password: `${password}`,
        customRole: `${customRole}`,
        fullname: `${fullname}`,
      })
      .then((res) => {
        console.log("res", res);
        if (res.data.jwt) {
          setUser(res.data.user);
          setToken(res.data.jwt);
          nookies.set(null, "token", res.data.jwt);
          setLoading(false);
          enqueueSnackbar("Berhasil login, selamat datang di BeeHub!", {
            variant: "info",
          });
        }
      })
      .catch((err) => {
        console.log("error", err);
        setError(err);
        setLoading(false);
        enqueueSnackbar(`Terjadi error saat login [${err}]`, {
          variant: "error",
        });
      });
  };

  const logoutUser = () => {
    try {
      setLoading(true);
      nookies.destroy(null, "token");
      setUser(null);
      setToken("");
      setError("");
      setLoading(false);
      router.replace("/");
      enqueueSnackbar("Berhasil logout", {
        variant: "info",
      });
    } catch (err) {
      enqueueSnackbar(`Terjadi error saat logout [${err}]`, {
        variant: "error",
      });
    }
  };

  const contextValue = {
    user,
    loading,
    error,
    token,
    login,
    register,
    logoutUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
