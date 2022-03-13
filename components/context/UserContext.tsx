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
  const [username, setUsername] = useState("");
  const [customRole, setCustomRole] = useState("");
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [modalOpen, setModalOpen] = useState(false);
  const [modalAdminOpen, setModalAdminOpen] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    const cookies = nookies.get();
    const token = cookies.token;
    if (token) {
      const user = JSON.parse(cookies.beehub);
      setUser(user);
      setUsername(user.username);
      setCustomRole(user.customRole);
    } else {
      setUsername("");
      setCustomRole("");
    }
    console.log("state user", user);
    setToken(token);
  }, [token]);

  const login = async (identifier: any, password: any) => {
    setLoading(true);
    const login = await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
        identifier: `${identifier}`,
        password: `${password}`,
      })
      .then((res) => {
        console.log("res", res);
        if (res.data.jwt) {
          const userObj = res.data.user;
          const userJson = JSON.stringify(userObj);
          setUser(res.data.user);
          setToken(res.data.jwt);
          console.log("jwt", token);
          nookies.set(null, "token", res.data.jwt);
          nookies.set(null, "beehub", userJson);
          setLoading(false);
          setModalOpen(false);
          enqueueSnackbar("Berhasil login, selamat datang di BeeHub!", {
            variant: "success",
          });
        }
      })
      .catch((err) => {
        console.log("error", err);
        setError(err);
        setLoading(false);
        setModalOpen(false);
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
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local/register`, {
        username: `${username}`,
        email: `${email}`,
        password: `${password}`,
        customRole: `${customRole}`,
        fullname: `${fullname}`,
      })
      .then((res) => {
        console.log("res", res);
        if (res.data.jwt) {
          setLoading(false);
          setModalOpen(false);
          enqueueSnackbar("Berhasil register, silahkan login!", {
            variant: "success",
          });
        }
      })
      .catch((err) => {
        console.log("error", err);
        setError(err);
        setLoading(false);
        setModalOpen(false);
        enqueueSnackbar(`Terjadi error saat register [${err}]`, {
          variant: "error",
        });
      });
  };

  const postArticle = async (title: any, body: any) => {
    const postArticle = await axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
        {
          data: {
            titile: title,
            body: body,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        enqueueSnackbar("Article ditambahkan", {
          variant: "info",
        });
        router.reload();
      });
  };

  const postComment = async (comment: any, postId: any) => {
    const postComment = await axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/comments`,
        {
          data: {
            comment: comment,
            author: username,
            post: postId,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        enqueueSnackbar("Comment ditambahkan", {
          variant: "info",
        });
        router.reload();
      });
  };

  const putComment = async (comment: any, commentId: any) => {
    const putComment = await axios
      .put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/comments/${commentId}`,
        {
          data: {
            comment: comment,
          },
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        enqueueSnackbar("Comment diperbaiki", {
          variant: "info",
        });
        router.reload();
      });
  };

  const deleteComment = async (commenttId: any) => {
    const deleteComment = await axios
      .delete(`${process.env.NEXT_PUBLIC_API_URL}/api/comments/${commenttId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        enqueueSnackbar("Comment dihapus", {
          variant: "info",
        });
        router.reload();
      });
  };

  const logoutUser = () => {
    try {
      setLoading(true);
      nookies.destroy(null, "token");
      nookies.destroy(null, "beehub");
      setUser(null);
      setToken("");
      setError("");
      setUsername("");
      setCustomRole("");
      setLoading(false);
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
    modalOpen,
    setModalOpen,
    login,
    register,
    logoutUser,
    username,
    postComment,
    deleteComment,
    customRole,
    modalAdminOpen,
    setModalAdminOpen,
    postArticle,
    putComment,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
