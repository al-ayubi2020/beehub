import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import styles from "../styles/Home.module.css";
import nookies from "nookies";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUserContext } from "../components/context/UserContext";

export const getServerSideProps = async (ctx: any) => {
  const cookies = nookies.get(ctx);

  console.log(cookies);

  if (cookies.token) {
    return {
      redirect: {
        destination: "/dashboard",
      },
    };
  }

  return {
    props: {},
  };
};

const Home: NextPage = () => {
  const router = useRouter();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useUserContext();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("email", emailRef.current.value);
    console.log("password", passwordRef.current.value);

    login(`${emailRef.current.value}`, `${passwordRef.current.value}`);
  };
  return (
    <div>
      <input type="text" className="border border-black" ref={emailRef} />
      <input
        type="password"
        className="border border-black"
        ref={passwordRef}
      />
      <button onClick={handleSubmit}>go</button>
      <Link href="/register">
        <button>register</button>
      </Link>
    </div>
  );
};

export default Home;
