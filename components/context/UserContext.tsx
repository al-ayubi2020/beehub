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
  const [loading, setLoading] = useState(false);
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
      setToken(token);
    } else {
      setUser(null);
      setUsername("");
      setCustomRole("");
      setToken("");
    }
  }, [token]);

  const login = async (identifier: any, password: any) => {
    setLoading(true);
    const login = await axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/local`, {
        identifier: `${identifier}`,
        password: `${password}`,
      })
      .then((res) => {
        if (res.data.jwt) {
          const userObj = res.data.user;
          const userJson = JSON.stringify(userObj);
          setUser(res.data.user);
          setToken(res.data.jwt);
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
        if (res.data.jwt) {
          setLoading(false);
          setModalOpen(false);
          enqueueSnackbar("Berhasil register, silahkan login!", {
            variant: "success",
          });
        }
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        setModalOpen(false);
        enqueueSnackbar(`Terjadi error saat register [${err}]`, {
          variant: "error",
        });
      });
  };

  const postArticle = async (title: any, body: any, imageUrl: any) => {
    setLoading(true);
    const postArticle = await axios
      .post(
        `${process.env.NEXT_PUBLIC_API_URL}/api/posts`,
        {
          data: {
            titile: title,
            body: body,
            imageUrl: imageUrl,
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
        setModalAdminOpen(false);
        setLoading(false);
        router.reload();
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        setModalAdminOpen(false);
        enqueueSnackbar(`Terjadi error saat post article [${err}]`, {
          variant: "error",
        });
      });

    router.reload();
  };

  const postComment = async (comment: any, postId: any) => {
    setLoading(true);
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
        setLoading(false);
        router.reload();
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        enqueueSnackbar(`Terjadi error saat post comment [${err}]`, {
          variant: "error",
        });
      });
  };

  const putComment = async (comment: any, commentId: any) => {
    setLoading(true);
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
        setLoading(false);
        router.reload();
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        enqueueSnackbar(`Terjadi error saat post komentar terbaru [${err}]`, {
          variant: "error",
        });
      });
  };

  const deleteComment = async (commenttId: any) => {
    setLoading(true);
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
        setLoading(false);
        router.reload();
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
        enqueueSnackbar(`Terjadi error saat hapus komentar [${err}]`, {
          variant: "error",
        });
      });
  };

  const logoutUser = () => {
    try {
      setLoading(true);
      nookies.destroy(null, "token");
      nookies.destroy(null, "beehub");
      setLoading(false);
      enqueueSnackbar("Berhasil logout", {
        variant: "info",
      });
      router.reload();
    } catch (err) {
      nookies.destroy(null, "token");
      nookies.destroy(null, "beehub");
      setLoading(false);
      enqueueSnackbar(`Terjadi error saat logout [${err}]`, {
        variant: "error",
      });
      router.reload();
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
