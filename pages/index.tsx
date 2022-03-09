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
import { Biodata, LandingHeader } from "../components/modules";
import image from "../public/Foto.png";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#e5e5e5]">
      <LandingHeader />
      <Biodata />
      <div className="h-80 w-full border border-red-500 text-center">
        <p className="text-xl font-bold">Pengalaman dan Prestasi</p>
      </div>
    </div>
  );
};

export default Home;
