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

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen w-screen">
      <div className="min-h-screen w-screen"></div>
    </div>
  );
};

export default Home;
