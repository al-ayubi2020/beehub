import axios from "axios";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.css";
import nookies from "nookies";
import { useRouter } from "next/router";
import Link from "next/link";
import { useUserContext } from "../components/context/UserContext";
import NavbarContainer from "../components/elements/Navbar";

const Home: NextPage = () => {
  const router = useRouter();

  return <div className="min-h-screen w-screen "></div>;
};

export default Home;
