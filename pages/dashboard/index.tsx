import type { NextPage } from "next";
import React, { useState } from "react";
import Link from "next/link";
import nookies from "nookies";
import { useRouter } from "next/router";
import { useUserContext } from "../../components/context/UserContext";

export const getServerSideProps = async (ctx: any) => {
  const cookies = nookies.get(ctx);

  console.log(cookies);

  if (!cookies.token) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    props: {},
  };
};

const Dashboard: NextPage = () => {
  const router = useRouter();
  const { token, logoutUser } = useUserContext();

  const logout = () => {
    logoutUser();
  };

  return (
    <div className="w-screen min-h-screen flex items-center justify-center flex-col">
      <p>{token}</p>
      <button className="bg-red-600 px-2 py-1" onClick={logout}>
        LogOut
      </button>
    </div>
  );
};

export default Dashboard;
