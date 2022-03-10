import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import styles from "../styles/Home.module.css";
import nookies from "nookies";
import { useRouter } from "next/router";
import Link from "next/link";
import {
  UserContext,
  useUserContext,
} from "../../components/context/UserContext";

const Home: NextPage = () => {
  const router = useRouter();
  const unameRef = useRef();
  const fullnameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { register } = useUserContext();

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    register(
      `${unameRef.current.value}`,
      `${emailRef.current.value}`,
      `${passwordRef.current.value}`,
      "basic",
      `${fullnameRef.current.value}`
    );
  };
  return (
    <div>
      <input type="text" className="border border-black" ref={unameRef} />
      <input type="text" className="border border-black" ref={fullnameRef} />
      <input type="text" className="border border-black" ref={emailRef} />
      <input
        type="password"
        className="border border-black"
        ref={passwordRef}
      />
      <button onClick={handleSubmit}>go</button>
      <Link href="/">
        <button>login</button>
      </Link>
    </div>
  );
};

export default Home;
