import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRef } from "react";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const unameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("uname", unameRef.current.value);
    console.log("email", emailRef.current.value);
    console.log("password", passwordRef.current.value);

    const reg = await axios
      .post("http://localhost:1337/api/auth/local/register", {
        username: `${unameRef.current.value}`,
        email: `${emailRef.current.value}`,
        password: `${passwordRef.current.value}`,
      })
      .then((res) => {
        console.log("res", res);
      });
  };
  return (
    <div>
      <input type="text" className="border border-black" ref={unameRef} />
      <input type="text" className="border border-black" ref={emailRef} />
      <input
        type="password"
        className="border border-black"
        ref={passwordRef}
      />
      <button onClick={handleSubmit}>go</button>
    </div>
  );
};

export default Home;
